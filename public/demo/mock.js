/* Bản xem thử: thay Supabase bằng dữ liệu giả lập trong bộ nhớ.
   Không kết nối máy chủ, không cần đăng nhập, tải lại trang là về trạng thái ban đầu. */
(function () {
  window.APP_CONFIG = { SUPABASE_URL: 'demo', SUPABASE_ANON_KEY: 'demo', BUCKET: 'hoso' };
  const ME = 'demo@idcvietnam.vn';
  const now = Date.now(), day = 864e5;
  const iso = d => new Date(now - d * day).toISOString();

  /* ---- tệp PDF mẫu ---- */
  function samplePdf(title, sub) {
    const clean = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[()\\]/g, '');
    const text = `BT /F1 22 Tf 60 740 Td (${clean(title)}) Tj ET BT /F1 12 Tf 60 712 Td (${clean(sub)}) Tj ET BT /F1 11 Tf 60 680 Td (TAI LIEU MAU - BAN XEM THU IDC CASE PORTAL) Tj ET`;
    const objs = [
      '<< /Type /Catalog /Pages 2 0 R >>',
      '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
      `<< /Length ${text.length} >>\nstream\n${text}\nendstream`,
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
    ];
    let out = '%PDF-1.4\n', offs = [];
    objs.forEach((o, i) => { offs.push(out.length); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
    const x = out.length;
    out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('');
    out += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${x}\n%%EOF`;
    return new Blob([out], { type: 'application/pdf' });
  }

  /* ---- dữ liệu giả lập ---- */
  const ALL = ['VN-01','VN-02','VN-03','VN-04','VN-05','VN-06','VN-07','VN-08','VN-09','VN-10','VN-11','VN-12','VN-13','VN-14','VN-15','VN-16','VN-17','AP-01','AP-02','AP-03','AP-04','AP-05','US-01','US-02','US-03','US-04','US-05','US-06','US-07','US-08','US-09','US-10','US-11','US-12','US-13'];
  const OP = ['US-07','US-08','US-09','US-10','US-11','US-12'];
  function docs(opt, approved, review, notes) {
    const o = {};
    ALL.forEach(c => {
      let s = 'missing', note = '';
      if (c === 'VN-17' || c === 'US-13') s = 'na';
      else if (OP.includes(c) && opt !== 'B') { s = 'na'; note = opt === 'A' ? 'Công ty Mỹ mới thành lập' : 'Tạm không áp dụng – chờ chọn phương án A/B'; }
      if (approved.includes(c)) s = 'approved';
      if (review.includes(c)) s = 'review';
      if (notes && notes[c]) note = notes[c];
      o[c] = { s, note };
    });
    return o;
  }
  const clients = [
    { id: 'L1A-0101', created_at: iso(120), updated_at: iso(1), data: {
      program: 'L-1A', name: 'Nguyễn Minh Khang', company: 'Công ty TNHH Thực phẩm Sao Mai', companyEn: 'Sao Mai Foods Co., Ltd', mst: '0312345678',
      industry: 'Chế biến thực phẩm', office: 'TP.HCM', staff: 'Lan Anh', opt: 'B', us: 'Sao Mai Foods USA LLC', state: 'California', deps: 'Vợ + 2 con',
      opened: '2026-06-02', charter: '15.000.000.000 VNĐ', reg: 'Lần đầu 2014, thay đổi lần 6 năm 2025', owners: 'Nguyễn Minh Khang 70% · Lê Thu Hà 30%',
      addr: '12 Nguyễn Văn Trỗi, Phú Nhuận, TP.HCM', note: 'Khách ưu tiên nộp I-129 trong quý 4.', step: 2,
      pay: { d1: 19000, d2: 20000 },
      docs: docs('B', ['VN-01','VN-02','VN-03','VN-04','VN-05','VN-06','VN-07','VN-08','VN-09','VN-10','VN-11','VN-13','VN-15','AP-01','AP-02','AP-03','AP-04','US-01','US-02','US-03','US-04','US-07','US-08'], ['VN-12','US-05','US-09'], { 'VN-14': 'Chờ khách chuyển vốn đợt 2', 'AP-05': 'Đã nộp hồ sơ xin LLTP, hẹn ngày 20/10' }) } },
    { id: 'L1A-0102', created_at: iso(60), updated_at: iso(0.2), data: {
      program: 'L-1A', name: 'Phạm Thị Thanh Hương', company: 'Công ty CP Nội thất Gỗ Việt', companyEn: 'Go Viet Furniture JSC', mst: '0109876543',
      industry: 'Sản xuất nội thất', office: 'Hà Nội', staff: 'Quang Huy', opt: 'A', us: 'Go Viet Home Inc.', state: 'Texas', deps: 'Chồng + 1 con',
      opened: '2026-08-11', charter: '8.000.000.000 VNĐ', reg: 'Lần đầu 2017', owners: 'Phạm Thị Thanh Hương 55% · Đỗ Văn Nam 45%',
      addr: 'KCN Quang Minh, Mê Linh, Hà Nội', note: '', step: 1, pay: { d1: 19000 },
      docs: docs('A', ['VN-01','VN-02','VN-03','VN-04','VN-15','AP-01'], ['VN-05','VN-06','VN-08','AP-03'], { 'VN-11': 'Thiếu sao kê tháng 11–12/2025' }) } },
    { id: 'L1A-0103', created_at: iso(20), updated_at: iso(3), data: {
      program: 'L-1A', name: 'Trương Quốc Bảo', company: 'Công ty TNHH Logistics Hải Đăng', companyEn: 'Hai Dang Logistics Co., Ltd', mst: '0401122334',
      industry: 'Vận tải & logistics', office: 'Đà Nẵng', staff: 'Lan Anh', opt: '?', us: '', state: '', deps: 'Độc thân',
      opened: '2026-09-18', charter: '5.000.000.000 VNĐ', reg: 'Lần đầu 2019', owners: 'Trương Quốc Bảo 100%',
      addr: '88 Bạch Đằng, Hải Châu, Đà Nẵng', note: 'Chưa chốt phương án A/B.', step: 1, pay: {},
      docs: docs('?', ['VN-01'], ['VN-02','VN-15'], {}) } },
    { id: 'L1A-0104', created_at: iso(400), updated_at: iso(10), data: {
      program: 'L-1A', name: 'Võ Hoàng Yến', company: 'Công ty TNHH Cà phê Cao Nguyên Xanh', companyEn: 'Green Highland Coffee Co., Ltd', mst: '6001234567',
      industry: 'Nông sản – cà phê', office: 'Buôn Ma Thuột', staff: 'Minh Tâm', opt: 'B', us: 'Green Highland Coffee LLC', state: 'Washington', deps: 'Chồng + 2 con',
      opened: '2025-09-05', charter: '20.000.000.000 VNĐ', reg: 'Lần đầu 2011', owners: 'Võ Hoàng Yến 60% · Võ Hoàng Long 40%',
      addr: '45 Lê Duẩn, TP. Buôn Ma Thuột, Đắk Lắk', note: 'Đã nhận visa L-1A, chuẩn bị I-140.', step: 4,
      pay: { d1: 19000, d2: 20000, d3: 15255, d4: 9000 },
      docs: docs('B', ALL.filter(c => c !== 'VN-17' && c !== 'US-13'), [], {}) } }
  ];
  const names = { 'VN-01': 'Giay-phep-kinh-doanh', 'VN-02': 'Dieu-le', 'VN-03': 'BCKQKD-2025', 'VN-04': 'BCDKT-2025', 'VN-15': 'Danh-sach-co-dong', 'AP-01': 'CV-duong-don' };
  const blobs = {}, files = [];
  clients.forEach(c => Object.entries(c.data.docs).forEach(([code, d], i) => {
    if (d.s !== 'approved' && d.s !== 'review') return;
    const name = `${code}_${names[code] || 'Tai-lieu'}.pdf`, path = `${c.id}/${code}/demo-${i}-${name}`;
    blobs[path] = () => samplePdf(`${code} - ${c.data.company}`, `Duong don: ${c.data.name} - Ho so ${c.id}`);
    files.push({ id: `f-${c.id}-${code}`, client_id: c.id, code, name, size: 182000 + i * 7311, mime: 'application/pdf', storage_path: path, created_by: 'lananh@idcvietnam.vn', created_at: iso(d.s === 'review' ? 1 : 15) });
  }));
  clients.forEach(c => { c.log = [
    { t: c.updated_at, by: 'lananh@idcvietnam.vn', m: 'Tải lên tài liệu, chờ duyệt' },
    { t: iso(7), by: 'quanghuy@idcvietnam.vn', m: 'Duyệt tài liệu' },
    { t: c.created_at, by: 'admin@idcvietnam.vn', m: 'Tạo hồ sơ' }]; });
  const DB = {
    staff: [{ email: ME, name: 'Khách xem thử', role: 'admin', created_at: iso(30) },
            { email: 'lananh@idcvietnam.vn', name: 'Lan Anh', role: 'staff', created_at: iso(30) },
            { email: 'quanghuy@idcvietnam.vn', name: 'Quang Huy', role: 'staff', created_at: iso(30) },
            { email: 'bangiamdoc@idcvietnam.vn', name: 'Ban Giám đốc', role: 'viewer', created_at: iso(30) }],
    clients, files, settings: []
  };

  /* ---- bộ truy vấn giả lập ---- */
  const clone = v => JSON.parse(JSON.stringify(v));
  const listeners = [];
  const emit = table => setTimeout(() => listeners.filter(l => l.table === table).forEach(l => l.cb({})), 30);
  function merge(a, b) {
    if (a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
      const o = Object.assign({}, a); Object.keys(b).forEach(k => { o[k] = k in a ? merge(a[k], b[k]) : b[k]; }); return o;
    } return b;
  }
  const pk = { staff: 'email', clients: 'id', files: 'id', settings: 'key' };
  function Q(table) {
    const st = { op: 'select', filters: [], order: null, single: false, payload: null };
    const q = {
      select() { return q; }, eq(k, v) { st.filters.push([k, v]); return q; },
      order(k) { st.order = k; return q; }, maybeSingle() { st.single = true; return q; },
      insert(p) { st.op = 'insert'; st.payload = p; return q; }, upsert(p) { st.op = 'upsert'; st.payload = p; return q; },
      update(p) { st.op = 'update'; st.payload = p; return q; }, delete() { st.op = 'delete'; return q; },
      then(res, rej) { return Promise.resolve(run()).then(res, rej); }
    };
    function run() {
      const rows = DB[table] || (DB[table] = []);
      const match = r => st.filters.every(([k, v]) => r[k] === v);
      const t = new Date().toISOString();
      if (st.op === 'select') {
        let out = rows.filter(match);
        if (st.order) out = out.slice().sort((a, b) => String(a[st.order]).localeCompare(String(b[st.order])));
        return { data: st.single ? clone(out[0] || null) : clone(out), error: null };
      }
      const list = [].concat(st.payload || []);
      if (st.op === 'insert' || st.op === 'upsert') {
        for (const p of list) {
          const row = Object.assign({ created_at: t, updated_at: t }, clone(p));
          if (table === 'files' && !row.id) row.id = 'f-' + Math.random().toString(36).slice(2);
          if (table === 'clients' && !row.log) row.log = [];
          const i = rows.findIndex(r => r[pk[table]] === row[pk[table]]);
          if (i >= 0) { if (st.op === 'insert') return { data: null, error: { message: 'Mã đã tồn tại' } }; rows[i] = Object.assign(rows[i], row); }
          else rows.push(row);
        }
      } else if (st.op === 'update') rows.filter(match).forEach(r => Object.assign(r, clone(st.payload)));
      else if (st.op === 'delete') for (let i = rows.length - 1; i >= 0; i--) if (match(rows[i])) rows.splice(i, 1);
      emit(table);
      return { data: null, error: null };
    }
    return q;
  }
  const session = { user: { email: ME } };
  const client = {
    auth: {
      getSession: async () => ({ data: { session } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
      signInWithPassword: async () => ({ data: { session }, error: null }),
      signOut: async () => { setTimeout(() => window.toast && toast('Đây là bản xem thử, không cần đăng xuất.'), 50); return { error: null }; }
    },
    from: t => Q(t),
    rpc: async (fn, a) => {
      if (fn !== 'patch_client') return { error: { message: 'Không hỗ trợ' } };
      const c = DB.clients.find(r => r.id === a.p_id); if (!c) return { error: { message: 'Không tìm thấy hồ sơ' } };
      c.data = merge(c.data, a.p_patch || {}); const t = new Date().toISOString(); c.updated_at = t;
      if (a.p_log) c.log = [{ t, by: ME, m: a.p_log }].concat(c.log || []).slice(0, 60);
      emit('clients'); return { data: null, error: null };
    },
    storage: { from: () => ({
      upload: async (path, f) => { blobs[path] = () => f; return { data: { path }, error: null }; },
      remove: async paths => { paths.forEach(p => delete blobs[p]); return { error: null }; },
      download: async path => blobs[path] ? { data: blobs[path](), error: null } : { data: null, error: { message: 'Không có tệp' } },
      createSignedUrl: async path => blobs[path] ? { data: { signedUrl: URL.createObjectURL(blobs[path]()) }, error: null } : { data: null, error: { message: 'Không có tệp' } }
    }) },
    channel: () => { const ch = { on(_e, f, cb) { listeners.push({ table: f.table, cb }); return ch; }, subscribe() { return ch; } }; return ch; },
    removeChannel: () => {}
  };
  window.supabase = { createClient: () => client };
})();
