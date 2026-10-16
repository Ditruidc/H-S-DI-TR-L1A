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
      industry: 'Chế biến thực phẩm', office: 'TP.HCM', staff: 'Lan Anh', assignees: ['lananh@idcvietnam.vn','luatsu@idcvietnam.vn'], opt: 'B', us: 'Sao Mai Foods USA LLC', state: 'California', deps: 'Vợ + 2 con',
      opened: '2026-06-02', charter: '15.000.000.000 VNĐ', reg: 'Lần đầu 2014, thay đổi lần 6 năm 2025', owners: 'Nguyễn Minh Khang 70% · Lê Thu Hà 30%',
      addr: '12 Nguyễn Văn Trỗi, Phú Nhuận, TP.HCM', note: 'Khách ưu tiên nộp I-129 trong quý 4.', step: 2, ms: { feeDate: '2026-09-22', premium: true, premiumDate: '2026-09-25', i129Date: '2026-09-25', receipt: 'WAC2690012345' },
      pay: { d1: 19000, d2: 20000 },
      docs: docs('B', ['VN-01','VN-02','VN-03','VN-04','VN-05','VN-06','VN-07','VN-08','VN-09','VN-10','VN-11','VN-13','VN-15','AP-01','AP-02','AP-03','AP-04','US-01','US-02','US-03','US-04','US-07','US-08'], ['VN-12','US-05','US-09'], { 'VN-14': 'Chờ khách chuyển vốn đợt 2', 'AP-05': 'Đã nộp hồ sơ xin LLTP, hẹn ngày 20/10' }) } },
    { id: 'L1A-0102', created_at: iso(60), updated_at: iso(0.2), data: {
      program: 'L-1A', name: 'Phạm Thị Thanh Hương', company: 'Công ty CP Nội thất Gỗ Việt', companyEn: 'Go Viet Furniture JSC', mst: '0109876543',
      industry: 'Sản xuất nội thất', office: 'Hà Nội', staff: 'Quang Huy', assignees: ['quanghuy@idcvietnam.vn'], opt: 'A', us: 'Go Viet Home Inc.', state: 'Texas', deps: 'Chồng + 1 con',
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
      industry: 'Nông sản – cà phê', office: 'Buôn Ma Thuột', staff: 'Minh Tâm', assignees: ['minhtam@idcvietnam.vn','luatsu@idcvietnam.vn'], opt: 'B', us: 'Green Highland Coffee LLC', state: 'Washington', deps: 'Chồng + 2 con',
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
            { email: 'lananh@idcvietnam.vn', name: 'Lan Anh', role: 'staff', notify: true, zalo_chat_id: '7391020458831', created_at: iso(30) },
            { email: 'quanghuy@idcvietnam.vn', name: 'Quang Huy', role: 'staff', created_at: iso(30) },
            { email: 'minhtam@idcvietnam.vn', name: 'Minh Tâm', role: 'staff', created_at: iso(30) },
            { email: 'luatsu@idcvietnam.vn', name: 'LS. Ryan Yee', role: 'lawyer', created_at: iso(30) }],
    login_log: [
      { id: 3, email: 'luatsu@idcvietnam.vn', at: new Date(Date.now() - 35 * 60e3).toISOString(), kind: 'login', device: 'Máy tính · Chrome · macOS' },
      { id: 2, email: 'quanghuy@idcvietnam.vn', at: new Date(Date.now() - 3 * 3600e3).toISOString(), kind: 'open', device: 'Điện thoại · Safari · iOS' },
      { id: 1, email: 'lananh@idcvietnam.vn', at: new Date(Date.now() - 26 * 3600e3).toISOString(), kind: 'login', device: 'Máy tính · Cốc Cốc · Windows' }],
    chat_rooms: [{ id: 'r-case-0101', kind: 'case', client_id: 'L1A-0101', members: [], created_by: 'lananh@idcvietnam.vn', created_at: new Date(Date.now() - 864e5).toISOString(), last_at: new Date(Date.now() - 50 * 60e3).toISOString(), last_text: 'Khách hẹn thứ 2 gửi bằng chứng góp vốn đợt 2 ạ.', last_by: 'lananh@idcvietnam.vn' },
      { id: 'r-grp-1', kind: 'group', name: 'Team hồ sơ L-1A', members: [ME, 'lananh@idcvietnam.vn', 'quanghuy@idcvietnam.vn', 'luatsu@idcvietnam.vn'], created_by: ME, created_at: new Date(Date.now() - 3 * 864e5).toISOString(), last_at: new Date(Date.now() - 3 * 3600e3).toISOString(), last_text: 'Chiều nay họp review 4 hồ sơ nhé mọi người.', last_by: 'quanghuy@idcvietnam.vn' }],
    chat_messages: [
      { id: 1, room_id: 'r-case-0101', author: 'luatsu@idcvietnam.vn', body: '@Lan Anh Bằng chứng góp vốn VN-14 cần thêm sao kê chuyển tiền đợt 2.', mentions: ['lananh@idcvietnam.vn'], created_at: new Date(Date.now() - 2 * 3600e3).toISOString() },
      { id: 2, room_id: 'r-case-0101', author: 'lananh@idcvietnam.vn', body: 'Khách hẹn thứ 2 gửi bằng chứng góp vốn đợt 2 ạ.', mentions: [], created_at: new Date(Date.now() - 50 * 60e3).toISOString() },
      { id: 3, room_id: 'r-grp-1', author: 'quanghuy@idcvietnam.vn', body: 'Chiều nay họp review 4 hồ sơ nhé mọi người.', mentions: [], created_at: new Date(Date.now() - 3 * 3600e3).toISOString() }],
    chat_reads: [],
    clients, files, settings: [{ key: 'notify', value: { enabled: true, from: 'IDC VIETNAM <thongbao@ditruidc.com>', portal: 'https://hoso.ditruidc.com', instant: [], digest: ['bangiamdoc@idcvietnam.vn'], email: true, zalo: true, zalo_groups: [] } }]
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
    const st = { op: 'select', filters: [], gte: [], order: null, desc: false, limit: 0, single: false, payload: null };
    const q = {
      select() { return q; }, eq(k, v) { st.filters.push([k, v]); return q; },
      order(k, o) { st.order = k; st.desc = !!(o && o.ascending === false); return q; }, gte(k, v) { st.gte.push([k, v]); return q; }, limit(n) { st.limit = n; return q; }, maybeSingle() { st.single = true; return q; },
      insert(p) { st.op = 'insert'; st.payload = p; return q; }, upsert(p) { st.op = 'upsert'; st.payload = p; return q; },
      update(p) { st.op = 'update'; st.payload = p; return q; }, delete() { st.op = 'delete'; return q; },
      then(res, rej) { return Promise.resolve(run()).then(res, rej); }
    };
    function run() {
      const rows = DB[table] || (DB[table] = []);
      const match = r => st.filters.every(([k, v]) => r[k] === v) && st.gte.every(([k, v]) => String(r[k]) >= String(v));
      const t = new Date().toISOString();
      if (st.op === 'select') {
        let out = rows.filter(match);
        if (st.order) out = out.slice().sort((a, b) => String(a[st.order]).localeCompare(String(b[st.order])));
        if (st.desc) out = out.slice().reverse();
        if (st.limit) out = out.slice(0, st.limit);
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
      updateUser: async () => ({ data: {}, error: null }),
      resetPasswordForEmail: async () => ({ data: {}, error: null }),
      signOut: async () => { setTimeout(() => window.toast && toast('Đây là bản xem thử, không cần đăng xuất.'), 50); return { error: null }; }
    },
    from: t => Q(t),
    rpc: async (fn, a) => {
      if (fn === 'notify_remind') return { data: 'Bản xem thử: không gửi email thật cho ' + a.p_email, error: null };
      if (fn === 'log_login') {
        if (!window.__demoLoginSim) { window.__demoLoginSim = 1; setTimeout(() => { const row = { id: 99, email: 'lananh@idcvietnam.vn', at: new Date().toISOString(), kind: 'login', device: 'Máy tính · Chrome · Windows' }; DB.login_log.unshift(row); listeners.filter(l => l.table === 'login_log').forEach(l => l.cb({ eventType: 'INSERT', new: clone(row) })); }, 6000); }
        return { data: null, error: null };
      }
      if (fn === 'trash_file' || fn === 'restore_file') {
        const f = DB.files.find(x => x.id === a.p_id); if (!f) return { error: { message: 'Không tìm thấy tệp' } };
        if (fn === 'trash_file') { f.deleted_at = new Date().toISOString(); f.deleted_by = ME; } else { f.deleted_at = null; f.deleted_by = null; }
        emit('files'); return { data: null, error: null };
      }
      if (fn === 'trash_expired') return { data: DB.files.filter(x => x.deleted_at && Date.now() - Date.parse(x.deleted_at) > 60 * 864e5).map(x => ({ id: x.id, storage_path: x.storage_path })), error: null };
      if (fn === 'purge_files') { const ids = a.p_ids || []; for (let i = DB.files.length - 1; i >= 0; i--) if (ids.includes(DB.files[i].id) && DB.files[i].deleted_at) DB.files.splice(i, 1); emit('files'); return { data: ids.length, error: null }; }
      if (fn.startsWith('chat_')) {
        const t = new Date().toISOString(), R2 = DB.chat_rooms, M = DB.chat_messages;
        const room = id => R2.find(r => r.id === id);
        const push = r => { R2.unshift(r); listeners.filter(l => l.table === 'chat_rooms').forEach(l => l.cb({})); return r.id; };
        if (fn === 'chat_unread') { const out = {}; M.forEach(m => { if (m.author === ME) return; const rd = DB.chat_reads.find(x => x.room_id === m.room_id); if (!rd || m.created_at > rd.read_at) out[m.room_id] = (out[m.room_id] || 0) + 1; }); return { data: Object.entries(out).map(([room_id, n]) => ({ room_id, n })), error: null }; }
        if (fn === 'chat_mark_read') { const rd = DB.chat_reads.find(x => x.room_id === a.p_room); if (rd) rd.read_at = t; else DB.chat_reads.push({ room_id: a.p_room, email: ME, read_at: t }); return { data: null, error: null }; }
        if (fn === 'chat_case_room') { const r = R2.find(x => x.kind === 'case' && x.client_id === a.p_client); return { data: r ? r.id : push({ id: 'r-case-' + a.p_client, kind: 'case', client_id: a.p_client, members: [], created_by: ME, created_at: t, last_at: t }), error: null }; }
        if (fn === 'chat_dm_room') { const pair = [ME, a.p_email].sort(); const r = R2.find(x => x.kind === 'dm' && x.members[0] === pair[0] && x.members[1] === pair[1]); return { data: r ? r.id : push({ id: 'r-dm-' + Math.random().toString(36).slice(2), kind: 'dm', members: pair, created_by: ME, created_at: t, last_at: t }), error: null }; }
        if (fn === 'chat_create_group') { if (!String(a.p_name || '').trim()) return { error: { message: 'Nhập tên nhóm' } }; return { data: push({ id: 'r-grp-' + Math.random().toString(36).slice(2), kind: 'group', name: a.p_name.trim(), members: [...new Set([ME, ...(a.p_members || [])])].sort(), created_by: ME, created_at: t, last_at: t }), error: null }; }
        if (fn === 'chat_update_group') { const r = room(a.p_room); if (r) { r.name = a.p_name || r.name; r.members = [...new Set([r.created_by, ...(a.p_members || [])])].sort(); } return { data: null, error: null }; }
        if (fn === 'chat_leave_group') { const r = room(a.p_room); if (r) r.members = r.members.filter(e => e !== ME); return { data: null, error: null }; }
        if (fn === 'chat_send') {
          const r = room(a.p_room); if (!r) return { error: { message: 'Không tìm thấy cuộc trò chuyện' } };
          const files = a.p_files || []; const m = { id: M.length ? Math.max(...M.map(x => x.id)) + 1 : 1, room_id: r.id, author: ME, body: String(a.p_body || '').trim(), mentions: a.p_mentions || [], attachments: files, created_at: t };
          if (!m.body && !files.length) return { error: { message: 'Tin nhắn trống' } };
          M.push(m); r.last_at = t; r.last_text = m.body ? m.body.slice(0, 160) : (files[0] && String(files[0].mime).startsWith('image/') ? '🖼 Ảnh' : '📎 ' + (files[0] || {}).name); r.last_by = ME;
          listeners.filter(l => l.table === 'chat_messages').forEach(l => l.cb({ eventType: 'INSERT', new: clone(m) }));
          if (!window.__demoChatReply) { window.__demoChatReply = 1; setTimeout(() => { const other = r.kind === 'dm' ? r.members.find(e => e !== ME) : 'lananh@idcvietnam.vn'; const rep = { id: Math.max(...M.map(x => x.id)) + 1, room_id: r.id, author: other, body: 'Đã nhận, em xử lý ngay ạ 👍', mentions: [], created_at: new Date().toISOString() }; M.push(rep); r.last_at = rep.created_at; r.last_text = rep.body; r.last_by = other; listeners.filter(l => l.table === 'chat_messages').forEach(l => l.cb({ eventType: 'INSERT', new: clone(rep) })); }, 2500); }
          return { data: m.id, error: null };
        }
      }
      if (fn === 'notify_test') return { data: ME + ' (bản xem thử không gửi thư thật)', error: null };
      if (fn !== 'patch_client') return { error: { message: 'Không hỗ trợ' } };
      const c = DB.clients.find(r => r.id === a.p_id); if (!c) return { error: { message: 'Không tìm thấy hồ sơ' } };
      c.data = merge(c.data, a.p_patch || {}); const t = new Date().toISOString(); c.updated_at = t;
      if (a.p_log) c.log = [{ t, by: ME, m: a.p_log }].concat(c.log || []).slice(0, 60);
      const P = a.p_patch || {}, d = c.data, st = +(d.step || 1), au = d.auto || {};
      if (!('step' in P)) {
        const ds = Object.values(d.docs || {}).map(x => x.s || 'missing'), done = ds.some(x => x !== 'na') && ds.every(x => x === 'approved' || x === 'na');
        let to = 0, m = '';
        if (st === 1 && !au.s2 && done) { to = 2; m = 'Tự chuyển sang bước 2: Nộp I-129 · Phỏng vấn – đã đủ chứng từ được duyệt'; }
        else if (st === 2 && !au.s3 && d.ms && d.ms.result === 'pass') { to = 3; m = 'Tự chuyển sang bước 3: Nhận visa L-1A – đậu phỏng vấn'; }
        if (to) { d.step = to; d.auto = Object.assign({}, au, { ['s' + to]: t }); c.log = [{ t, by: 'Hệ thống', m }].concat(c.log || []).slice(0, 60); }
      }
      emit('clients'); return { data: null, error: null };
    },
    storage: { from: () => ({
      upload: async (path, f) => { blobs[path] = () => f; return { data: { path }, error: null }; },
      remove: async paths => { paths.forEach(p => delete blobs[p]); return { error: null }; },
      download: async path => blobs[path] ? { data: blobs[path](), error: null } : { data: null, error: { message: 'Không có tệp' } },
      createSignedUrl: async path => blobs[path] ? { data: { signedUrl: URL.createObjectURL(blobs[path]()) }, error: null } : { data: null, error: { message: 'Không có tệp' } }
    }) },
    channel: name => { let pres = null; const ch = {
      on(e, f, cb) { if (e === 'presence') pres = cb; else listeners.push({ table: f.table, cb }); return ch; },
      subscribe(cb) { if (cb) setTimeout(() => cb('SUBSCRIBED'), 20); if (pres) setTimeout(pres, 60); return ch; },
      track: async m => { ch._me = m; if (pres) setTimeout(pres, 20); return 'ok'; },
      presenceState: () => Object.assign({ 'luatsu@idcvietnam.vn': [{ email: 'luatsu@idcvietnam.vn', name: 'LS. Ryan Yee', role: 'lawyer', view: 'L1A-0101', device: 'Máy tính · Chrome · macOS', since: new Date(Date.now() - 35 * 60e3).toISOString() }],
        'quanghuy@idcvietnam.vn': [{ email: 'quanghuy@idcvietnam.vn', name: 'Quang Huy', role: 'staff', view: 'clients', away: true, device: 'Điện thoại · Safari · iOS', since: new Date(Date.now() - 12 * 60e3).toISOString() }] },
        ch._me ? { [ch._me.email]: [ch._me] } : {})
    }; return ch; },
    removeChannel: () => {}
  };
  window.supabase = { createClient: () => client };
})();
