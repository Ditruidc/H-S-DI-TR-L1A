/* Song ngữ Việt / English cho giao diện portal.
   Tiếng Việt là bản gốc; khi chọn EN, chữ trên giao diện được dịch theo từ điển bên dưới.
   Dữ liệu khách (tên, địa chỉ, ghi chú tự nhập) và email gửi khách giữ nguyên. */
(function () {
  const D = {
    // Khung & điều hướng
    'Không gian làm việc': 'Workspace', 'Chương trình': 'Programs', 'Điều hướng': 'Navigation',
    'Hồ sơ khách hàng': 'Client cases', 'Quản trị': 'Admin', 'Hồ sơ': 'Cases', 'Khách hàng': 'Client',
    'Hồ sơ định cư': 'Immigration cases', 'Cổng hồ sơ định cư': 'Immigration Case Portal', 'Du học Mỹ': 'US Study Abroad', 'Sắp có': 'Soon',
    'Tìm khách hàng, mã hồ sơ, tài liệu…': 'Search clients, case IDs, documents…',
    'Đăng nhập': 'Sign in', 'Đăng xuất': 'Sign out', 'Mật khẩu': 'Password', 'Chưa đăng nhập': 'Not signed in',
    'Dùng tài khoản nhân viên được quản trị viên cấp.': 'Use the staff account issued by your administrator.',
    'Chỉ nhân viên IDC VIETNAM được cấp tài khoản mới truy cập được.': 'Only IDC VIETNAM staff with an issued account can access this portal.',
    'Email hoặc mật khẩu không đúng.': 'Incorrect email or password.',
    'Tài khoản chưa được cấp quyền': 'Account not authorized yet',
    'chưa có trong danh sách nhân viên. Liên hệ quản trị viên để được thêm.': 'is not on the staff list. Contact an administrator to be added.',
    'Quản trị viên': 'Administrator', 'Nhân viên · được chỉnh sửa': 'Staff · can edit', 'Chỉ xem': 'View only', 'Nhân viên': 'Staff',
    'Đang tải dữ liệu…': 'Loading data…', 'Không đọc được dữ liệu': 'Could not load data', 'Chưa cấu hình Supabase (public/config.js).': 'Supabase is not configured (public/config.js).',
    'Bản xem thử · dữ liệu giả lập, thao tác không được lưu': 'Demo · sample data, changes are not saved',
    // Đã nhận
    'Đã nhận': 'Received', 'Biên bản tiếp nhận': 'Receipt record', 'Trình duyệt chặn cửa sổ mới. Hãy cho phép popup cho trang này.': 'The browser blocked the new window. Allow pop-ups for this site.', 'Tài liệu đã nhận': 'Documents received', 'Ngày nhận': 'Received on', 'Chưa nhận tài liệu nào': 'No documents received yet',
    'Tài liệu khách nộp sẽ xuất hiện ở đây kèm ngày nhận.': 'Documents the client submits will appear here with the date received.',
    // Danh sách hồ sơ
    'Chương trình · L-1A → EB-1C': 'Program · L-1A → EB-1C',
    'Chọn một hồ sơ để xem những tài liệu còn thiếu, tải tệp lên, duyệt và tải hồ sơ về.': 'Open a case to see missing documents, upload files, review and download the case.',
    'Xuất Excel': 'Export Excel', 'Thêm hồ sơ': 'New case', 'Tài liệu còn thiếu': 'Missing documents', 'Cần khách bổ sung': 'Awaiting client',
    'Chờ duyệt': 'Pending review', 'Đã có tệp, chờ kiểm tra': 'Files received, awaiting check', 'Đã duyệt': 'Approved',
    'Tất cả': 'All', 'Còn thiếu tài liệu': 'Missing documents', 'Có tài liệu chờ duyệt': 'Pending review', 'Đã đủ': 'Complete',
    'Tiến trình': 'Progress', 'Tài liệu': 'Document', 'Chuyên viên:': 'Case officer:', 'Cập nhật': 'Updated', 'Chuyên viên': 'Case officer', 'Văn phòng': 'Office',
    'Chưa có hồ sơ nào': 'No cases yet', 'Không có hồ sơ khớp bộ lọc.': 'No cases match this filter.',
    'Danh sách hồ sơ': 'All cases',
    // Hồ sơ
    'Tải trọn bộ ZIP': 'Download full ZIP', 'Sửa thông tin': 'Edit details', 'tài liệu bắt buộc đã duyệt': 'required documents approved',
    'Cần bổ sung': 'Missing', 'Tất cả tài liệu': 'All documents', 'Thông tin & thanh toán': 'Details & payments', 'Email nhắc khách': 'Client reminder email',
    'Mỗi thẻ là một tài liệu khách chưa nộp. Kéo tệp vào ô của thẻ (hoặc bấm vào ô) để lưu. Tệp lưu xong, tài liệu chuyển sang': 'Each card is a document the client has not submitted. Drop a file onto the card (or click it) to save. Once saved, the document moves to',
    'Kéo tệp vào đây hoặc': 'Drop files here or', 'bấm để chọn': 'click to choose', '· PDF, JPG, PNG · tối đa 50 MB': '· PDF, JPG, PNG · max 50 MB',
    'Đang tải lên…': 'Uploading…', 'Cần quyền chỉnh sửa để tải lên': 'Edit permission required to upload',
    'Không còn tài liệu bắt buộc nào thiếu.': 'No required documents are missing.', 'Không có tài liệu chờ duyệt': 'No documents pending review',
    'Chưa có tài liệu nào được duyệt': 'No documents approved yet', 'Còn thiếu': 'Missing', 'Không áp dụng': 'Not applicable',
    'Mã': 'Code', 'Mã TL': 'Doc code', 'Tên tài liệu': 'Document', 'Trạng thái': 'Status', 'Tệp': 'Files', 'Số tệp': 'Files', 'Nhóm': 'Group', 'Phân loại': 'Category',
    'Kỳ dữ liệu': 'Period', 'Yêu cầu': 'Requirements', 'Ghi chú': 'Note', 'Tên': 'Name', 'Quyền': 'Role', 'Mở': 'Open', 'Sửa': 'Edit', 'Gỡ': 'Remove',
    'Duyệt': 'Approve', 'Bỏ duyệt': 'Unapprove', 'Yêu cầu bổ sung': 'Request more', 'Thêm tệp': 'Add files', 'Xoá tệp': 'Delete file', 'Xoá?': 'Delete?',
    'Bấm lần nữa để xoá': 'Click again to delete', 'Tải xuống': 'Download', 'Mở tab mới': 'Open in new tab', 'Đóng': 'Close',
    'Chưa có tệp.': 'No files yet.', 'Tệp mới tải lên sẽ xuất hiện ở đây.': 'Newly uploaded files will appear here.', 'Đang mở tệp…': 'Opening file…',
    'Nếu khung trống, bấm “Mở tab mới” hoặc “Tải xuống”.': 'If the preview is blank, click “Open in new tab” or “Download”.',
    'Chi tiết tài liệu': 'Document details', 'Về tài liệu': 'Back to document', 'Ghi chú cho tài liệu': 'Document note', 'Lưu ghi chú': 'Save note',
    'Ví dụ: Thiếu trang 3, cần bản dịch công chứng…': 'e.g. Page 3 missing, notarized translation needed…',
    'Ghi rõ cần khách bổ sung gì, rồi bấm “Lưu ghi chú” và chọn Còn thiếu.': 'Describe what the client must provide, click “Save note”, then mark it Missing.',
    'Bản dịch tiếng Anh kèm bản gốc': 'English translation with original', 'Chỉ PA B': 'Option B only',
    'Chỉ áp dụng khi công ty Mỹ đang hoạt động (phương án B)': 'Applies only when the U.S. company is operating (option B)',
    'Lịch sử cập nhật': 'Update history', 'Chưa có thay đổi nào.': 'No changes yet.', 'Bạn': 'You',
    'Thông tin hồ sơ': 'Case details', 'Thanh toán': 'Payments', 'Các đợt thanh toán (USD)': 'Payment installments (USD)',
    'Đợt': 'Installment', 'Thời điểm': 'When', 'Số tiền': 'Amount', 'Số tiền (USD)': 'Amount (USD)', 'Đã thu': 'Received', 'Đã thu (USD)': 'Received (USD)',
    'Sao chép': 'Copy', 'Tải .txt': 'Download .txt',
    // Thông tin khách
    'Đương đơn': 'Applicant', 'Đương đơn *': 'Applicant *', 'Công ty Việt Nam': 'Vietnamese company', 'Công ty VN': 'VN company',
    'Tên tiếng Anh': 'English name', 'Tên công ty (tiếng Anh)': 'Company name (English)', 'Tên công ty (EN)': 'Company name (EN)',
    'Mã số doanh nghiệp': 'Enterprise code', 'Mã số DN': 'Enterprise code', 'Vốn điều lệ': 'Charter capital',
    'Đăng ký doanh nghiệp': 'Business registration', 'Đăng ký DN': 'Business registration',
    'Chủ sở hữu / thành viên': 'Owners / members', 'Chủ sở hữu / thành viên góp vốn': 'Owners / contributing members',
    'Trụ sở': 'Head office', 'Ngành': 'Industry', 'Phương án': 'Investment option', 'Phương án đầu tư': 'Investment option',
    'Pháp nhân tại Mỹ': 'U.S. entity', 'Bang': 'State', 'Người phụ thuộc': 'Dependents', 'Ngày mở hồ sơ': 'Case opened', 'Ngày mở': 'Opened',
    'Chuyên viên phụ trách': 'Case officer', 'Ghi chú hồ sơ': 'Case notes', 'Mã hồ sơ': 'Case ID', 'Mã hồ sơ *': 'Case ID *', 'Mã HS': 'Case ID',
    'Hồ sơ mới': 'New case', 'Thêm hồ sơ khách hàng': 'Add client case', 'Sửa thông tin hồ sơ': 'Edit case details',
    'Tạo hồ sơ': 'Create case', 'Lưu thay đổi': 'Save changes', 'Huỷ': 'Cancel',
    'Chưa xác định': 'Not decided', 'Chưa xác định phương án': 'Option not decided',
    'A · Mở mới doanh nghiệp tại Mỹ': 'A · New U.S. business', 'B · Đã có doanh nghiệp tại Mỹ': 'B · Existing U.S. business',
    'TP.HCM': 'Ho Chi Minh City', 'Hà Nội': 'Hanoi', 'Đà Nẵng': 'Da Nang', 'Buôn Ma Thuột': 'Buon Ma Thuot', 'Hoa Kỳ': 'United States',
    // Quản trị
    'Cấu hình portal': 'Portal settings', 'Thêm nhân viên': 'Add staff', 'Tên hiển thị': 'Display name', 'Lưu cấu hình': 'Save settings',
    'Quản lý nhân viên được đăng nhập, danh mục tài liệu, các bước lộ trình và mức phí của chương trình L-1A → EB-1C.': 'Manage staff access, the document list, roadmap steps and fees for the L-1A → EB-1C program.',
    'Tạo mật khẩu cho nhân viên trong Supabase → Authentication → Add user, rồi thêm email tại đây.': 'Create the staff password in Supabase → Authentication → Add user, then add the email here.',
    'Danh mục tài liệu': 'Document list', 'Thêm tài liệu': 'Add document', 'Lộ trình 5 bước': '5-step roadmap', 'Xuất toàn bộ dữ liệu (Excel)': 'Export all data (Excel)',
    // Nhóm, lộ trình, thanh toán
    'Công ty nước ngoài (nhà đầu tư Việt Nam)': 'Foreign company (Vietnamese investor)', 'Đương đơn L-1A': 'L-1A applicant',
    'Công ty tại Hoa Kỳ (chủ dự án đầu tư ở Mỹ)': 'U.S. company (U.S. investment project)', 'Công ty tại Mỹ': 'U.S. company',
    'Thẩm định & chứng từ': 'Due diligence & documents', 'Nộp I-129 · Phỏng vấn': 'File I-129 · Interview', 'Nhận visa L-1A': 'L-1A visa issued',
    'Thẻ xanh EB-1C': 'EB-1C green card', 'Thẻ 10 năm': '10-year card', '2–4 tuần': '2–4 weeks', '5–9 tháng': '5–9 months', '≥ 12 tháng': '≥ 12 months', '12–24 tháng': '12–24 months',
    'Khi ký hợp đồng & mở hồ sơ': 'On contract signing & case opening', 'Khi nộp I-129': 'On I-129 filing', 'Khi nhận visa L-1A': 'On L-1A visa issuance',
    'Khi nộp I-140 / I-485': 'On I-140 / I-485 filing', 'Sau khi nhận thẻ xanh': 'After green card approval',
    // Phân loại & yêu cầu tài liệu
    'Pháp lý': 'Legal', 'Tài chính': 'Financial', 'Nhân sự': 'HR', 'Thuế': 'Tax', 'Kế hoạch': 'Planning', 'Hoạt động': 'Operations', 'Cá nhân': 'Personal', 'Khác': 'Other',
    'Thể hiện ngày thành lập': 'Shows date of establishment', 'Tối thiểu 1 năm gần nhất': 'At least the most recent year', 'Tối thiểu 1 năm': 'At least 1 year',
    'Tối thiểu 3 cấp bậc': 'At least 3 levels', 'Họ tên, chức danh, nhiệm vụ, học vấn, mức lương': 'Name, title, duties, education, salary',
    'Full-time & part-time': 'Full-time & part-time', 'Dự báo 1, 3, 5 năm: chi phí, doanh số, lợi nhuận, nhân sự': '1/3/5-year projections: costs, revenue, profit, staffing',
    'Chứng minh hoạt động ≥ 1 năm trước khi nộp đơn': 'Proves ≥ 1 year of operation before filing', 'Brochure, website, Facebook, Zalo': 'Brochure, website, Facebook, Zalo',
    'Chuyển khoản sang Hoa Kỳ': 'Transfer to the U.S.', 'Tên cổ đông & tỷ lệ sở hữu': 'Shareholder names & ownership %',
    'Công ty Mỹ hỗ trợ được vị trí quản lý trong 1 năm': 'U.S. company can support a managerial role within 1 year', 'Nếu có': 'If any',
    'Trong & ngoài, có biển hiệu': 'Interior & exterior, with signage', 'Chỉ với công ty đang hoạt động': 'Operating companies only',
    '12 tháng gần nhất': 'Last 12 months', 'Năm 2025': 'Year 2025', 'Theo yêu cầu': 'On request',
    'Công ty Mỹ mới thành lập': 'Newly formed U.S. company', 'Tạm không áp dụng – chờ chọn phương án A/B': 'Not applicable for now – awaiting option A/B',
    // Thông báo
    'Bạn đang ở chế độ chỉ xem.': 'You are in view-only mode.', 'Bạn không có quyền sửa dữ liệu này.': 'You do not have permission to edit this.',
    'Chưa tải được thư viện Excel.': 'Excel library not loaded yet.', 'Chưa tải được thư viện ZIP.': 'ZIP library not loaded yet.',
    'Hồ sơ chưa có tệp nào.': 'This case has no files yet.', 'Mã hồ sơ chỉ gồm chữ, số và dấu gạch (ví dụ L1A-0023).': 'Case IDs may contain only letters, numbers and dashes (e.g. L1A-0023).',
    'Mã tài liệu bị trùng.': 'Duplicate document code.', 'Nhập tên đương đơn.': 'Enter the applicant name.',
    'Đã chọn nội dung – nhấn Ctrl/Cmd + C': 'Text selected – press Ctrl/Cmd + C', 'Đã lưu cấu hình': 'Settings saved', 'Đã lưu ghi chú': 'Note saved',
    'Đã lưu thông tin': 'Details saved', 'Đã sao chép email': 'Email copied', 'Trình duyệt chặn tải tệp.': 'The browser blocked the download.', 'Đã đổi quyền': 'Role updated',
    'Đây là bản xem thử, không cần đăng xuất.': 'This is a demo; no need to sign out.', 'lỗi không rõ': 'unknown error',
    // Lịch sử
    'Tạo hồ sơ': 'Create case', 'Duyệt tài liệu': 'Document approved', 'Tải lên tài liệu, chờ duyệt': 'Document uploaded, pending review',
    'cập nhật ghi chú': 'note updated'
  };
  const P = [
    [/^· (.+)$/, (m, a) => '· ' + tr(a)],
    [/^(\d+) thiếu$/, '$1 missing'], [/^(\d+) đã nhận$/, '$1 received'], [/^(\d+) tài liệu đang chờ duyệt$/, '$1 pending review'], [/^(\d+) chờ duyệt$/, '$1 pending'], [/^(\d+) tài liệu$/, '$1 documents'],
    [/^(\d+)\/(\d+) đã duyệt$/, '$1/$2 approved'], [/^(\d+)\/(\d+) tài liệu bắt buộc$/, '$1/$2 required documents'],
    [/^(\d+) hồ sơ đang thu thập chứng từ$/, '$1 cases collecting documents'],
    [/^Bước (\d+)$/, 'Step $1'], [/^Bước$/, 'Step'], [/^Chuyển hồ sơ sang bước (\d+)$/, 'Move case to step $1'], [/^Chuyển sang bước (\d+)$/, 'Move to step $1'],
    [/^Chi tiết (.+)$/, 'Details $1'], [/^Chuyên viên: (.+)$/, 'Case officer: $1'], [/^Hồ sơ ([A-Z0-9-]+)$/, 'Case $1'],
    [/^Tải tệp cho (.+)$/, 'Upload files for $1'], [/^Tải (.+)$/, 'Download $1'], [/^Xoá (.+)$/, 'Delete $1'],
    [/^Tệp đã nộp \((\d+)\)$/, 'Submitted files ($1)'], [/^Đợt (\d+)$/, 'Installment $1'], [/^Đã thu Đợt (\d+)$/, 'Received installment $1'],
    [/^Tự cập nhật theo (\d+) tài liệu còn thiếu và ghi chú của từng tài liệu\.$/, 'Auto-generated from $1 missing documents and their notes. (The email stays in Vietnamese for the client.)'],
    [/^Đã lưu (\d+) tệp vào (.+)$/, 'Saved $1 file(s) to $2'], [/^Đã tạo hồ sơ (.+)$/, 'Case $1 created'], [/^Đã thêm (.+)$/, 'Added $1'],
    [/^Đã gỡ (.+)$/, 'Removed $1'], [/^Đã xoá (.+)$/, 'Deleted $1'], [/^Đã tải xuống (.+)$/, 'Downloaded $1'], [/^Đã lưu thanh toán (.+)$/, 'Payment saved: $1'],
    [/^Đang chuẩn bị (.+)$/, 'Preparing $1'], [/^Đang đóng gói (\d+) tệp…$/, 'Packaging $1 files…'], [/^Đóng gói thất bại: (.+)$/, 'Packaging failed: $1'],
    [/^(.+) lớn hơn 50 MB\. Hãy nén hoặc tách tệp\.$/, '$1 is larger than 50 MB. Compress or split the file.'],
    [/^(.+): chỉ nhận PDF hoặc ảnh \(JPG, PNG, WEBP\)\. Hãy lưu Word\/Excel thành PDF\.$/, '$1: only PDF or images (JPG, PNG, WEBP). Save Word/Excel as PDF.'],
    [/^(\d+) tệp không đọc được, xem 00_KHONG_DOC_DUOC\.txt trong ZIP\.$/, '$1 file(s) could not be read; see 00_KHONG_DOC_DUOC.txt in the ZIP.'],
    [/^Không lưu được (.+)$/, 'Could not save $1'], [/^Không tải lên được (.+)$/, 'Could not upload $1'], [/^Không mở được tệp: (.+)$/, 'Could not open file: $1'],
    [/^Không đọc được danh sách tệp: (.+)$/, 'Could not read the file list: $1'],
    [/^([A-Z]{2}-\d{2}): thêm (\d+) tệp$/, '$1: added $2 file(s)'], [/^([A-Z]{2}-\d{2}): xoá tệp (.+)$/, '$1: deleted file $2'],
    [/^([A-Z]{2}-\d{2}): (.+)$/, (m, a, b) => a + ': ' + tr(b)]
  ];
  let docMap = null;
  function docs() {
    if (docMap) return docMap; docMap = {};
    try { (typeof DOCS !== 'undefined' ? DOCS : []).forEach(d => { if (d.name && d.en && !docMap[d.name]) docMap[d.name] = d.en; }); } catch (_) {}
    return docMap;
  }
  function exact(s) {
    if (D[s]) return D[s];
    const dm = docs(); if (dm[s]) return dm[s];
    for (const [re, rep] of P) if (re.test(s)) return s.replace(re, rep);
    return null;
  }
  function tr(s) {
    if (!/[À-ỹĐđ]/.test(s)) return s;
    const e = exact(s); if (e !== null) return e;
    if (s.includes(' · ')) {
      const parts = s.split(' · '), out = []; let changed = false;
      for (let i = 0; i < parts.length;) {
        let j = parts.length, hit = null;
        for (; j > i; j--) { const seg = parts.slice(i, j).join(' · '); if (j - i < parts.length) { const t = exact(seg); if (t !== null) { hit = t; break; } } }
        if (hit !== null) { out.push(hit); changed = true; i = j; } else { out.push(parts[i]); i++; }
      }
      if (changed) return out.join(' · ');
    }
    return s;
  }
  const ORIG = new WeakMap(), ATTRS = ['placeholder', 'aria-label', 'title'];
  let lang = 'vi';
  try { lang = localStorage.getItem('idc_lang') === 'en' ? 'en' : 'vi'; } catch (_) {}
  const skip = n => { for (let e = n.parentElement; e; e = e.parentElement) if (e.id === 'mailbody' || e.tagName === 'TEXTAREA' || e.tagName === 'SCRIPT' || e.tagName === 'STYLE' || e.hasAttribute('data-noi18n')) return true; return false; };
  function textNode(n) {
    if (skip(n)) return;
    let o = ORIG.get(n);
    if (o === undefined || (n.nodeValue !== o.vi && n.nodeValue !== o.en)) { o = { vi: n.nodeValue, en: null }; ORIG.set(n, o); }
    if (lang === 'vi') { if (n.nodeValue !== o.vi) n.nodeValue = o.vi; return; }
    if (o.en === null) { const raw = o.vi, t = raw.trim(); const x = t ? tr(t) : t; o.en = x === t ? raw : raw.replace(t, x); }
    if (n.nodeValue !== o.en) n.nodeValue = o.en;
  }
  function el(e) {
    ATTRS.forEach(a => {
      if (!e.hasAttribute(a)) return; const k = 'data-vi-' + a; let vi = e.getAttribute(k); const cur = e.getAttribute(a);
      if (vi === null || (cur !== vi && cur !== tr(vi))) { vi = cur; e.setAttribute(k, vi); }
      const want = lang === 'en' ? tr(vi) : vi; if (cur !== want) e.setAttribute(a, want);
    });
  }
  let busy = false;
  function apply(root) {
    busy = true;
    const r = root || document.body;
    if (r.nodeType === 3) textNode(r);
    else if (r.nodeType === 1) {
      const w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) textNode(n);
      el(r); r.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el);
    }
    busy = false;
  }
  const mo = new MutationObserver(ms => {
    if (busy) return; mo.disconnect();
    ms.forEach(m => { if (m.type === 'characterData') apply(m.target); else if (m.type === 'attributes') el(m.target); else m.addedNodes.forEach(apply); });
    observe();
  });
  const observe = () => mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  function setLang(l) {
    lang = l; docMap = null;
    try { localStorage.setItem('idc_lang', l); } catch (_) {}
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-sw button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    mo.disconnect(); apply(document.body); observe();
  }
  function mount() {
    const top = document.querySelector('header.top'); if (!top || top.querySelector('.lang-sw')) return;
    const sw = document.createElement('div'); sw.className = 'lang-sw'; sw.setAttribute('role', 'group'); sw.setAttribute('data-noi18n', '');
    sw.setAttribute('aria-label', 'Language / Ngôn ngữ');
    sw.innerHTML = '<button type="button" data-lang="vi">VI</button><button type="button" data-lang="en">EN</button>';
    sw.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setLang(b.dataset.lang); });
    top.appendChild(sw);
  }
  window.IDC_I18N = { setLang, tr };
  mount(); setLang(lang);
})();
