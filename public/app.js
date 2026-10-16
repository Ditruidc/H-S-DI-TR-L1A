
/* ---------- helpers ---------- */
const P={chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',cog:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',chl:'<path d="m15 18-6-6 6-6"/>',chr:'<path d="m9 18 6-6-6-6"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
folder:'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
down:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
up:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
zip:'<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
back:'<path d="m15 18-6-6 6-6"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
copy:'<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
check:'<path d="M20 6 9 17l-5-5"/>',alert:'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
sheet:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/>',
plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
ext:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',list:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',chart:'<path d="M3 3v18h18"/><path d="M7 16v-4"/><path d="M12 16V8"/><path d="M17 16v-7"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'};
const I=(n,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''} aria-hidden="true">${P[n]}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'');
const usd=n=>(+n||0).toLocaleString('en-US');
const fmtSize=b=>!b?'':b>1048576?(b/1048576).toFixed(1)+' MB':Math.max(1,Math.round(b/1024))+' KB';
const fmtTime=iso=>{if(!iso)return'';const d=new Date(iso);if(isNaN(d))return iso;const p=n=>String(n).padStart(2,'0');return `${p(d.getDate())}/${p(d.getMonth()+1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`};
const $=id=>document.getElementById(id);
let toastT;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),3000)}

/* ---------- program definition (L-1A checklist) ---------- */
const GROUPS={VN:{short:'Công ty Việt Nam',full:'Công ty nước ngoài (nhà đầu tư Việt Nam)',folder:'01_Cong-ty-Viet-Nam'},AP:{short:'Đương đơn',full:'Đương đơn L-1A',folder:'02_Duong-don'},US:{short:'Công ty tại Mỹ',full:'Công ty tại Hoa Kỳ (chủ dự án đầu tư ở Mỹ)',folder:'03_Cong-ty-tai-My'}};
const DEFAULT_DOCS=[
 ['VN-01','VN','Giấy phép kinh doanh','Business License','Pháp lý','',''],['VN-02','VN','Điều lệ thành lập công ty','Articles of Incorporation','Pháp lý','Thể hiện ngày thành lập',''],
 ['VN-03','VN','Báo cáo kết quả hoạt động kinh doanh','Income Statement','Tài chính','Tối thiểu 1 năm gần nhất','01/01–31/12/2025'],['VN-04','VN','Bảng cân đối kế toán','Balance Sheet','Tài chính','','31/12/2025'],
 ['VN-05','VN','Sơ đồ tổ chức công ty','Organizational Chart','Nhân sự','Tối thiểu 3 cấp bậc',''],['VN-06','VN','Thông tin cấp dưới trực tiếp','Direct Subordinates Information','Nhân sự','Họ tên, chức danh, nhiệm vụ, học vấn, mức lương',''],
 ['VN-07','VN','Số lượng nhân viên theo bảng lương','Payroll Headcount','Nhân sự','Full-time & part-time',''],['VN-08','VN','Tờ khai thuế / biên lai nộp thuế','Tax Returns / Tax Receipts','Thuế','Tối thiểu 1 năm','Năm 2025'],
 ['VN-09','VN','Kế hoạch kinh doanh tại Mỹ','U.S. Business Plan','Kế hoạch','Dự báo 1, 3, 5 năm: chi phí, doanh số, lợi nhuận, nhân sự',''],['VN-10','VN','Hoá đơn & hợp đồng','Invoices & Contracts','Hoạt động','Chứng minh hoạt động ≥ 1 năm trước khi nộp đơn','12 tháng gần nhất'],
 ['VN-11','VN','Sao kê tài khoản ngân hàng','Bank Statements','Tài chính','','Năm 2025'],['VN-12','VN','Tài liệu quảng bá','Marketing Materials','Hoạt động','Brochure, website, Facebook, Zalo',''],
 ['VN-13','VN','Bằng chứng thuê / sở hữu mặt bằng','Proof of Premises','Pháp lý','',''],['VN-14','VN','Bằng chứng góp vốn','Proof of Capital Contribution','Tài chính','Chuyển khoản sang Hoa Kỳ',''],
 ['VN-15','VN','Danh sách cổ đông','Shareholder List','Pháp lý','Tên cổ đông & tỷ lệ sở hữu',''],['VN-16','VN','Báo cáo nghiên cứu khả thi','Feasibility Study','Kế hoạch','Công ty Mỹ hỗ trợ được vị trí quản lý trong 1 năm',''],
 ['VN-17','VN','Giấy tờ khác theo yêu cầu luật sư','Other Documents (Attorney)','Khác','','Theo yêu cầu'],
 ['AP-01','AP','Sơ yếu lý lịch (CV)','Curriculum Vitae','Cá nhân','',''],['AP-02','AP','Bảng lương đương đơn','Applicant Payroll Records','Tài chính','','Năm 2025'],
 ['AP-03','AP','Hợp đồng lao động','Employment Contract','Nhân sự','',''],['AP-04','AP','Bằng cấp','Degrees & Certificates','Cá nhân','Nếu có',''],['AP-05','AP','Lý lịch tư pháp số 2','Criminal Record Certificate No. 2','Pháp lý','',''],
 ['US-01','US','Giấy chứng nhận thành lập công ty','Certificate of Incorporation','Pháp lý','',''],['US-02','US','Giấy phép kinh doanh của thành phố','City Business License','Pháp lý','',''],
 ['US-03','US','Hợp đồng thuê mặt bằng','Office Lease Agreement','Pháp lý','',''],['US-04','US','Sơ đồ tổ chức','Organizational Chart (U.S.)','Nhân sự','',''],
 ['US-05','US','Hình ảnh văn phòng','Office Photographs','Hoạt động','Trong & ngoài, có biển hiệu',''],['US-06','US','Brochure và/hoặc website','Brochure / Website','Hoạt động','',''],
 ['US-07','US','Báo cáo kết quả kinh doanh','Income Statement (U.S.)','Tài chính','Chỉ với công ty đang hoạt động','01/01–31/12/2025',1],['US-08','US','Bảng cân đối kế toán','Balance Sheet (U.S.)','Tài chính','Chỉ với công ty đang hoạt động','31/12/2025',1],
 ['US-09','US','Hồ sơ thuế IRS, Mẫu 941','IRS Tax Filings, Form 941','Thuế','Chỉ với công ty đang hoạt động','Năm 2025',1],['US-10','US','Tổng hợp bảng lương hàng tháng','Monthly Payroll Summary','Nhân sự','Chỉ với công ty đang hoạt động','Năm 2025',1],
 ['US-11','US','Hoá đơn điện nước, hợp đồng dịch vụ','Utility Bills & Service Contracts','Hoạt động','Chỉ với công ty đang hoạt động','12 tháng gần nhất',1],['US-12','US','Sao kê tài khoản ngân hàng','Bank Statements (U.S.)','Tài chính','Chỉ với công ty đang hoạt động','12 tháng gần nhất',1],
 ['US-13','US','Giấy tờ khác theo yêu cầu luật sư','Other Documents (Attorney)','Khác','','Theo yêu cầu']
].map(([code,group,name,en,cat,note,period,op])=>({code,group,name,en,cat,note,period,op:!!op}));
let DOCS=DEFAULT_DOCS.slice(),DOC=Object.fromEntries(DOCS.map(d=>[d.code,d]));
const STEP_DESC=['Thu thập, kiểm tra hồ sơ công ty Việt Nam & Mỹ','Nộp đơn USCIS, chờ duyệt và phỏng vấn lãnh sự','Sang Mỹ điều hành công ty, vận hành tối thiểu 1 năm','Nộp đơn EB-1C và điều chỉnh tình trạng cư trú','Nhận thẻ xanh 10 năm cho cả gia đình'];
let STEPS=[{t:'Thẩm định & chứng từ',d:'2–4 tuần'},{t:'Nộp I-129 · Phỏng vấn',d:'5–9 tháng'},{t:'Nhận visa L-1A',d:'≥ 12 tháng'},{t:'I-140 · I-485',d:'12–24 tháng'},{t:'Thẻ xanh EB-1C',d:'Thẻ 10 năm'}];
let PAY=[{k:'d1',n:'Đợt 1',w:'Khi ký hợp đồng & mở hồ sơ',a:19000},{k:'d2',n:'Đợt 2',w:'Khi nộp I-129',a:20000},{k:'d3',n:'Đợt 3',w:'Khi nhận visa L-1A',a:15255},{k:'d4',n:'Đợt 4',w:'Khi nộp I-140 / I-485',a:18245},{k:'d5',n:'Đợt 5',w:'Sau khi nhận thẻ xanh',a:5000}];
const ST={missing:['Còn thiếu','s-missing'],review:['Chờ duyệt','s-review'],approved:['Đã duyệt','s-approved'],na:['Không áp dụng','s-na']};
const US_STATES=[['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['DC','District of Columbia'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],['PR','Puerto Rico']];
const POPULAR_STATES=['CA','TX','NY','FL','WA','NJ','GA','IL','DE','NV'];
const stateLabel=v=>{if(!v)return'';const f=US_STATES.find(([k,n])=>k===v||n.toLowerCase()===String(v).toLowerCase());return f?`${f[1]} (${f[0]})`:v};
const usAddrOf=c=>[c.usAddr,c.usCity,[stateLabel(c.state),c.usZip].filter(Boolean).join(' ')].filter(Boolean).join(', ');
const OFFICES=['TP.HCM','Hà Nội','Đà Nẵng','Buôn Ma Thuột','Hoa Kỳ'];
const DEPTS=[
 {k:'legal',t:'Pháp lý',en:'Legal',ab:'PL',c:'#2F4E7A',cs:'#E9EEF6'},
 {k:'fin',t:'Tài chính',en:'Finance',ab:'TC',c:'#17631A',cs:'#E8F3E6'},
 {k:'tax',t:'Thuế',en:'Tax',ab:'TH',c:'#A3402B',cs:'#FBECE8'},
 {k:'hr',t:'Nhân sự',en:'Human Resources',ab:'NS',c:'#6A4A9C',cs:'#F0EAF8'},
 {k:'plan',t:'Kế hoạch kinh doanh',en:'Business Plan',ab:'KH',c:'#1F5FA6',cs:'#E6EFF9'},
 {k:'mkt',t:'Marketing',en:'Marketing Plan & Materials',ab:'MK',c:'#A33A6B',cs:'#F9E9F1'},
 {k:'ops',t:'Hoạt động kinh doanh',en:'Business Operations',ab:'HĐ',c:'#0E7470',cs:'#E2F4F2'},
 {k:'personal',t:'Hồ sơ cá nhân',en:'Personal Records',ab:'CN',c:'#A86A12',cs:'#FBF1DF'},
 {k:'other',t:'Khác',en:'Other',ab:'KC',c:'#5B6672',cs:'#EEF1F4'}];
const DEPT=Object.fromEntries(DEPTS.map(x=>[x.k,x]));
const CAT2DEPT={'Pháp lý':'legal','Tài chính':'fin','Thuế':'tax','Nhân sự':'hr','Kế hoạch':'plan','Kế hoạch kinh doanh':'plan','Marketing':'mkt','Hoạt động':'ops','Cá nhân':'personal','Khác':'other'};
function deptOf(d){if(/marketing|brochure|website|quảng bá/i.test((d.name||'')+' '+(d.en||'')))return'mkt';return CAT2DEPT[d.cat]||'other'}
const deptSort=l=>l.slice().sort((a,b)=>DEPTS.findIndex(x=>x.k===deptOf(a))-DEPTS.findIndex(x=>x.k===deptOf(b)));
function byDept(l){return DEPTS.map(x=>[x,l.filter(d=>deptOf(d)===x.k)]).filter(([,a])=>a.length)}
const deptHead=(x,n)=>`<div class="dept-h" style="--dc:${x.c};--dcs:${x.cs}"><span class="dept-ab">${x.ab}</span><b>${x.t}</b><span class="dept-en">${x.en}</span><span class="dept-n">${n} tài liệu</span></div>`;
const deptRow=(x,n,cols)=>`<tr class="dept-r"><td colspan="${cols}"><span class="dept-tag" style="--dc:${x.c};--dcs:${x.cs}"><span class="dept-ab">${x.ab}</span>${x.t}<span class="dept-en">· ${x.en}</span><span class="dept-n">${n}</span></span></td></tr>`;
/* ---------- Bước 2: mốc tiến độ (data.ms) ---------- */
const dmy=v=>{if(!v||!/^\d{4}-\d{2}-\d{2}/.test(v))return'';const[y,m,d]=v.slice(0,10).split('-');return `${d}/${m}/${y}`};
const addBizDays=(v,n)=>{const d=new Date(v+'T00:00:00');let k=0;while(k<n){d.setDate(d.getDate()+1);const w=d.getDay();if(w&&w!==6)k++}return d.toISOString().slice(0,10)};
const RESULT={pass:['Đậu','ok'],rfe:['Cần bổ sung (221g)','warn'],deny:['Từ chối','bad']};
function msList(c){const m=c.ms||{};const l=[
  {k:'fee',t:'Đóng phí USCIS',en:'USCIS filing fees',done:!!m.feeDate,v:dmy(m.feeDate)},
  ...(m.premium?[{k:'pp',t:'Premium Processing (I-907)',en:'Premium Processing',done:!!m.premiumDate,v:m.premiumDate?`Nộp ${dmy(m.premiumDate)} · USCIS phản hồi trước ${dmy(addBizDays(m.premiumDate,15))}`:''}]:[]),
  {k:'i129',t:'Nộp I-129',en:'I-129 filed',done:!!m.i129Date,v:[dmy(m.i129Date),m.receipt?'Receipt '+m.receipt:''].filter(Boolean).join(' · ')},
  {k:'ok',t:'USCIS duyệt (I-797)',en:'I-797 approval',done:!!m.approvedDate,v:dmy(m.approvedDate)},
  {k:'iv',t:'Lịch phỏng vấn',en:'Consular interview',done:!!m.interviewDate,v:[dmy(m.interviewDate),m.interviewPlace].filter(Boolean).join(' · ')},
  {k:'res',t:'Kết quả phỏng vấn',en:'Interview result',done:!!m.result,v:m.result?RESULT[m.result][0]+(m.resultDate?' · '+dmy(m.resultDate):''):''}];
  return l}
const msProg=c=>{const l=msList(c);return{n:l.filter(x=>x.done).length,t:l.length}};
function msPanel(c,s){
  const m=c.ms||{};const l=msList(c);const pr=msProg(c);const ed=R.canWrite;
  const today=new Date().toISOString().slice(0,10);
  const ivLeft=m.interviewDate&&!m.result?Math.round((new Date(m.interviewDate)-new Date(today))/864e5):null;
  const banners=[
    s.missing?`<div class="banner warn">${I('alert')}<div>Có <b>${s.missing} tài liệu</b> cần bổ sung sau khi đã chuyển sang Bước 2. Xem tab <b>Cần bổ sung</b>.</div></div>`:'',
    m.result==='rfe'?`<div class="banner warn">${I('alert')}<div><b>Lãnh sự yêu cầu bổ sung (221g).</b> Gửi bổ sung cho lãnh sự rồi cập nhật lại kết quả.</div></div>`:'',
    m.result==='deny'?`<div class="banner bad">${I('alert')}<div><b>Hồ sơ bị từ chối tại phỏng vấn.</b> Trao đổi với Luật sư về phương án tiếp theo.</div></div>`:'',
    ivLeft!==null&&ivLeft>=0&&ivLeft<=7?`<div class="banner blue">${I('clock')}<div>Phỏng vấn ${ivLeft===0?'<b>hôm nay</b>':`còn <b>${ivLeft} ngày</b>`} (${dmy(m.interviewDate)}${m.interviewPlace?' · '+esc(m.interviewPlace):''}).</div></div>`:''].join('');
  const row=x=>`<li class="${x.done?'done':''}"><span class="ms-dot">${x.done?I('check',12):''}</span><div><b>${x.t}</b><span class="en">${x.en}</span></div><span class="ms-v">${x.v?esc(x.v):'<span class="muted">Chưa có</span>'}</span></li>`;
  const D=(k,label,extra='')=>`<div class="fld"><label for="ms-${k}">${label}</label><input type="date" id="ms-${k}" value="${esc(m[k]||'')}" ${extra}></div>`;
  const form=ed?`<form id="msform" class="form ms-form">
      ${D('feeDate','Ngày đóng phí USCIS')}
      <div class="fld"><label for="ms-premium">Premium Processing (I-907)</label><select id="ms-premium"><option value="">Không dùng</option><option value="1" ${m.premium?'selected':''}>Có dùng – xét duyệt 15 ngày làm việc</option></select></div>
      <div class="fld ms-pp" ${m.premium?'':'hidden'}><label for="ms-premiumDate">Ngày nộp I-907</label><input type="date" id="ms-premiumDate" value="${esc(m.premiumDate||'')}"></div>
      ${D('i129Date','Ngày nộp I-129')}
      <div class="fld"><label for="ms-receipt">Số Receipt (I-797C)</label><input id="ms-receipt" value="${esc(m.receipt||'')}" placeholder="VD: WAC2690012345" autocomplete="off"></div>
      ${D('approvedDate','Ngày USCIS duyệt (I-797 Approval)')}
      ${D('interviewDate','Ngày phỏng vấn lãnh sự')}
      <div class="fld"><label for="ms-interviewPlace">Địa điểm phỏng vấn</label><input id="ms-interviewPlace" list="ms-places" value="${esc(m.interviewPlace||'')}" placeholder="Chọn hoặc gõ"><datalist id="ms-places"><option value="Tổng Lãnh sự quán Hoa Kỳ – TP.HCM"><option value="Đại sứ quán Hoa Kỳ – Hà Nội"></datalist></div>
      <div class="fld"><label for="ms-result">Kết quả phỏng vấn</label><select id="ms-result"><option value="">Chưa có</option>${Object.entries(RESULT).map(([k,[t]])=>`<option value="${k}" ${m.result===k?'selected':''}>${t}</option>`).join('')}</select></div>
      ${D('resultDate','Ngày có kết quả')}
      <div class="full ms-actions"><span class="dnote">Chọn kết quả <b>Đậu</b> là hồ sơ tự chuyển sang Bước 3.</span><button class="btn primary" type="submit">${I('check',14)}Lưu mốc tiến độ</button></div>
    </form>`:'';
  return `<section class="ms-panel">
    <div class="ms-h"><div><div class="eyebrow">Bước 2 · Theo dõi mốc</div><h3>Nộp I-129 · Phỏng vấn</h3></div><div class="ms-prog"><span><b>${pr.n}</b>/${pr.t} mốc</span><i style="--p:${Math.round(pr.n/pr.t*100)}%"></i></div></div>
    ${banners}
    <div class="ms-body"><ol class="ms-list">${l.map(row).join('')}</ol>${form}</div>
  </section>`;
}
async function saveMs(c){
  const g=id=>{const el=$('ms-'+id);return el?el.value.trim():''};
  const nm={feeDate:g('feeDate'),premium:!!g('premium'),premiumDate:g('premium')?g('premiumDate'):'',i129Date:g('i129Date'),receipt:g('receipt').toUpperCase(),approvedDate:g('approvedDate'),interviewDate:g('interviewDate'),interviewPlace:g('interviewPlace'),result:g('result'),resultDate:g('resultDate')};
  if(nm.result&&!nm.resultDate)nm.resultDate=new Date().toISOString().slice(0,10);
  const old=c.ms||{};const L={feeDate:'Đóng phí USCIS',premium:'Premium Processing',premiumDate:'Nộp I-907',i129Date:'Nộp I-129',receipt:'Receipt',approvedDate:'USCIS duyệt',interviewDate:'Lịch phỏng vấn',interviewPlace:'Địa điểm PV',result:'Kết quả PV',resultDate:'Ngày kết quả'};
  const ch=Object.keys(nm).filter(k=>String(nm[k]||'')!==String(old[k]||''));
  if(!ch.length){toast('Không có gì thay đổi');return}
  const fmt=k=>k==='premium'?(nm[k]?'có':'không'):k==='result'?(nm[k]?RESULT[nm[k]][0]:'—'):/Date$/.test(k)?(dmy(nm[k])||'—'):(nm[k]||'—');
  if(await updateClient(c,{ms:nm},'Cập nhật mốc Bước 2: '+ch.map(k=>`${L[k]} ${fmt(k)}`).join(', ')))toast('Đã lưu mốc tiến độ');
}
const OK_TYPES={'application/pdf':'pdf','image/png':'png','image/jpeg':'jpg','image/webp':'webp'};
const EXT_TYPE={pdf:'application/pdf',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp'};

/* ---------- state ---------- */
const CFG=window.APP_CONFIG||{};
const BUCKET=CFG.BUCKET||'hoso';
const S={view:'clients',client:null,tab:'missing',q:'',filter:'all',dept:'',page:1,colOpen:false};
const R={sb:null,session:null,email:null,role:null,canWrite:false,isAdmin:false,ready:false,err:null,clients:[],files:{},filesFor:null,urls:{},staff:[]};
const getC=id=>R.clients.find(c=>c.id===id);
const stOf=(c,code)=>(c.docs&&c.docs[code]&&c.docs[code].s)||'missing';
function stats(c){const o={approved:0,review:0,missing:0,na:0};DOCS.forEach(d=>o[stOf(c,d.code)]++);o.req=DOCS.length-o.na;o.rcv=o.review+o.approved;o.pct=o.req?Math.round(o.approved/o.req*100):0;return o}
const fmtDate=iso=>{if(!iso)return'';const d=new Date(iso);if(isNaN(d))return'';const p=n=>String(n).padStart(2,'0');return `${p(d.getDate())}/${p(d.getMonth()+1)}/${d.getFullYear()}`};
const isRcv=(c,code)=>{const s=stOf(c,code);return s==='review'||s==='approved'};
/* ngày nhận = ngày tệp đầu tiên được tải lên; nếu chưa có tệp thì lấy ngày đổi trạng thái */
function rcvDate(c,code){const fs=(R.files[c.id]||[]).filter(f=>f.code===code).map(f=>f.at).filter(Boolean).sort();return fs[0]||(isRcv(c,code)?((c.docs||{})[code]||{}).at:'')||''}
const paidOf=c=>PAY.reduce((a,p)=>a+(+((c.pay||{})[p.k])||0),0);
const filesOf=(c,code)=>(R.files[c.id]||[]).filter(f=>f.code===code);
const initials=n=>String(n||'?').split(' ').filter(Boolean).slice(-2).map(w=>w[0]).join('').toUpperCase();
const optLabel=o=>o==='A'?'A · Mở mới doanh nghiệp tại Mỹ':o==='B'?'B · Đã có doanh nghiệp tại Mỹ':'Chưa xác định phương án';
function defaultDocs(opt){const o={};DOCS.forEach(d=>{let s='missing',note='';if(d.cat==='Khác')s='na';else if(d.op&&opt!=='B'){s='na';note=opt==='A'?'Công ty Mỹ mới thành lập':'Tạm không áp dụng – chờ chọn phương án A/B'}o[d.code]={s,note}});return o}
const rowToClient=r=>Object.assign({},r.data||{},{id:r.id,log:r.log||[],updatedAt:r.updated_at,createdAt:r.created_at});
const rowToFile=r=>({_id:r.id,client:r.client_id,code:r.code,name:r.name,size:r.size,type:r.mime,path:r.storage_path,at:r.created_at,by:r.created_by});

/* ---------- program config (editable in Quản trị) ---------- */
function applyProgram(p){
  if(!p)return;
  if(Array.isArray(p.docs)&&p.docs.length){DOCS=p.docs.map(d=>Object.assign({code:'',group:'VN',name:'',en:'',cat:'',note:'',period:'',op:false},d));DOC=Object.fromEntries(DOCS.map(d=>[d.code,d]))}
  if(Array.isArray(p.steps)&&p.steps.length===5)STEPS=p.steps;
  if(Array.isArray(p.pay)&&p.pay.length)PAY=p.pay;
}
const programNow=()=>({docs:DOCS,steps:STEPS,pay:PAY});

/* ---------- auth + boot ---------- */
async function initRuntime(){
  if(!window.supabase||!CFG.SUPABASE_URL||!CFG.SUPABASE_ANON_KEY){R.ready=true;R.err={message:'Chưa cấu hình Supabase (public/config.js).'};render();return}
  R.sb=window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
  const {data}=await R.sb.auth.getSession();
  R.sb.auth.onAuthStateChange((_ev,session)=>{const was=!!R.session;R.session=session;if(!!session!==was)afterAuth()});
  R.session=data.session;afterAuth();
}
let channel=null;
async function afterAuth(){
  if(!R.session){R.email=null;R.clients=[];R.files={};R.ready=true;if(channel){R.sb.removeChannel(channel);channel=null}presenceStop();chatReset();bellReset();render();return}
  R.email=(R.session.user.email||'').toLowerCase();R.ready=false;render();
  const me=await R.sb.from('staff').select('email,role,name').eq('email',R.email).maybeSingle();
  if(me.error||!me.data){R.role=null;R.canWrite=false;R.ready=true;R.err=me.error?{message:me.error.message}:{code:'not_staff'};render();return}
  R.role=me.data.role;R.name=me.data.name||'';R.isAdmin=me.data.role==='admin';R.canWrite=me.data.role==='admin'||me.data.role==='staff';R.canReview=R.canWrite||me.data.role==='lawyer';R.canApprove=R.isAdmin||me.data.role==='lawyer';R.err=null;
  const st=await R.sb.from('settings').select('value').eq('key','program_l1a').maybeSingle();
  if(st.data&&st.data.value)applyProgram(st.data.value);
  await loadPeople();
  await loadClients();
  logLogin();presenceStart();chatInit();if(R.canWrite)loadTrash().then(()=>autoPurge());if(S.view==='trash')loadTrash();
  bellStart();if(R.isAdmin)loadLogins();
  if(S.view==='admin')loadStaff();
  if(S.view==='report')loadReportFiles();
  if(!channel){channel=R.sb.channel('hoso-live')
    .on('postgres_changes',{event:'*',schema:'public',table:'clients'},()=>loadClients())
    .on('postgres_changes',{event:'*',schema:'public',table:'files'},p=>{const cid=(p.new&&p.new.client_id)||(p.old&&p.old.client_id);if(cid&&cid===R.filesFor)loadFiles(cid,true);bellLive(p)});
    if(R.isAdmin)channel.on('postgres_changes',{event:'INSERT',schema:'public',table:'login_log'},p=>loginLive(p.new));
    channel.subscribe()}
}
async function loadPeople(){const r=await R.sb.from('staff').select('email,name,role').order('name');R.people=(r.data||[]).map(u=>Object.assign(u,{email:String(u.email).toLowerCase()}))}
const personName=e=>{const u=(R.people||[]).find(x=>x.email===String(e||'').toLowerCase());return (u&&u.name)||String(e||'').split('@')[0]};
const assigneesOf=c=>Array.isArray(c.assignees)?c.assignees:[];
async function loadClients(){
  const r=await R.sb.from('clients').select('*').order('id');
  if(r.error){R.err={message:r.error.message};R.ready=true;render();return}
  R.clients=r.data.map(rowToClient);R.ready=true;R.err=null;render();
  if(S.view==='case')watchFiles(S.client);
}
function watchFiles(id){if(!R.sb||!id||R.filesFor===id)return;R.filesFor=id;loadFiles(id)}
async function loadFiles(id){
  const r=await R.sb.from('files').select('*').eq('client_id',id).order('created_at');
  if(r.error){toast('Không đọc được danh sách tệp: '+r.error.message);return}
  R.files[id]=r.data.filter(x=>!x.deleted_at).map(rowToFile);render();refreshDrawer();
}


/* ---------- Hạn xử lý, dự báo, việc tồn (dùng cho Báo cáo + nhắc nhở) ---------- */
const DAY=864e5;
const parseDMY=v=>{if(!v)return 0;const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(String(v));if(m)return Date.UTC(+m[3],+m[2]-1,+m[1])-7*36e5;const t=Date.parse(v);return isNaN(t)?0:t};
const isoDay=t=>{const d=new Date(t+7*36e5);return d.toISOString().slice(0,10)};
/* Hạn hoàn thiện chứng từ: đặt tay trong Phân công; mặc định = ngày mở hồ sơ + 30 ngày */
function dueOf(c){if(c.due)return Date.parse(c.due+'T23:59:59+07:00')||0;const o=parseDMY(c.opened)||Date.parse(c.createdAt||'')||0;return o?o+30*DAY:0}
function caseTiming(c){
  const now=Date.now(),s=stats(c),due=dueOf(c),left=due?Math.ceil((due-now)/DAY):null,done=!s.missing&&!s.review;
  const appr=Object.values(c.docs||{}).filter(x=>x&&x.s==='approved'&&x.at&&now-Date.parse(x.at)<=30*DAY).length;
  const rcvd=Object.values(c.docs||{}).filter(x=>x&&(x.s==='approved'||x.s==='review')&&x.at&&now-Date.parse(x.at)<=30*DAY).length;
  const rate=Math.max(appr,rcvd)/30,remain=s.req-s.approved;
  const eta=done?now:rate>0?now+Math.ceil(remain/rate)*DAY:0;
  let st='ok',label='Đúng tiến độ';
  if(done){st='done';label='Đã hoàn thiện'}
  else if(due&&now>due){st='late';label=`Quá hạn ${-left} ngày`}
  else if(left!==null&&left<=7){st='soon';label=`Còn ${left} ngày`}
  else if(eta&&due&&eta>due){st='risk';label=`Dự kiến trễ ${Math.ceil((eta-due)/DAY)} ngày`}
  else if(!eta){st='risk';label='Chưa có tiến triển 30 ngày'}
  return {due,left,eta,st,label,done,remain};
}
/* Việc tồn của một người: hồ sơ quá hạn, tài liệu chờ duyệt lâu (Luật sư), hồ sơ không thao tác 7 ngày */
function pendingFor(email,role){
  const now=Date.now(),out=[];
  R.clients.filter(c=>assigneesOf(c).includes(email)).forEach(c=>{
    const s=stats(c),tm=caseTiming(c);if(tm.done)return;
    const mine=(c.log||[]).filter(l=>String(l.by||'').toLowerCase()===email).map(l=>Date.parse(l.t)||0);
    const lastMine=mine.length?Math.max(...mine):0,idle=lastMine?Math.floor((now-lastMine)/DAY):null;
    const why=[];
    if(tm.st==='late')why.push(['bad',tm.label]);
    if(role==='lawyer'){const old=Object.values(c.docs||{}).filter(x=>x&&x.s==='review'&&x.at&&now-Date.parse(x.at)>3*DAY).length;if(old)why.push(['warn',`${old} tài liệu chờ duyệt > 3 ngày`])}
    else if(s.missing&&(idle===null||idle>=7))why.push(['warn',idle===null?'Chưa thao tác lần nào':`Chưa thao tác ${idle} ngày`]);
    if(why.length)out.push({c,why,idle});
  });
  return out;
}

/* ---------- Báo cáo (chỉ Quản trị) ---------- */
const RP={files:null,days:30};
async function loadReportFiles(){if(!R.sb)return;const r=await R.sb.from('files').select('*').order('created_at',{ascending:false}).limit(5000);if(r.data)r.data=r.data.filter(x=>!x.deleted_at);RP.files=r.error?[]:r.data;if(S.view==='report')render()}
function reportData(){
  const now=Date.now(),since=now-RP.days*DAY,files=RP.files||[],t=x=>Date.parse(x||'')||0;
  const people=(R.people||[]).filter(u=>u.role!=='admin');
  const row=()=>({cases:0,req:0,rcv:0,approved:0,review:0,missing:0,uploads:0,approvals:0,late:0});
  const by={};people.forEach(u=>by[u.email]=row());const none=row();
  const timing=new Map(R.clients.map(c=>[c.id,caseTiming(c)]));
  R.clients.forEach(c=>{const s=stats(c),as=assigneesOf(c),tm=timing.get(c.id);const tgt=as.length?as.map(e=>by[e]||(by[e]=row())):[none];
    tgt.forEach(r=>{r.cases++;r.req+=s.req;r.rcv+=s.rcv;r.approved+=s.approved;r.review+=s.review;r.missing+=s.missing;if(tm.st==='late')r.late++})});
  files.forEach(f=>{if(t(f.created_at)>=since){const e=String(f.created_by||'').toLowerCase();if(by[e])by[e].uploads++}});
  const approvals=[];R.clients.forEach(c=>Object.entries(c.docs||{}).forEach(([k,x])=>{if(x&&x.s==='approved'&&x.at)approvals.push({at:t(x.at),by:String(x.by||'').toLowerCase()})}));
  approvals.forEach(a=>{if(a.at>=since&&by[a.by])by[a.by].approvals++});
  const tot=R.clients.reduce((o,c)=>{const s=stats(c);o.req+=s.req;o.approved+=s.approved;o.review+=s.review;o.missing+=s.missing;return o},{req:0,approved:0,review:0,missing:0});
  const cnt=k=>[...timing.values()].filter(x=>x.st===k).length;
  const steps=STEPS.map((x,i)=>({t:x.t,n:R.clients.filter(c=>(c.step||1)===i+1).length}));
  const weeks=[];for(let i=7;i>=0;i--){const end=now-i*7*DAY,start=end-7*DAY;weeks.push({label:fmtDate(new Date(start+DAY).toISOString()).slice(0,5),up:files.filter(f=>t(f.created_at)>=start&&t(f.created_at)<end).length,ap:approvals.filter(a=>a.at>=start&&a.at<end).length})}
  const pend=people.map(u=>({u,items:pendingFor(u.email,u.role)}));
  return {by,none,people,tot,steps,weeks,timing,pend,late:cnt('late'),soon:cnt('soon'),risk:cnt('risk'),done:cnt('done'),uploads:files.filter(f=>t(f.created_at)>=since).length,approvals:approvals.filter(a=>a.at>=since).length};
}
/* --- biểu đồ SVG (màu trạng thái cố định: xanh = đã duyệt, cam = chờ duyệt, đỏ nhạt = còn thiếu) --- */
const CC={ok:'#17663A',rv:'#C98A0A',ms:'#D9786B',up:'#17631A',ap:'#E0A800',grid:'#E3EAE1'};
function donut(parts,center,sub){
  const tot=parts.reduce((a,p)=>a+p.v,0)||1,r=54,C=2*Math.PI*r;let off=0;
  const segs=parts.filter(p=>p.v).map(p=>{const len=p.v/tot*C,gap=parts.filter(x=>x.v).length>1?2:0;const el=`<circle r="${r}" cx="70" cy="70" fill="none" stroke="${p.c}" stroke-width="18" stroke-dasharray="${Math.max(0,len-gap)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"><title>${esc(p.l)}: ${p.v} (${Math.round(p.v/tot*100)}%)</title></circle>`;off+=len;return el}).join('');
  return `<div class="rp-donut"><svg viewBox="0 0 140 140" role="img" aria-label="${esc(parts.map(p=>p.l+' '+p.v).join(', '))}"><circle r="${r}" cx="70" cy="70" fill="none" stroke="#EEF3EC" stroke-width="18"/>${segs}<text x="70" y="68" text-anchor="middle" class="big">${center}</text><text x="70" y="86" text-anchor="middle" class="sm">${sub}</text></svg>
  <ul class="rp-lg">${parts.map(p=>`<li><i style="background:${p.c}"></i><span>${esc(p.l)}</span><b class="num">${p.v}</b><em class="num">${Math.round(p.v/tot*100)}%</em></li>`).join('')}</ul></div>`;
}
function hbars(rows){
  const max=Math.max(1,...rows.map(r=>r.a+r.b+r.c));
  return `<div class="rp-hb">${rows.map(r=>{const w=x=>x/max*100;return `<div class="rp-hb-row"><span class="nm">${esc(r.name)}<em>${esc(r.sub)}</em></span><div class="trk" title="${esc(r.name)}: ${r.a} đã duyệt · ${r.b} chờ duyệt · ${r.c} còn thiếu">${r.a?`<i style="width:${w(r.a)}%;background:${CC.ok}"></i>`:''}${r.b?`<i style="width:${w(r.b)}%;background:${CC.rv}"></i>`:''}${r.c?`<i style="width:${w(r.c)}%;background:${CC.ms}"></i>`:''}</div><b class="num">${r.a+r.b+r.c}</b></div>`}).join('')}</div>
  <div class="rp-lg row"><span><i style="background:${CC.ok}"></i>Đã duyệt</span><span><i style="background:${CC.rv}"></i>Chờ duyệt</span><span><i style="background:${CC.ms}"></i>Còn thiếu</span></div>`;
}
function weekChart(weeks){
  const W=560,H=200,P={l:30,r:8,t:12,b:26},iw=W-P.l-P.r,ih=H-P.t-P.b,max=Math.max(4,...weeks.map(w=>Math.max(w.up,w.ap)));
  const nice=Math.ceil(max/4)*4,x=i=>P.l+iw*(i+.5)/weeks.length,y=v=>P.t+ih-(v/nice)*ih,bw=Math.min(16,iw/weeks.length/3);
  const grid=[0,.25,.5,.75,1].map(f=>`<line x1="${P.l}" x2="${W-P.r}" y1="${y(nice*f)}" y2="${y(nice*f)}" stroke="${CC.grid}"/><text x="${P.l-6}" y="${y(nice*f)+4}" text-anchor="end" class="ax">${Math.round(nice*f)}</text>`).join('');
  const bars=weeks.map((w,i)=>`<g><rect x="${x(i)-bw-1}" y="${y(w.up)}" width="${bw}" height="${Math.max(0,P.t+ih-y(w.up))}" rx="3" fill="${CC.up}"/><rect x="${x(i)+1}" y="${y(w.ap)}" width="${bw}" height="${Math.max(0,P.t+ih-y(w.ap))}" rx="3" fill="${CC.ap}"/><rect x="${x(i)-iw/weeks.length/2}" y="${P.t}" width="${iw/weeks.length}" height="${ih}" fill="transparent"><title>Tuần từ ${w.label}: ${w.up} tệp tải lên · ${w.ap} tài liệu duyệt</title></rect><text x="${x(i)}" y="${H-8}" text-anchor="middle" class="ax">${w.label}</text></g>`).join('');
  return `<svg class="rp-wk" viewBox="0 0 ${W} ${H}" role="img" aria-label="Hoạt động 8 tuần">${grid}${bars}</svg><div class="rp-lg row"><span><i style="background:${CC.up}"></i>Tệp tải lên</span><span><i style="background:${CC.ap}"></i>Tài liệu được duyệt</span></div>`;
}
const stPill={late:'s-missing',soon:'s-review',risk:'s-review',ok:'s-approved',done:'s-approved'};
function vReport(){
  if(!RP.files){$('view').innerHTML=`<div class="card empty"><b>Đang tải số liệu…</b></div>`;loadReportFiles();return}
  const d=reportData(),pct=(a,b)=>b?Math.round(a/b*100):0;
  const rows=d.people.map(u=>({u,r:d.by[u.email]})).sort((a,b)=>b.r.cases-a.r.cases);
  const cases=R.clients.map(c=>({c,tm:d.timing.get(c.id)})).sort((a,b)=>({late:0,soon:1,risk:2,ok:3,done:4}[a.tm.st]-{late:0,soon:1,risk:2,ok:3,done:4}[b.tm.st])||(a.tm.due-b.tm.due));
  const pendN=d.pend.reduce((a,p)=>a+p.items.length,0);
  $('view').innerHTML=`
  <div class="phead"><div><div class="eyebrow">Quản trị · Báo cáo</div><h1>Báo cáo &amp; đánh giá kết quả</h1><p>Tiến độ hồ sơ, hạn hoàn thiện chứng từ, khối lượng xử lý và việc tồn của từng Nhân viên / Luật sư.</p></div>
    <div class="actions"><div class="seg rp-seg">${[7,30,90].map(n=>`<button data-rpdays="${n}" aria-pressed="${RP.days===n}">${n} ngày</button>`).join('')}</div><button class="btn" data-act="reportCsv">${I('sheet')}Xuất CSV</button></div></div>
  <div class="kpis rp-kpis">
    <div class="kpi"><div class="eyebrow">Hồ sơ đang xử lý</div><div class="v num">${R.clients.length-d.done}<small>/${R.clients.length}</small></div><div class="s">${d.done} hồ sơ đã hoàn thiện chứng từ</div></div>
    <div class="kpi k-bad"><div class="eyebrow">Quá hạn</div><div class="v num">${d.late}</div><div class="s">${d.soon} hồ sơ đến hạn trong 7 ngày</div></div>
    <div class="kpi k-warn"><div class="eyebrow">Có nguy cơ trễ</div><div class="v num">${d.risk}</div><div class="s">Theo tốc độ xử lý 30 ngày gần nhất</div></div>
    <div class="kpi k-gold"><div class="eyebrow">Việc tồn cần nhắc</div><div class="v num">${pendN}</div><div class="s">${d.pend.filter(p=>p.items.length).length} người có việc chưa xử lý</div></div>
  </div>
  <div class="rp-grid3">
    <section class="card"><div class="card-h"><h3>Tình trạng tài liệu</h3><span class="dnote sp">Toàn bộ hồ sơ</span></div><div class="card-b">${donut([{l:'Đã duyệt',v:d.tot.approved,c:CC.ok},{l:'Chờ duyệt',v:d.tot.review,c:CC.rv},{l:'Còn thiếu',v:d.tot.missing,c:CC.ms}],pct(d.tot.approved,d.tot.req)+'%','hoàn thiện')}</div></section>
    <section class="card"><div class="card-h"><h3>Hoạt động 8 tuần gần nhất</h3><span class="dnote sp">${d.uploads} tệp · ${d.approvals} duyệt trong ${RP.days} ngày</span></div><div class="card-b">${weekChart(d.weeks)}</div></section>
  </div>
  <section class="card"><div class="card-h"><h3>Hạn hoàn thiện chứng từ &amp; dự kiến</h3><span class="dnote sp">Hạn đặt trong <b>Phân công</b> · mặc định ngày mở hồ sơ + 30 ngày</span></div>
    <div class="tbl-wrap"><table><thead><tr><th>Khách hàng</th><th>Phụ trách</th><th>Tiến độ</th><th>Hạn hoàn thiện</th><th>Dự kiến xong</th><th>Tình trạng</th></tr></thead><tbody>
    ${cases.map(({c,tm})=>{const s=stats(c);return `<tr class="click" data-open="${esc(c.id)}"><td><b>${esc(c.name||'—')}</b><div class="dnote">${esc(c.id)} · ${esc(c.company||'')}</div></td><td>${esc(assigneesOf(c).map(personName).join(', ')||'—')}</td><td><div class="rp-bar"><i style="width:${pct(s.approved,s.req)}%"></i></div><div class="dnote num">${s.approved}/${s.req} đã duyệt · còn ${s.missing} thiếu</div></td><td class="num">${tm.due?fmtDate(new Date(tm.due).toISOString()):'—'}${!c.due&&tm.due?'<div class="dnote">mặc định</div>':''}</td><td class="num">${tm.done?'—':tm.eta?fmtDate(new Date(tm.eta).toISOString()):'<span class="dnote">chưa đủ dữ liệu</span>'}</td><td><span class="pill ${stPill[tm.st]}">${esc(tm.label)}</span></td></tr>`}).join('')}
    </tbody></table></div></section>
  <div class="rp-grid3">
    <section class="card"><div class="card-h"><h3>Khối lượng theo người phụ trách</h3></div><div class="card-b">${hbars(rows.map(({u,r})=>({name:u.name||u.email,sub:u.role==='lawyer'?'Luật sư':'Nhân viên',a:r.approved,b:r.review,c:r.missing})))}</div></section>
    <section class="card"><div class="card-h"><h3>Việc tồn &amp; nhắc nhở</h3><span class="dnote sp">Email nhắc tự gửi 8:45 sáng mỗi ngày</span></div><div class="card-b rp-pend">
      ${d.pend.map(({u,items})=>`<div class="rp-p ${items.length?'has':''}"><div class="who"><div class="av">${esc(initials(u.name||u.email))}</div><div><b>${esc(u.name||u.email)}</b><div class="dnote">${u.role==='lawyer'?'Luật sư':'Nhân viên'} · ${d.by[u.email].cases} hồ sơ</div></div></div>
        ${items.length?`<ul>${items.slice(0,4).map(({c,why})=>`<li><button class="row-link" data-open="${esc(c.id)}">${esc(c.id)}</button> ${why.map(([k,m])=>`<span class="pill ${k==='bad'?'s-missing':'s-review'}">${esc(m)}</span>`).join(' ')}</li>`).join('')}${items.length>4?`<li class="dnote">+${items.length-4} hồ sơ khác</li>`:''}</ul><button class="btn sm asg-btn" data-remind="${esc(u.email)}">${I('mail',13)}Gửi nhắc nhở</button>`:`<span class="pill s-approved">Không có việc tồn</span>`}</div>`).join('')||'<div class="dnote">Chưa có Nhân viên / Luật sư.</div>'}
    </div></section>
  </div>
  <section class="card"><div class="card-h"><h3>Chi tiết theo người phụ trách</h3><span class="dnote sp">Tệp tải lên &amp; duyệt tính trong ${RP.days} ngày</span></div>
    <div class="tbl-wrap"><table><thead><tr><th>Người phụ trách</th><th class="r">Hồ sơ</th><th class="r">Quá hạn</th><th>Hoàn thiện</th><th class="r">Chờ duyệt</th><th class="r">Còn thiếu</th><th class="r">Tệp tải lên</th><th class="r">Đã duyệt</th></tr></thead><tbody>
    ${rows.map(({u,r})=>`<tr><td><div class="who"><div class="av">${esc(initials(u.name||u.email))}</div><div><b>${esc(u.name||u.email)}</b><div class="dnote">${u.role==='lawyer'?'Luật sư':'Nhân viên'}</div></div></div></td><td class="r num">${r.cases}</td><td class="r num">${r.late?`<span class="count-bad">${r.late}</span>`:'—'}</td><td><div class="rp-bar"><i style="width:${pct(r.approved,r.req)}%"></i></div><div class="dnote num">${pct(r.approved,r.req)}% · ${r.approved}/${r.req}</div></td><td class="r num">${r.review||'—'}</td><td class="r num">${r.missing||'—'}</td><td class="r num">${u.role==='lawyer'?'—':r.uploads}</td><td class="r num">${r.approvals||'—'}</td></tr>`).join('')}
    ${d.none.cases?`<tr><td><b style="color:var(--warn)">Chưa phân công</b></td><td class="r num">${d.none.cases}</td><td class="r num">${d.none.late||'—'}</td><td><div class="rp-bar"><i style="width:${pct(d.none.approved,d.none.req)}%"></i></div><div class="dnote num">${pct(d.none.approved,d.none.req)}%</div></td><td class="r num">${d.none.review||'—'}</td><td class="r num">${d.none.missing||'—'}</td><td class="r">—</td><td class="r">—</td></tr>`:''}
    </tbody></table></div></section>
  <section class="card"><div class="card-h"><h3>Hồ sơ theo bước lộ trình</h3></div><div class="card-b rp-steps">${(()=>{const mx=Math.max(1,...d.steps.map(x=>x.n));return d.steps.map((x,i)=>`<div class="rp-step"><span class="n">${i+1}</span><span class="l">${esc(x.t)}</span><div class="rp-bar big"><i style="width:${Math.round(x.n/mx*100)}%"></i></div><b class="num">${x.n}</b></div>`).join('')})()}</div></section>`;
}
function reportCsv(){
  const d=reportData(),pct=(a,b)=>b?Math.round(a/b*100):0;
  const L=[['Mã hồ sơ','Khách hàng','Công ty','Phụ trách','Tài liệu bắt buộc','Đã duyệt','Chờ duyệt','Còn thiếu','Hạn hoàn thiện','Dự kiến xong','Tình trạng']];
  R.clients.forEach(c=>{const s=stats(c),tm=d.timing.get(c.id);L.push([c.id,c.name||'',c.company||'',assigneesOf(c).map(personName).join(', '),s.req,s.approved,s.review,s.missing,tm.due?fmtDate(new Date(tm.due).toISOString()):'',tm.eta&&!tm.done?fmtDate(new Date(tm.eta).toISOString()):'',tm.label])});
  L.push([]);L.push(['Người phụ trách','Vai trò','Hồ sơ','Quá hạn','Hoàn thiện %','Chờ duyệt','Còn thiếu',`Tệp tải lên ${RP.days} ngày`,`Đã duyệt ${RP.days} ngày`,'Việc tồn']);
  d.people.forEach(u=>{const r=d.by[u.email],p=d.pend.find(x=>x.u===u);L.push([u.name||u.email,u.role==='lawyer'?'Luật sư':'Nhân viên',r.cases,r.late,pct(r.approved,r.req),r.review,r.missing,r.uploads,r.approvals,p?p.items.length:0])});
  const csv='﻿'+L.map(r=>r.map(x=>`"${String(x??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=`Bao-cao-ho-so-${new Date().toISOString().slice(0,10)}.csv`;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-rpdays]');if(b){RP.days=+b.dataset.rpdays;render();return}
  const m=e.target.closest('[data-remind]');if(m){m.disabled=true;const r=await R.sb.rpc('notify_remind',{p_email:m.dataset.remind});m.disabled=false;toast(r.error?(/function|does not exist/i.test(r.error.message)?'Chưa cài phần nhắc nhở trên Supabase (reminders.sql).':dbErr(r.error)):(r.data||'Đã gửi email nhắc nhở'));}
});

/* ---------- chuông thông báo: tệp mới do người khác tải lên ---------- */
/* ---------- đăng nhập & đang online ---------- */
function deviceLabel(){const u=navigator.userAgent||'';const mob=/Mobi|Android|iPhone|iPad/i.test(u);
  const br=/Edg\//.test(u)?'Edge':/OPR\/|Opera/.test(u)?'Opera':/CocCoc|coc_coc/i.test(u)?'Cốc Cốc':/Chrome\//.test(u)?'Chrome':/Firefox\//.test(u)?'Firefox':/Safari\//.test(u)?'Safari':'Trình duyệt khác';
  const os=/iPhone|iPad|iPod/.test(u)?'iOS':/Android/.test(u)?'Android':/Windows/.test(u)?'Windows':/Mac OS X|Macintosh/.test(u)?'macOS':/Linux/.test(u)?'Linux':'';
  return [mob?'Điện thoại':'Máy tính',br,os].filter(Boolean).join(' · ')}
let JUST_LOGGED=false;
async function logLogin(){try{await R.sb.rpc('log_login',{p_kind:JUST_LOGGED?'login':'open',p_device:deviceLabel(),p_ua:(navigator.userAgent||'').slice(0,300)})}catch(_){}JUST_LOGGED=false}
const ONLINE={ch:null,state:{},last:''};
function presenceStart(){
  if(ONLINE.ch||!R.sb||!R.email)return;
  ONLINE.ch=R.sb.channel('idc-online',{config:{presence:{key:R.email}}});
  ONLINE.ch.on('presence',{event:'sync'},()=>{ONLINE.state=ONLINE.ch.presenceState?ONLINE.ch.presenceState():{};renderOlPill();if(R.isAdmin&&S.view==='admin')renderOnline()})
    .subscribe(st=>{if(st==='SUBSCRIBED'){ONLINE.last='';presenceTrack()}});
}
function presenceStop(){if(ONLINE.ch){try{R.sb.removeChannel(ONLINE.ch)}catch(_){}ONLINE.ch=null;ONLINE.state={}}renderOlPill()}
function renderOlPill(){const b=document.getElementById('olpill');if(!b)return;
  if(!R.isAdmin||!R.email){b.hidden=true;return}
  const l=onlineList(),others=l.filter(u=>u.email!==R.email);
  b.hidden=false;const sp=document.getElementById('olpill-t');sp.textContent=`${l.length} đang online`;sp.dataset.n=l.length;
  b.title=l.length?'Đang online: '+l.map(u=>(u.name||personName(u.email))+(u.email===R.email?' (bạn)':'')).join(', ')+' · Bấm để xem nhật ký đăng nhập':'Bấm để xem nhật ký đăng nhập';
  b.classList.toggle('has',others.length>0)}
function presenceTrack(){
  if(!ONLINE.ch||!ONLINE.ch.track)return;
  const view=S.view==='case'&&S.client?S.client:S.view;const key=view+'|'+(document.hidden?'away':'here');if(key===ONLINE.last)return;ONLINE.last=key;
  ONLINE.ch.track({email:R.email,name:R.name||'',role:R.role,view,away:document.hidden,device:deviceLabel(),since:ONLINE.since||(ONLINE.since=new Date().toISOString())}).catch(()=>{});
}
document.addEventListener('visibilitychange',()=>presenceTrack());
function onlineList(){const out=[];Object.values(ONLINE.state||{}).forEach(arr=>{const m=[].concat(arr).sort((a,b)=>String(b.since).localeCompare(String(a.since)))[0];if(m&&m.email)out.push(m)});return out.sort((a,b)=>String(a.name||a.email).localeCompare(String(b.name||b.email)))}
const ROLE_VI={admin:'Quản trị',staff:'Nhân viên',lawyer:'Luật sư'};
const viewLabel=v=>v==='clients'?'Danh sách hồ sơ':v==='admin'?'Quản trị':v==='report'?'Báo cáo':/^L1A|-\d+$/.test(v||'')?'Hồ sơ '+v:(v||'—');
function onlineHTML(){const l=onlineList();
  if(!l.length)return '<div class="dnote">Chưa có ai đang mở portal.</div>';
  return `<div class="ol-list">${l.map(u=>`<div class="ol-item${u.away?' away':''}"><span class="ol-dot" aria-hidden="true"></span><div><b>${esc(u.name||personName(u.email))}${u.email===R.email?' <span class="dnote">(bạn)</span>':''}</b><span>${esc(ROLE_VI[u.role]||'')} · ${u.away?'Đang để portal ở tab khác':'Đang xem '+esc(viewLabel(u.view))}</span><span class="dnote">${esc(u.device||'')} · online từ ${esc(fmtTime(u.since).slice(-5))}</span></div></div>`).join('')}</div>`}
function renderOnline(){const el=document.getElementById('ol-box');if(el)el.innerHTML=onlineHTML();const n=document.getElementById('ol-n');if(n)n.textContent=onlineList().length;
  document.querySelectorAll('[data-olmail]').forEach(td=>{const on=onlineList().find(u=>u.email===td.dataset.olmail);td.innerHTML=on?`<span class="ol-pill on"><i></i>Đang online</span>`:lastSeenHTML(td.dataset.olmail)})}
const lastSeenHTML=e=>{const r=(R.logins||[]).find(x=>String(x.email).toLowerCase()===e);return r?`<span class="ol-pill">${esc(relTime(Date.parse(r.at)))}</span>`:'<span class="dnote">Chưa đăng nhập</span>'};
async function loadLogins(){if(!R.isAdmin)return;const r=await R.sb.from('login_log').select('*').order('at',{ascending:false}).limit(200);R.logins=r.error?null:(r.data||[]);R.loginsErr=r.error?r.error.message:'';if(S.view==='admin')render()}
function loginLive(row){
  if(!row||!row.email)return;row.email=String(row.email).toLowerCase();
  R.logins=[row].concat((R.logins||[]).filter(x=>x.id!==row.id)).slice(0,200);
  if(row.email===R.email)return;
  BELL.logins=[row].concat(BELL.logins.filter(x=>x.id!==row.id)).slice(0,20);renderBell();
  const msg=`${personName(row.email)} vừa ${row.kind==='login'?'đăng nhập':'mở lại'} portal${row.device?' · '+row.device:''}`;
  if(document.hidden&&('Notification' in window)&&Notification.permission==='granted'){try{const n=new Notification('IDC Portal · Đăng nhập',{body:msg,tag:'idc-login-'+row.email});n.onclick=()=>{window.focus();n.close()}}catch(_){}}
  else toast(msg);
  if(S.view==='admin')render();
}
const BELL={items:[],logins:[],seen:0,open:false,names:{},timer:null,poll:null,known:new Set()};
const bellKey=()=>'idc_bell_seen_'+(R.email||'');
function bellReset(){BELL.items=[];BELL.logins=[];BELL.open=false;BELL.known=new Set();clearInterval(BELL.poll);BELL.poll=null;renderBell()}
function bellStart(){
  const meta=(R.session&&R.session.user&&R.session.user.user_metadata)||{};let ls=0;try{ls=Date.parse(localStorage.getItem(bellKey())||'')||0}catch(_){}
  /* lần đầu dùng: coi tệp trong 3 ngày gần nhất là chưa xem */
  BELL.seen=Math.max(Date.parse(meta.bell_seen||'')||0,ls)||Date.now()-3*864e5;
  loadBell(true);clearInterval(BELL.poll);BELL.poll=setInterval(()=>loadBell(),120000);
}
async function loadBell(first){
  if(!R.sb||!R.email)return;
  const since=new Date(Date.now()-30*864e5).toISOString();
  const r=await R.sb.from('files').select('*').gte('created_at',since).order('created_at',{ascending:false}).limit(80);
  if(r.error||!r.data)return;r.data=r.data.filter(x=>!x.deleted_at);
  if(!Object.keys(BELL.names).length){const s=await R.sb.from('staff').select('email,name');(s.data||[]).forEach(u=>{BELL.names[String(u.email).toLowerCase()]=u.name||''})}
  /* gom các tệp cùng người, cùng hồ sơ, cách nhau dưới 15 phút thành 1 dòng */
  const g=[];
  for(const f of r.data){const by=String(f.created_by||'').toLowerCase(),at=Date.parse(f.created_at)||0,last=g[g.length-1];
    if(last&&last.client===f.client_id&&last.by===by&&last.first-at<15*60e3){last.files.push(f);last.first=at}
    else g.push({client:f.client_id,by,at,first:at,files:[f]})}
  const fresh=first?[]:r.data.filter(f=>!BELL.known.has(f.id)&&String(f.created_by||'').toLowerCase()!==R.email);
  r.data.forEach(f=>BELL.known.add(f.id));
  if(R.isAdmin){const lg=await R.sb.from('login_log').select('*').gte('at',new Date(Date.now()-3*864e5).toISOString()).order('at',{ascending:false}).limit(40);if(!lg.error)BELL.logins=(lg.data||[]).map(x=>Object.assign(x,{email:String(x.email).toLowerCase()})).filter(x=>x.email!==R.email).slice(0,20)}
  BELL.items=g.slice(0,30);renderBell();
  if(fresh.length)bellDesktop(fresh);
}
function bellLive(p){
  const ev=p&&p.eventType;if(ev&&ev!=='INSERT'&&ev!=='DELETE')return;
  clearTimeout(BELL.timer);BELL.timer=setTimeout(()=>loadBell(),2500);
}
const bellWho=by=>by===R.email?'Bạn':(BELL.names[by]||(by.split('@')[0])||'Ai đó');
const bellUnread=()=>BELL.items.filter(x=>x.by!==R.email&&x.at>BELL.seen);
const bellLoginUnread=()=>R.isAdmin?BELL.logins.filter(x=>Date.parse(x.at)>BELL.seen):[];
function relTime(t){const s=(Date.now()-t)/1000;if(s<60)return'vừa xong';if(s<3600)return Math.floor(s/60)+' phút trước';if(s<86400)return Math.floor(s/3600)+' giờ trước';if(s<172800)return'hôm qua';return fmtDate(new Date(t).toISOString())}
function bellLine(x){
  const c=getC(x.client),codes=[...new Set(x.files.map(f=>f.code))];
  const docs=codes.slice(0,3).map(k=>k+(DOC[k]?' · '+DOC[k].name:'')).join(', ')+(codes.length>3?` (+${codes.length-3})`:'');
  return `<button type="button" class="bp-item${x.by!==R.email&&x.at>BELL.seen?' un':''}" data-bellopen="${esc(x.client)}"><span class="bp-dot" aria-hidden="true"></span><span class="bp-t"><span><b>${esc(bellWho(x.by))}</b> đã tải ${x.files.length} tệp lên <b>${esc(x.client)}</b>${c&&c.name?' · '+esc(c.name):''}</span><span class="bp-s">${esc(docs)}</span><span class="bp-s">${esc(relTime(x.at))}</span></span></button>`;
}
function bellPermRow(){
  if(!('Notification' in window))return `<div class="bp-perm off">${I('info',15)}<span>Trình duyệt này không hỗ trợ thông báo trên máy tính.</span></div>`;
  const p=Notification.permission;
  if(p==='granted')return `<div class="bp-perm on">${I('check',15)}<span>Thông báo trên máy tính: <b>đang bật</b></span><button type="button" class="bp-link" data-belltest>Gửi thử</button></div>`;
  if(p==='denied')return `<div class="bp-perm off">${I('alert',15)}<span>Trình duyệt đang chặn thông báo. Bấm biểu tượng ổ khoá (bên trái địa chỉ web) → Thông báo → Cho phép, rồi tải lại trang.</span></div>`;
  return `<button type="button" class="bp-perm" data-bellperm>${I('bell',15)}<span>Bật thông báo trên máy tính khi có tệp mới</span><b class="bp-cta">Bật</b></button>`;
}
function bellPanel(){
  const n=bellUnread().length;
  const perm=bellPermRow();
  const lg=R.isAdmin&&BELL.logins.length?`<div class="bp-sec">Đăng nhập gần đây</div><div class="bp-list">${BELL.logins.slice(0,6).map(x=>{const t=Date.parse(x.at);return `<button type="button" class="bp-item${t>BELL.seen?' un':''}" data-go="admin"><span class="bp-dot login" aria-hidden="true"></span><span class="bp-t"><span><b>${esc(personName(x.email))}</b> ${x.kind==='login'?'đã đăng nhập':'mở lại portal'}</span><span class="bp-m">${esc(x.device||'')} · ${relTime(t)}</span></span></button>`}).join('')}</div><div class="bp-sec">Tệp mới</div>`:'';
  return `<div class="bp-h"><b>Thông báo</b><span>${n+bellLoginUnread().length?(n+bellLoginUnread().length)+' mục mới':'Tệp tải lên 30 ngày qua'}</span></div>${perm}${lg}`+
    (BELL.items.length?`<div class="bp-list">${BELL.items.map(bellLine).join('')}</div>`:`<div class="bp-empty">Chưa có tệp nào được tải lên trong 30 ngày qua.</div>`);
}
function renderBell(){
  const b=$('bell');if(!b)return;
  const show=!!(R.email&&R.role&&!R.err);b.hidden=!show;if(!show){$('bell-panel').hidden=true;document.title='IDC Case Portal L-1A';return}
  const n=bellUnread().reduce((a,x)=>a+x.files.length,0)+bellLoginUnread().length,bd=$('bell-n');
  bd.textContent=n>99?'99+':String(n);bd.hidden=!n;
  b.setAttribute('aria-label',n?`Thông báo: ${n} tệp mới`:'Thông báo');b.setAttribute('aria-expanded',String(BELL.open));
  document.title=(n?`(${n}) `:'')+'IDC Case Portal L-1A';
  const pn=$('bell-panel');pn.hidden=!BELL.open;if(BELL.open){pn.innerHTML=bellPanel();pn.style.top=matchMedia('(max-width:640px)').matches?Math.round(b.getBoundingClientRect().bottom+8)+'px':''}
}
function bellMarkSeen(){
  const top=Math.max(BELL.items.length?BELL.items[0].at:0,BELL.logins.length?Date.parse(BELL.logins[0].at)||0:0);BELL.seen=Math.max(top,BELL.seen);const iso=new Date(BELL.seen).toISOString();
  try{localStorage.setItem(bellKey(),iso)}catch(_){}
  if(R.sb&&R.sb.auth.updateUser)R.sb.auth.updateUser({data:{bell_seen:iso}}).catch(()=>{});
}
function toggleBell(open){
  BELL.open=open===undefined?!BELL.open:open;
  if(BELL.open){renderBell();bellMarkSeen();$('bell-n').hidden=true;document.title='IDC Case Portal L-1A'}else renderBell();
}
function bellDesktop(fresh){
  const byClient={};fresh.forEach(f=>{(byClient[f.client_id]=byClient[f.client_id]||[]).push(f)});
  Object.entries(byClient).forEach(([cid,fs])=>{const c=getC(cid),who=bellWho(String(fs[0].created_by||'').toLowerCase());
    const msg=`${who} đã tải ${fs.length} tệp lên ${cid}${c&&c.name?' · '+c.name:''}`;
    if(document.hidden&&('Notification' in window)&&Notification.permission==='granted'){
      try{const n=new Notification('IDC Portal · Tệp mới',{body:msg,tag:'idc-'+cid});n.onclick=()=>{window.focus();bellOpenCase(cid);n.close()}}catch(_){}
    }else toast(msg);
  });
}
function bellOpenCase(cid){toggleBell(false);if(!getC(cid)){toast('Hồ sơ '+cid+' không còn trên portal.');return}
  S.view='case';S.client=cid;S.tab='review';S.q='';$('q').value='';closeDrawer();setHash();render();window.scrollTo(0,0)}
document.addEventListener('click',e=>{
  if(e.target.closest('#bell')){toggleBell();return}
  const it=e.target.closest('[data-bellopen]');if(it){bellOpenCase(it.dataset.bellopen);return}
  if(e.target.closest('[data-bellperm]')){Notification.requestPermission().then(()=>renderBell());return}
  if(e.target.closest('[data-belltest]')){try{const n=new Notification('IDC Portal · Thông báo thử',{body:'Thông báo trên máy tính đang hoạt động. Khi có tệp mới, thông báo sẽ hiện ở đây.',tag:'idc-test'});n.onclick=()=>{window.focus();n.close()}}catch(_){toast('Không gửi được thông báo thử.')}return}
  if(BELL.open&&!e.target.closest('#bellwrap'))toggleBell(false);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&BELL.open){toggleBell(false);$('bell').focus()}});
async function signedUrl(f){
  const k=f.path,c=R.urls[k];if(c&&c.exp>Date.now()+60000)return c.url;
  const r=await R.sb.storage.from(BUCKET).createSignedUrl(f.path,3600);
  if(r.error)throw new Error('Không mở được tệp: '+r.error.message);
  R.urls[k]={url:r.data.signedUrl,exp:Date.now()+3600*1000};return r.data.signedUrl;
}
async function login(email,password){
  JUST_LOGGED=true;
  const r=await R.sb.auth.signInWithPassword({email,password});
  if(r.error)return r.error.message==='Invalid login credentials'?'Email hoặc mật khẩu không đúng.':r.error.message;
  return null;
}
async function logout(){await R.sb.auth.signOut();location.hash=''}
const whoHTML=e=>e?`<span>${esc(String(e).split('@')[0])}</span>`:'—';

/* ---------- writes ---------- */
function dbErr(e){const m=(e&&e.message)||'';if(/row-level security|permission/i.test(m))return'Bạn không có quyền sửa dữ liệu này.';return'Chưa lưu được: '+(m||'lỗi không rõ')+'. Thử lại.'}
async function updateClient(c,patch,logMsg,review){
  if(!(review?R.canReview:R.canWrite)){toast(review?'Bạn đang ở chế độ chỉ xem.':'Chỉ Quản trị hoặc Nhân viên được sửa thông tin hồ sơ.');return false}
  const before=c.step||1;
  const r=await R.sb.rpc('patch_client',{p_id:c.id,p_patch:patch||{},p_log:logMsg||null});
  if(r.error){toast(dbErr(r.error));return false}
  await loadClients();
  const nc=getC(c.id);const after=nc&&(nc.step||1);
  if(nc&&!(patch&&'step' in patch)&&after!==before)setTimeout(()=>toast(`Hồ sơ tự chuyển sang Bước ${after}: ${STEPS[after-1].t}`),900);
  return true;
}
async function setStatus(c,code,s,note){
  const cur=(c.docs||{})[code]||{};
  if((s==='approved'||cur.s==='approved')&&s!==cur.s&&!R.canApprove){toast('Chỉ Luật sư hoặc Quản trị được duyệt / bỏ duyệt tài liệu.');return}
  const ok=await updateClient(c,{docs:{[code]:{s,note:note!==undefined?note:(cur.note||''),at:new Date().toISOString(),by:R.email}}},`${code} → ${ST[s][0]}${note?': '+note:''}`,true);
  if(ok)toast(`${code}: ${ST[s][0]}`);
}
async function saveNote(c,code,note){
  const cur=(c.docs||{})[code]||{};
  if(await updateClient(c,{docs:{[code]:{s:cur.s||'missing',note,at:new Date().toISOString(),by:R.email}}},`${code}: cập nhật ghi chú`,true))toast('Đã lưu ghi chú');
}
const UP={};
const safeName=n=>slug(n.replace(/\.[^.]+$/,'')).slice(0,80)+'.'+(n.split('.').pop()||'pdf').toLowerCase();
async function uploadFiles(c,code,list){
  if(!R.canWrite){toast('Bạn đang ở chế độ chỉ xem.');return}
  const files=[...list];if(!files.length)return;
  UP[code]=true;render();refreshDrawer();let n=0;
  for(const f of files){
    const ext=(f.name.split('.').pop()||'').toLowerCase();
    const type=OK_TYPES[f.type]?f.type:EXT_TYPE[ext];
    if(!type){toast(`${f.name}: chỉ nhận PDF hoặc ảnh (JPG, PNG, WEBP). Hãy lưu Word/Excel thành PDF.`);continue}
    if(f.size>50*1024*1024){toast(`${f.name} lớn hơn 50 MB. Hãy nén hoặc tách tệp.`);continue}
    const path=`${c.id}/${code}/${Date.now()}-${safeName(f.name)}`;
    const up=await R.sb.storage.from(BUCKET).upload(path,f,{contentType:type,upsert:false});
    if(up.error){toast(`Không tải lên được ${f.name}: ${up.error.message}`);continue}
    const ins=await R.sb.from('files').insert({client_id:c.id,code,name:f.name,size:f.size,mime:type,storage_path:path,created_by:R.email});
    if(ins.error){await R.sb.storage.from(BUCKET).remove([path]);toast(`Không lưu được ${f.name}: ${ins.error.message}`);continue}
    n++;
  }
  UP[code]=false;
  if(n){await loadFiles(c.id);const cc=getC(c.id)||c;const s=stOf(cc,code);if(s==='missing'||s==='na')await setStatus(cc,code,'review');else await updateClient(cc,{},`${code}: thêm ${n} tệp`);toast(`Đã lưu ${n} tệp vào ${code}`)}
  render();refreshDrawer();
}
async function deleteFile(c,f){
  if(!R.canWrite)return;
  const d=await R.sb.rpc('trash_file',{p_id:f._id});
  if(d.error){toast(dbErr(d.error));return}
  await loadFiles(c.id);
  const cc=getC(c.id)||c;
  await updateClient(cc,{},`${f.code}: chuyển tệp ${f.name} vào Thùng rác`);
  if(!filesOf(cc,f.code).length&&stOf(cc,f.code)==='review')await setStatus(getC(c.id)||cc,f.code,'missing');
  toast(`Đã chuyển ${f.name} vào Thùng rác · khôi phục được trong 60 ngày`);
  loadTrash();
}
/* ---------- Thùng rác (60 ngày) ---------- */
const TRASH_DAYS=60;
const TR={rows:null,err:'',n:null,busy:false};
const trashLeft=f=>Math.max(0,TRASH_DAYS-Math.floor((Date.now()-Date.parse(f.deleted_at))/864e5));
async function loadTrash(){
  if(!R.sb||!R.canWrite)return;
  const r=await R.sb.from('files').select('*').order('created_at',{ascending:false}).limit(5000);
  if(r.error){TR.err=r.error.message;TR.rows=[];}else{TR.err='';TR.rows=r.data.filter(x=>x.deleted_at).sort((a,b)=>String(b.deleted_at).localeCompare(String(a.deleted_at)))}
  TR.n=TR.rows.length;navs();if(S.view==='trash')render();
}
function vTrash(){
  const rows=TR.rows;const q=S.q.trim().toLowerCase();
  const list=(rows||[]).filter(f=>{if(!q)return true;const c=getC(f.client_id);return (f.name+' '+f.code+' '+f.client_id+' '+((c&&c.name)||'')).toLowerCase().includes(q)});
  const body=rows===null?`<div class="empty"><b>Đang tải…</b></div>`:
    TR.err?`<div class="banner warn" style="margin:16px">${I('alert')}<div>Không đọc được Thùng rác: ${esc(TR.err)}</div></div>`:
    !list.length?`<div class="empty"><b>Thùng rác trống</b>Tệp bị xoá sẽ nằm ở đây ${TRASH_DAYS} ngày trước khi xoá hẳn.</div>`:
    `<div class="tbl-wrap"><table><thead><tr><th>Tệp</th><th>Hồ sơ</th><th>Tài liệu</th><th>Người xoá</th><th>Ngày xoá</th><th class="r">Còn lại</th><th></th></tr></thead><tbody>${list.map(f=>{const c=getC(f.client_id),left=trashLeft(f),d=DOC[f.code];return `<tr>
      <td style="min-width:200px"><div class="dname">${I('file',14)} ${esc(f.name)}</div><div class="dnote">${f.size?(f.size/1048576).toFixed(f.size>1048576?1:2)+' MB · ':''}tải lên ${fmtDate(f.created_at)}${f.created_by?' · '+esc(personName(f.created_by)):''}</div></td>
      <td><button class="row-link" data-open="${esc(f.client_id)}">${esc(f.client_id)}</button><div class="dnote">${esc((c&&c.name)||'')}</div></td>
      <td><span class="mono">${esc(f.code)}</span><div class="dnote">${esc(d?d.name:'')}</div></td>
      <td>${esc(personName(f.deleted_by||''))}</td>
      <td class="num">${fmtTime(f.deleted_at)}</td>
      <td class="r"><span class="pill ${left<=7?'s-missing':left<=20?'s-review':'s-na'}">${left} ngày</span></td>
      <td class="r" style="white-space:nowrap"><button class="btn sm ghost" data-trview="${f.id}">Xem</button> <button class="btn sm addf" data-trrestore="${f.id}">${I('undo',14)}Khôi phục</button>${R.isAdmin?` <button class="btn sm ghost danger-t" data-trpurge="${f.id}" title="Xoá vĩnh viễn ngay, không khôi phục được">${I('trash',14)}</button>`:''}</td></tr>`}).join('')}</tbody></table></div>`;
  $('view').innerHTML=`<div class="phead"><div><div class="eyebrow">Thùng rác</div><h1>Tệp đã xoá</h1><p>Tệp bị xoá được giữ ${TRASH_DAYS} ngày. Trong thời gian đó bấm <b>Khôi phục</b> để đưa tệp về đúng tài liệu cũ. Quá ${TRASH_DAYS} ngày, tệp tự xoá vĩnh viễn.${R.isAdmin?'':' Bạn thấy tệp của các hồ sơ được phân cho mình.'}</p></div></div>
  <section class="card"><div class="card-h"><h3>${rows?list.length:'…'} tệp</h3><span class="sp dnote">${R.isAdmin?'Quản trị: khôi phục mọi tệp, xoá vĩnh viễn ngay bằng nút 🗑.':'Nhân viên: khôi phục tệp của hồ sơ được phân công.'}</span></div>${body}</section>`;
}
async function restoreTrash(id){
  const f=(TR.rows||[]).find(x=>x.id===id);if(!f)return;
  const r=await R.sb.rpc('restore_file',{p_id:id});if(r.error){toast(dbErr(r.error));return}
  const c=getC(f.client_id);
  if(c){await updateClient(c,{},`${f.code}: khôi phục tệp ${f.name} từ Thùng rác`);const cc=getC(f.client_id)||c;if(stOf(cc,f.code)==='missing')await setStatus(cc,f.code,'review')}
  if(R.files[f.client_id])loadFiles(f.client_id);
  toast(`Đã khôi phục ${f.name} về ${f.client_id} · ${f.code}`);loadTrash();
}
let trArmed=null;
async function purgeTrash(ids,silent){
  const rows=(TR.rows||[]).filter(x=>ids.includes(x.id));const paths=rows.map(x=>x.storage_path).filter(Boolean);
  if(paths.length){const rm=await R.sb.storage.from(BUCKET).remove(paths);if(rm.error){if(!silent)toast('Không xoá được tệp gốc: '+rm.error.message);return}}
  const r=await R.sb.rpc('purge_files',{p_ids:ids});if(r.error){if(!silent)toast(dbErr(r.error));return}
  if(!silent)toast('Đã xoá vĩnh viễn '+(rows[0]?rows[0].name:''));loadTrash();
}
async function autoPurge(){
  if(!R.isAdmin)return;const k='idc_purge_'+R.email,today=new Date().toISOString().slice(0,10);
  try{if(localStorage.getItem(k)===today)return}catch(_){}
  const r=await R.sb.rpc('trash_expired');if(r.error||!r.data)return;
  if(r.data.length){const paths=r.data.map(x=>x.storage_path).filter(Boolean);const rm=paths.length?await R.sb.storage.from(BUCKET).remove(paths):{};if(!rm.error)await R.sb.rpc('purge_files',{p_ids:r.data.map(x=>x.id)})}
  try{localStorage.setItem(k,today)}catch(_){}
}
async function createClient(id,data){
  const now=new Date().toISOString();
  const r=await R.sb.from('clients').insert({id,data:Object.assign(data,{program:'L-1A',step:1,docs:defaultDocs(data.opt),pay:{},assignees:R.isAdmin?[]:[R.email]}),log:[{t:now,by:R.email,m:'Tạo hồ sơ'}]});
  if(r.error)return /duplicate/i.test(r.error.message)?'Mã '+id+' đã tồn tại.':dbErr(r.error);
  await loadClients();return null;
}

/* ---------- downloads ---------- */
async function saveFile(filename,data){
  try{const b=data instanceof Blob?data:new Blob([data]);const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);toast('Đã tải xuống '+filename)}catch(_){toast('Trình duyệt chặn tải tệp.')}
}
async function fetchBlob(f){const r=await R.sb.storage.from(BUCKET).download(f.path);if(r.error)throw new Error('Không đọc được '+f.name);return r.data}
const dlName=(c,f)=>{const base=f.name.replace(/\.[^.]+$/,''),ext=(f.name.split('.').pop()||'pdf').toLowerCase();const s=slug(base);return s.toUpperCase().startsWith(f.code)?`${c.id}_${s}.${ext}`:`${c.id}_${f.code}_${s}.${ext}`};
async function downloadFile(c,f){try{toast('Đang chuẩn bị '+f.name+'…');saveFile(dlName(c,f),await fetchBlob(f))}catch(e){toast(e.message)}}
async function zipCase(c){
  if(!window.JSZip){toast('Chưa tải được thư viện ZIP.');return}
  const all=R.files[c.id]||[];if(!all.length){toast('Hồ sơ chưa có tệp nào.');return}
  toast(`Đang đóng gói ${all.length} tệp…`);
  try{const z=new JSZip();const root=z.folder(`${c.id}_${slug(c.name||'')}`);
    const fail=[];
    for(const f of all){const d=DOC[f.code];try{root.folder(GROUPS[d?d.group:'VN'].folder).folder(d?String(DEPTS.findIndex(x=>x.k===deptOf(d))+1).padStart(2,'0')+'_'+DEPT[deptOf(d)].en.replace(/[^A-Za-z]+/g,'-').replace(/-$/,''):'09_Other').file(dlName(c,f).replace(c.id+'_',''),await fetchBlob(f))}catch(_){fail.push(f.code+' – '+f.name)}}
    root.file(`00_Checklist_${c.id}.csv`,checklistCSV(c));
    if(fail.length){root.file('00_KHONG_DOC_DUOC.txt','Các tệp sau không đọc được khi đóng gói:\r\n'+fail.join('\r\n'));toast(`${fail.length} tệp không đọc được, xem 00_KHONG_DOC_DUOC.txt trong ZIP.`)}
    saveFile(`${c.id}_${slug(c.name||'')}_HoSo-L1A.zip`,await z.generateAsync({type:'blob'}))
  }catch(e){toast('Đóng gói thất bại: '+(e.message||e))}
}
const csvCell=v=>`"${String(v??'').replace(/"/g,'""')}"`;

/* ---------- biên bản tiếp nhận hồ sơ (in / lưu PDF) ---------- */
/* khung thông tin dùng chung cho biên bản tiếp nhận và thông báo bổ sung */
const docEd=(v,ph)=>`<span class="ed" contenteditable="true" spellcheck="false" title="Bấm để sửa"${ph?` data-ph="${esc(ph)}"`:''}>${esc(v)}</span>`;
function docInfo(c,today){
  const s=stats(c),step=c.step||1;
  const rows=[['Mã hồ sơ',esc(c.id)],['Đương đơn',esc(c.name||'—')],['Công ty',esc(c.company||'—')],['Mã số doanh nghiệp',esc(c.mst||'—')],['Chương trình','L-1A → EB-1C'],['Văn phòng','IDC VIETNAM'],['Chuyên viên tư vấn',esc(c.staff||'—')],['Bộ phận tiếp nhận',docEd('Phòng Hồ sơ Di trú')],['Người xử lý hồ sơ',docEd('','Bấm để nhập tên')],['Bước hiện tại',`${step}/5 · ${esc(STEPS[step-1].t)}`],['Tài liệu đã nhận',`${s.rcv}/${s.req} tài liệu bắt buộc`],['Ngày lập',today]];
  return `<dl class="info">${rows.map(([k,v])=>`<div><dt>${k}:</dt><dd>${v}</dd></div>`).join('')}</dl>`;
}
/* phần đầu chung cho văn bản in (biên bản, thông báo bổ sung) */
function docHead(title,no){
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" onload="this.rel='stylesheet'">
<style>@page{size:A4;margin:12mm 14mm 14mm}*{box-sizing:border-box;margin:0;padding:0}body{font-family:Montserrat,Arial,sans-serif;font-size:9.5pt;line-height:1.45;color:#14201A;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.hd{display:flex;align-items:center;justify-content:space-between;background:#1B6B1B;border-radius:3mm;padding:3mm 5mm;color:#F5C400}.hd img{height:13mm;display:block}.hd .r{text-align:right;font-weight:800;font-size:13pt;letter-spacing:.06em}.hd .r small{display:block;font-size:7pt;font-weight:600;letter-spacing:.18em;color:#fff;margin-top:.6mm}
.yl{height:1mm;background:#F5C400;margin:1.2mm 0 6mm;border-radius:1mm}
h1{text-align:center;font-size:16pt;font-weight:800;letter-spacing:.02em;color:#14201A}.sub{text-align:center;color:#5B6B60;margin-top:1mm;font-size:9pt}.sub b{color:#1B6B1B}
.info{display:grid;grid-template-columns:1fr 1fr;gap:1.6mm 8mm;margin:6mm 0 5mm;padding:4mm 5mm;border:.6pt solid #D5E4D0;border-radius:2.5mm;background:#F6FAF4}.info div{display:flex;gap:2mm}.info dt{color:#5B6B60;min-width:36mm}.info dd{font-weight:600}
h2{font-size:10.5pt;font-weight:700;color:#1B6B1B;margin:5mm 0 2.4mm;display:flex;justify-content:space-between;align-items:baseline;border-bottom:.8pt solid #1B6B1B;padding-bottom:1.4mm;flex-wrap:wrap;gap:.6mm 4mm}h2 span{font-size:8.5pt;color:#5B6B60;font-weight:500;margin-left:auto;text-align:right}
table{width:100%;border-collapse:collapse;font-size:8.6pt}th{background:#E8F2E5;color:#1B6B1B;font-size:7.2pt;text-transform:uppercase;letter-spacing:.08em;text-align:left;padding:2mm 2mm;border:.5pt solid #D5E4D0}td{padding:1.7mm 2mm;border:.5pt solid #DCE8D7;vertical-align:top}tr{page-break-inside:avoid}
tr.g td{background:#F6FAF4;font-weight:700;font-size:8pt}tr.sg td{background:#fff;font-weight:600;font-size:7.5pt;color:#334155;padding-top:5pt;border-bottom:0.5pt solid #CBD5E1}.c{text-align:center;white-space:nowrap}.m{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:8pt;white-space:nowrap}.en{color:#8A978E;font-size:7.4pt}
.tag{display:inline-block;border-radius:5mm;padding:.3mm 2.2mm;font-size:7.2pt;font-weight:600}.tag.ok{background:#E5F3E9;color:#17663A}.tag.wt{background:#FCF1D3;color:#8A5A00}
ul.miss{columns:2;column-gap:8mm;padding-left:4mm;font-size:8.4pt}ul.miss li{margin-bottom:1mm;break-inside:avoid}ul.miss i{color:#5B6B60}
.ed{outline:none;border-bottom:.8pt dashed #1B6B1B;padding:0 .8mm;font-weight:700;color:#1B6B1B}@media print{.ed{border-bottom:0}.ed:empty::before{content:""}}.ed:empty{display:inline-block;min-width:38mm}.ed:empty::before{content:attr(data-ph);color:#B9A27A;font-weight:500;font-style:italic}
.lt p{margin:0 0 2.4mm}.lt ul{padding-left:5mm;margin:0 0 2mm}.lt li{margin-bottom:1.2mm}.req{font-weight:600}.hint{color:#5B6B60;font-size:7.6pt;margin-top:.6mm}
.sig.one{grid-template-columns:1fr 1fr}.sig.one>div:first-child{visibility:hidden}
.badge{display:block;width:max-content;margin:0 auto 2mm;border-radius:5mm;padding:.8mm 4mm;font-size:7.4pt;font-weight:800;letter-spacing:.14em}.badge.ok{background:#E5F3E9;color:#17663A;border:.6pt solid #B9DCC3}.badge.wt{background:#FEF3C7;color:#92400E;border:.6pt solid #FCD58A}
.tbdoc .yl{background:#E8A317}.tbdoc h1{color:#92400E}.tbdoc .sub b{color:#B45309}.tbdoc .info{background:#FFFBEB;border-color:#FCE3A8}.tbdoc h2{color:#B45309;border-bottom-color:#E8A317}.tbdoc th{background:#FEF3C7;color:#92400E;border-color:#FCE3A8}.tbdoc td{border-color:#F6E7C1}.tbdoc tr.g td{background:#FFFBEB;color:#92400E}.tbdoc .req{color:#92400E}.tbdoc .ed{color:#B45309;border-bottom-color:#B45309}.tbdoc .ft{border-top-color:#E8A317}.tbdoc .ft b{color:#B45309}
.note{margin-top:5mm;padding:3.4mm 4.5mm;border-left:1mm solid #F5C400;background:#FDF6DA;border-radius:0 2mm 2mm 0;font-size:8.6pt}
.sig{display:grid;grid-template-columns:1fr 1fr;gap:12mm;margin-top:8mm;text-align:center;page-break-inside:avoid}.sig b{display:block;font-size:9pt}.sig span{display:block;color:#5B6B60;font-size:8pt;font-style:italic}.sig .ln{height:24mm}.sig .nm{font-weight:700}
.ft{margin-top:8mm;border-top:.8pt solid #F5C400;padding-top:1.6mm;font-size:6.8pt;color:#5B6B60;display:flex;justify-content:space-between;gap:4mm}.ft b{color:#1B6B1B}
.bar{position:fixed;top:8px;right:8px;display:flex;gap:6px}.bar button{font:600 13px Montserrat,Arial;padding:8px 14px;border-radius:8px;border:1px solid #1B6B1B;background:#1B6B1B;color:#fff;cursor:pointer}.bar button.s{background:#fff;color:#1B6B1B}@media print{.bar{display:none}}#doc.editing{outline:2px dashed #E8A317;outline-offset:3mm}#doc.editing *:focus{outline:1px solid #E8A317;background:#FFFBEB}#doc{width:182mm}body.exp{box-shadow:none}
@media screen{body{max-width:210mm;margin:16px auto;padding:14mm;background:#fff;box-shadow:0 2px 14px rgba(0,0,0,.12)}html{background:#EEF2EC}}</style></head><body>
<div class="bar"><button class="s" id="edit" title="Sửa trực tiếp mọi chữ trên văn bản trước khi tải">Sửa nội dung</button><button id="dl">Tải file PDF</button><button class="s" id="word" title="Tải bản Word để chỉnh sửa tiếp trong Word / Google Docs">Tải file Word</button><button class="s" onclick="print()">In</button><button class="s" onclick="close()">Đóng</button></div>
<div id="doc" data-no="${no}"><div class="hd"><img src="${location.origin}/logo-idc.jpg" alt="IDC VIETNAM"><div class="r">IDC VIETNAM<small>SHAPE YOUR FUTURE</small></div></div><div class="yl"></div>
`;
}

function receiptHTML(c){
  const now=new Date(),p=n=>String(n).padStart(2,'0'),today=`${p(now.getDate())}/${p(now.getMonth()+1)}/${now.getFullYear()}`;
  const no=`BB-${c.id}-${now.getFullYear()}${p(now.getMonth()+1)}${p(now.getDate())}`;
  const s=stats(c),got=DOCS.filter(d=>isRcv(c,d.code)),miss=DOCS.filter(d=>stOf(c,d.code)==='missing');
  let i=0;
  const rows=Object.keys(GROUPS).map(g=>{const l=got.filter(d=>d.group===g);if(!l.length)return'';return `<tr class="g"><td colspan="6">${esc(GROUPS[g].full)}</td></tr>`+byDept(l).map(([x,dl])=>`<tr class="sg"><td colspan="6"><span style="color:${x.c}">■</span> ${x.t} <span class="en">· ${x.en}</span></td></tr>`+dl.map(d=>{const st=stOf(c,d.code);return `<tr><td class="c">${++i}</td><td class="m">${d.code}</td><td>${esc(d.name)}<div class="en">${esc(d.en)}</div></td><td class="c">${filesOf(c,d.code).length||'—'}</td><td class="c">${fmtDate(rcvDate(c,d.code))||'—'}</td><td class="c"><span class="tag ${st==='approved'?'ok':'wt'}">${st==='approved'?'Đã kiểm tra':'Đang kiểm tra'}</span></td></tr>`}).join('')).join('')}).join('');
  const missList=miss.map(d=>`<li><b>${d.code}</b> – ${esc(d.name)}${((c.docs||{})[d.code]||{}).note?` <i>(${esc(c.docs[d.code].note)})</i>`:''}</li>`).join('');
  return docHead(`Biên bản tiếp nhận ${c.id}`,no)+`<span class="badge ok">✓ XÁC NHẬN ĐÃ TIẾP NHẬN</span><h1>BIÊN BẢN TIẾP NHẬN HỒ SƠ</h1><div class="sub">Số: <b>${no}</b> · Chương trình L-1A → EB-1C</div>
${docInfo(c,today)}
<h2>I. Tài liệu IDC VIETNAM đã nhận <span>${s.rcv}/${s.req} tài liệu bắt buộc · ${s.approved} đã kiểm tra, ${s.review} đang kiểm tra</span></h2>
${got.length?`<table><thead><tr><th class="c" style="width:9mm">STT</th><th style="width:17mm">Mã</th><th>Tên tài liệu</th><th class="c" style="width:14mm">Số tệp</th><th class="c" style="width:23mm">Ngày nhận</th><th class="c" style="width:27mm">Tình trạng</th></tr></thead><tbody>${rows}</tbody></table>`:'<p>Chưa có tài liệu nào được tiếp nhận.</p>'}
${miss.length?`<h2>II. Tài liệu cần bổ sung <span>${miss.length} tài liệu</span></h2><ul class="miss">${missList}</ul>`:`<h2>II. Tài liệu cần bổ sung <span>Không còn</span></h2><p>Khách hàng đã nộp đủ tài liệu bắt buộc.</p>`}
<div class="note">IDC VIETNAM xác nhận đã tiếp nhận các tài liệu nêu tại Mục I dưới dạng bản scan/điện tử vào ngày ghi ở cột "Ngày nhận". Việc tiếp nhận chưa phải là xác nhận tài liệu đã đạt yêu cầu; tài liệu "Đang kiểm tra" có thể được yêu cầu bổ sung hoặc chỉnh sửa theo ý kiến của luật sư. Biên bản được lập thành 02 bản, mỗi bên giữ 01 bản.</div>
<div class="sig"><div><b>ĐẠI DIỆN KHÁCH HÀNG</b><span>(Ký và ghi rõ họ tên)</span><div class="ln"></div><div class="nm">${esc(c.name||'')}</div></div><div><b>ĐẠI DIỆN IDC VIETNAM</b><span>(Ký và ghi rõ họ tên)</span><div class="ln"></div><div class="nm">${esc(c.staff||'')}</div></div></div>
<div class="ft"><span><b>IDC VIETNAM</b> · 222 Nguyễn Đình Chính, P. Phú Nhuận, TP.HCM · Hotline 0934 198 818 – 0903 375 111</span><span>www.ditruidc.com · ${no}</span></div></div>
</body></html>`;
}

/* ---------- thông báo yêu cầu bổ sung hồ sơ (gửi khách) ---------- */
function noticeHTML(c){
  const now=new Date(),p=n=>String(n).padStart(2,'0'),dd=d=>`${p(d.getDate())}/${p(d.getMonth()+1)}/${d.getFullYear()}`,today=dd(now);
  const due=new Date(now.getTime()+14*864e5);
  const no=`TB-${c.id}-${now.getFullYear()}${p(now.getMonth()+1)}${p(now.getDate())}`;
  const s=stats(c),miss=DOCS.filter(d=>stOf(c,d.code)==='missing');
  let i=0;
  const rows=Object.keys(GROUPS).map(g=>{const l=miss.filter(d=>d.group===g);if(!l.length)return'';return `<tr class="g"><td colspan="4">${esc(GROUPS[g].full)}</td></tr>`+byDept(l).map(([x,dl])=>`<tr class="sg"><td colspan="4"><span style="color:${x.c}">■</span> ${x.t} <span class="en">· ${x.en}</span></td></tr>`+dl.map(d=>{const cn=((c.docs||{})[d.code]||{}).note||'';const hint=[d.period,d.note].filter(Boolean).join(' · ');return `<tr><td class="c">${++i}</td><td class="m">${d.code}</td><td>${esc(d.name)}<div class="en">${esc(d.en)}</div></td><td>${cn?`<div class="req">${esc(cn)}</div>`:''}${hint?`<div class="hint">${esc(hint)}</div>`:''}${!cn&&!hint?'—':''}</td></tr>`}).join('')).join('')}).join('');
  const city='TP.HCM';
  return docHead(`Thông báo bổ sung ${c.id}`,no).replace('<div id="doc"','<div id="doc" class="tbdoc"')+`<span class="badge wt">! CẦN BỔ SUNG TÀI LIỆU</span><h1>THÔNG BÁO YÊU CẦU BỔ SUNG HỒ SƠ</h1><div class="sub">Số: <b>${no}</b> · Chương trình L-1A → EB-1C</div>
${docInfo(c,today)}
<div class="lt"><p>Kính gửi: Ông/Bà <b>${esc(c.name||'')}</b>${c.company?' – '+esc(c.company):''}</p>
<p>IDC VIETNAM trân trọng cảm ơn Quý khách đã tin tưởng đồng hành cùng chúng tôi trong chương trình L-1A → EB-1C. Tính đến ngày ${today}, IDC VIETNAM đã tiếp nhận <b>${s.rcv}/${s.req}</b> tài liệu bắt buộc của hồ sơ <b>${esc(c.id)}</b>.</p>
${miss.length?`<p>Để bảo đảm tiến độ chuẩn bị và nộp hồ sơ, IDC VIETNAM kính đề nghị Quý khách bổ sung <b>${miss.length} tài liệu</b> dưới đây trước ngày <span class="ed" contenteditable="true" spellcheck="false" title="Bấm để sửa hạn nộp">${dd(due)}</span>.</p></div>
<h2>I. Danh sách tài liệu cần bổ sung <span>${miss.length} tài liệu</span></h2>
<table><thead><tr><th class="c" style="width:9mm">STT</th><th style="width:17mm">Mã</th><th style="width:66mm">Tên tài liệu</th><th>Yêu cầu / lưu ý</th></tr></thead><tbody>${rows}</tbody></table>`:`<p>Hồ sơ hiện <b>đã đủ</b> các tài liệu bắt buộc. IDC VIETNAM sẽ liên hệ nếu luật sư cần Quý khách bổ sung hoặc chỉnh sửa thêm.</p></div>`}
<h2>${miss.length?'II. ':''}Hướng dẫn gửi tài liệu</h2>
<div class="lt"><ul>
<li>Gửi <b>bản scan màu, rõ nét, đủ tất cả các trang</b> (PDF hoặc ảnh JPG/PNG); mỗi tài liệu một tệp, tên tệp ghi kèm mã tài liệu (ví dụ: <i>VN-01_Giay-phep-kinh-doanh.pdf</i>).</li>
<li>Gửi cho người xử lý hồ sơ (Phòng Hồ sơ Di trú) hoặc chuyên viên tư vấn${c.staff?` <b>${esc(c.staff)}</b>`:''} qua email hoặc Zalo.</li>
<li>Bản gốc hoặc bản sao công chứng chỉ cần gửi khi IDC VIETNAM có yêu cầu riêng.</li>
<li>Trường hợp không có tài liệu hoặc tài liệu khác mẫu yêu cầu, Quý khách vui lòng liên hệ chuyên viên để được hướng dẫn phương án thay thế.</li>
</ul></div>
<div class="note">Việc bổ sung chậm hoặc thiếu tài liệu có thể ảnh hưởng đến thời gian hoàn thiện và nộp hồ sơ. Sau khi nhận đủ, IDC VIETNAM sẽ kiểm tra và gửi Quý khách Biên bản tiếp nhận hồ sơ cập nhật. Trân trọng cảm ơn sự hợp tác của Quý khách.</div>
<div class="sig one"><div></div><div><span style="font-style:normal;color:#14201A">${esc(city)}, ngày ${p(now.getDate())} tháng ${p(now.getMonth()+1)} năm ${now.getFullYear()}</span><b style="margin-top:1.4mm">ĐẠI DIỆN IDC VIETNAM</b><span>Người xử lý hồ sơ · (Ký và ghi rõ họ tên)</span><div class="ln"></div><div class="nm">${docEd('','Bấm để nhập tên')}</div></div></div>
<div class="ft"><span><b>IDC VIETNAM</b> · 222 Nguyễn Đình Chính, P. Phú Nhuận, TP.HCM · Hotline 0934 198 818 – 0903 375 111</span><span>www.ditruidc.com · ${no}</span></div></div>
</body></html>`;
}
window.receiptFor=(id,type)=>{const c=getC(id);return c?(type==='tb'?noticeHTML(c):receiptHTML(c)):null};
function openReceipt(c,type){const w=window.open('/bienban.html?id='+encodeURIComponent(c.id)+(type?'&type='+type:''),'_blank');if(!w)toast('Trình duyệt chặn cửa sổ mới. Hãy cho phép popup cho trang này.')}
function checklistCSV(c){return '\ufeff'+[['Mã','Tài liệu','Nhóm','Nhóm hồ sơ','Trạng thái','Ghi chú','Tệp'].map(csvCell).join(','),...DOCS.map(d=>[d.code,d.name,GROUPS[d.group].short,DEPT[deptOf(d)].t,ST[stOf(c,d.code)][0],((c.docs||{})[d.code]||{}).note||'',filesOf(c,d.code).map(f=>f.name).join(' | ')].map(csvCell).join(','))].join('\r\n')}
async function exportExcel(){
  if(!window.XLSX){toast('Chưa tải được thư viện Excel.');return}
  const kh=[['Mã HS','Đương đơn','Công ty VN','Tên công ty (EN)','Mã số DN','Ngành','Văn phòng','Phương án','Bước','Chuyên viên','Ngày mở','Người phụ thuộc','Pháp nhân tại Mỹ','Bang','Địa chỉ tại Mỹ','Công ty nước khác','Quốc gia','Địa chỉ công ty nước khác','Vốn điều lệ','Đăng ký DN','Chủ sở hữu / thành viên','Trụ sở','Ghi chú','Đã thu (USD)','Đã nhận','Đã duyệt','Chờ duyệt','Còn thiếu','Cập nhật']];
  const ck=[['Mã HS','Mã TL','Tài liệu','Nhóm','Trạng thái','Ghi chú','Số tệp','Cập nhật']];
  const tt=[['Mã HS','Đợt','Thời điểm','Số tiền (USD)','Đã thu (USD)']];
  R.clients.forEach(c=>{const s=stats(c);
    kh.push([c.id,c.name,c.company,c.companyEn,c.mst,c.industry,'IDC VIETNAM',c.opt,c.step,c.staff,c.opened,c.deps,c.us,stateLabel(c.state),usAddrOf(c),c.otherCo,c.otherCountry,c.otherAddr,c.charter,c.reg,c.owners,c.addr,c.note,paidOf(c),s.rcv,s.approved,s.review,s.missing,fmtTime(c.updatedAt)]);
    DOCS.forEach(d=>{const x=(c.docs||{})[d.code]||{};ck.push([c.id,d.code,d.name,GROUPS[d.group].short,ST[stOf(c,d.code)][0],x.note||'',(R.files[c.id]||[]).filter(f=>f.code===d.code).length||'',fmtTime(x.at)])});
    PAY.forEach(p=>tt.push([c.id,p.n,p.w,p.a,+((c.pay||{})[p.k])||0]));
  });
  const wb=XLSX.utils.book_new();
  [['KHACH_HANG',kh],['CHECKLIST',ck],['THANH_TOAN',tt]].forEach(([n,a])=>XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(a),n));
  const d=new Date(),p=n=>String(n).padStart(2,'0');
  saveFile(`IDC_HoSo_L1A_${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}.xlsx`,new Blob([XLSX.write(wb,{type:'array',bookType:'xlsx'})]));
}
function emailText(c){
  const miss=DOCS.filter(d=>stOf(c,d.code)==='missing');
  const byG=Object.keys(GROUPS).map(g=>{const l=miss.filter(d=>d.group===g);return l.length?`${GROUPS[g].full}:\n`+l.map(d=>`  • ${d.code} – ${d.name}${d.period?' ('+d.period+')':''}${((c.docs||{})[d.code]||{}).note?' – '+c.docs[d.code].note:''}`).join('\n'):''}).filter(Boolean).join('\n\n');
  const got=DOCS.filter(d=>isRcv(c,d.code));
  const gotTxt=Object.keys(GROUPS).map(g=>{const l=got.filter(d=>d.group===g);return l.length?`${GROUPS[g].full}:\n`+l.map(d=>{const dt=fmtDate(rcvDate(c,d.code));return `  ✓ ${d.code} – ${d.name}${dt?' (nhận '+dt+')':''}`}).join('\n'):''}).filter(Boolean).join('\n\n');
  const first=String(c.name||'').split(' ').slice(-1)[0];
  return `Kính gửi Anh/Chị ${first},

IDC VIETNAM cập nhật tình trạng hồ sơ ${c.id} (L-1A → EB-1C). Hồ sơ đang ở bước ${c.step||1}/5: ${STEPS[(c.step||1)-1].t}.

${got.length?`IDC VIETNAM đã nhận ${got.length} tài liệu:\n\n${gotTxt}\n\n`:''}${miss.length?`Để luật sư kịp thẩm định, Anh/Chị vui lòng bổ sung ${miss.length} tài liệu sau:\n\n${byG}`:'Toàn bộ tài liệu bắt buộc đã đủ. Cảm ơn Anh/Chị đã phối hợp.'}

Lưu ý khi gửi:
  • Tất cả tài liệu cần bản dịch tiếng Anh kèm bản gốc.
  • Bản scan thẳng, rõ nét, định dạng PDF; đặt tên theo mã tài liệu (ví dụ ${c.id}_VN-01_Giay-phep-kinh-doanh.pdf).

Nếu cần hỗ trợ, Anh/Chị liên hệ chuyên viên ${c.staff||'phụ trách'} – văn phòng IDC VIETNAM.

Trân trọng,
${c.staff||'IDC VIETNAM'}
IDC VIETNAM`;
}

/* ---------- rendering ---------- */
function navs(){
  const n=R.clients.length,logged=!!R.email&&!R.err;
  $('nav-main').innerHTML=logged?`<button data-go="clients" aria-current="${S.view!=='admin'&&S.view!=='report'&&S.view!=='trash'}">${I('users')}Hồ sơ khách hàng<span class="ct">${n}</span></button>`+(R.isAdmin?`<button data-go="report" aria-current="${S.view==='report'}">${I('chart')}Báo cáo</button><button data-go="admin" aria-current="${S.view==='admin'}">${I('edit')}Quản trị</button>`:'')+(R.canWrite?`<button data-go="trash" aria-current="${S.view==='trash'}">${I('trash')}Thùng rác${TR.n?`<span class="ct">${TR.n}</span>`:''}</button>`:''):'';
  $('nav-prog').innerHTML=`<button data-go="clients" aria-current="false">${I('folder')}L-1A → EB-1C<span class="ct">${logged?n:''}</span></button>`+['EB-5','E-2','Du học Mỹ'].map(p=>`<button disabled>${I('folder')}${p}<span class="soon">Sắp có</span></button>`).join('');
  $('nav-mobile').innerHTML=`<div class="logo">IDC</div>`+(logged?`<button class="chip" data-go="clients" aria-pressed="${S.view!=='admin'&&S.view!=='report'}">Hồ sơ</button>${R.isAdmin?`<button class="chip" data-go="report" aria-pressed="${S.view==='report'}">Báo cáo</button><button class="chip" data-go="admin" aria-pressed="${S.view==='admin'}">Quản trị</button>`:''}<button class="chip" data-act="logout">Đăng xuất</button>`:'');
  $('side-foot').innerHTML=R.email?`<div class="dotline"><span class="dot ${R.err?'bad':'ok'}"></span><b>${esc(R.email)}</b></div><span>${R.isAdmin?'Quản trị viên':R.role==='lawyer'?'Luật sư · xem & duyệt tài liệu':R.canWrite?'Nhân viên · được chỉnh sửa':'Chỉ xem'}</span><button class="btn sm" data-act="logout" style="margin-top:6px">Đăng xuất</button>`:`<div class="dotline"><span class="dot warn"></span><b>Chưa đăng nhập</b></div><span>Chỉ nhân viên IDC VIETNAM được cấp tài khoản mới truy cập được.</span>`;
}
function crumbs(){
  const c=S.client&&getC(S.client);
  $('crumbs').innerHTML=`<span>Hồ sơ định cư</span><span class="sep">/</span>`+(S.view==='case'&&c?`<button class="row-link" data-go="clients" style="font-weight:500;color:var(--muted)">L-1A → EB-1C</button><span class="sep">/</span><b class="mono">${esc(c.id)}</b>`:`<b>L-1A → EB-1C</b>`);
}
function render(){presenceTrack();navs();crumbs();if(R.ready&&!R.email&&R.sb){vLogin();return}if(R.err&&R.ready){$('view').innerHTML=vEmpty();return}if(S.view==='admin'&&R.isAdmin){vAdmin();return}if(S.view==='report'&&R.isAdmin){vReport();return}if(S.view==='trash'&&R.canWrite){vTrash();return}if(S.view==='case'&&getC(S.client))vCase();else{if(S.view==='case'&&R.ready&&R.clients.length&&!getC(S.client)){S.view='clients'}vClients()}}

function vEmpty(){
  if(!R.ready)return `<div class="card empty"><b>Đang tải dữ liệu…</b></div>`;
  if(R.err&&R.err.code==='not_staff')return `<div class="card empty"><b>Tài khoản chưa được cấp quyền</b>${esc(R.email)} chưa có trong danh sách nhân viên. Liên hệ quản trị viên để được thêm.<div style="margin-top:14px"><button class="btn" data-act="logout">Đăng xuất</button></div></div>`;
  if(R.err)return `<div class="card empty"><b>Không đọc được dữ liệu</b>${esc(R.err.message||'')}</div>`;
  return `<div class="card empty"><b>Chưa có hồ sơ nào</b>Bấm “Thêm hồ sơ” để tạo hồ sơ khách hàng đầu tiên.${R.canWrite?`<div style="margin-top:14px"><button class="btn primary" data-act="newClient">${I('plus')}Thêm hồ sơ</button></div>`:''}</div>`;
}
function vLogin(){
  $('view').innerHTML=`<section class="card" style="max-width:420px;margin:48px auto 0;width:100%"><div class="card-b" style="padding:28px">
    <div class="brand" style="padding:0;margin-bottom:18px"><div class="logo">IDC</div><div><b>IDC VIETNAM</b><span>Cổng hồ sơ định cư</span></div></div>
    <h1 style="font-size:20px;font-weight:700;margin-bottom:4px">Đăng nhập</h1><p class="muted" style="margin:0 0 18px">Dùng tài khoản nhân viên được quản trị viên cấp.</p>
    <form id="loginform" class="form" style="grid-template-columns:1fr">
      <div class="fld"><label for="l-email">Email</label><input id="l-email" type="email" autocomplete="username" required></div>
      <div class="fld"><label for="l-pass">Mật khẩu</label><input id="l-pass" type="password" autocomplete="current-password" required></div>
      <div id="l-err" class="dnote" style="color:var(--bad)"></div>
      <button class="btn primary" type="submit" id="l-btn">Đăng nhập</button>
    </form></div></section>`;
}
function vAdmin(){setTimeout(renderOnline,0);
  const groupSel=v=>`<select data-k="group">${Object.keys(GROUPS).map(g=>`<option value="${g}" ${g===v?'selected':''}>${GROUPS[g].short}</option>`).join('')}</select>`;
  const inp=(k,v,w)=>`<input data-k="${k}" value="${esc(v)}" style="width:${w||'100%'}">`;
  $('view').innerHTML=`
  <div class="phead"><div><div class="eyebrow">Quản trị</div><h1>Cấu hình portal</h1><p>Quản lý nhân viên được đăng nhập, danh mục tài liệu, các bước lộ trình và mức phí của chương trình L-1A → EB-1C.</p></div></div>
  ${loginCard()}
  <section class="card"><div class="card-h"><h3>Nhân viên</h3><span class="sp dnote">Tạo mật khẩu cho nhân viên trong Supabase → Authentication → Add user, rồi thêm email tại đây.</span></div>
    <div class="tbl-wrap"><table><thead><tr><th>Email</th><th>Hoạt động</th><th>Tên</th><th>Quyền</th>${R.notify?'<th>Nhận thông báo</th><th>Zalo chat ID</th>':''}<th></th></tr></thead><tbody id="staffrows">${R.staff.map(u=>`<tr><td>${esc(u.email)}</td><td data-olmail="${esc(String(u.email).toLowerCase())}"></td><td><input data-staffname="${esc(u.email)}" value="${esc(u.name||'')}" placeholder="Nhập tên" style="width:170px;border:1px solid var(--border-strong);border-radius:7px;padding:4px 8px;background:var(--bg)" aria-label="Tên của ${esc(u.email)}"></td><td><select data-staffrole="${esc(u.email)}">${[['admin','Quản trị'],['lawyer','Luật sư'],['staff','Nhân viên']].map(([k,l])=>`<option value="${k}" ${u.role===k?'selected':''}>${l}</option>`).join('')}</select></td>${R.notify?`<td><label style="display:flex;gap:6px;align-items:center"><input type="checkbox" data-staffnotify="${esc(u.email)}" ${u.notify!==false?'checked':''}>Nhận</label></td><td><input data-staffzalo="${esc(u.email)}" value="${esc(u.zalo_chat_id||'')}" placeholder="—" style="width:150px;border:1px solid var(--border-strong);border-radius:7px;padding:4px 8px;background:var(--bg)" aria-label="Zalo chat ID của ${esc(u.email)}"></td>`:''}<td class="r">${u.email===R.email?'<span class="dnote">Bạn</span>':`<button class="btn sm ghost danger" data-staffdel="${esc(u.email)}">Gỡ</button>`}</td></tr>`).join('')}</tbody></table></div>
    <form id="staffform" class="card-b" style="display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid var(--border)"><input id="s-email" type="email" placeholder="email@congty.com" required style="flex:1 1 220px;border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><input id="s-name" placeholder="Tên hiển thị" style="flex:1 1 160px;border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><select id="s-role" style="border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><option value="staff">Nhân viên</option><option value="lawyer">Luật sư</option><option value="admin">Quản trị</option></select><button class="btn primary" type="submit">${I('plus')}Thêm nhân viên</button></form>
  </section>
  ${notifyCard()}
  <section class="card"><div class="card-h"><h3>Danh mục tài liệu</h3><div class="sp"><button class="btn sm" data-act="addDoc">${I('plus',14)}Thêm tài liệu</button></div></div>
    <div class="tbl-wrap"><table class="cfg"><thead><tr><th>Mã</th><th>Nhóm</th><th>Tên tài liệu</th><th>Tên tiếng Anh</th><th>Phân loại</th><th>Yêu cầu</th><th>Kỳ dữ liệu</th><th title="Chỉ áp dụng khi công ty Mỹ đang hoạt động (phương án B)">Chỉ PA B</th><th></th></tr></thead><tbody id="docrows">${DOCS.map((d,i)=>`<tr data-i="${i}"><td>${inp('code',d.code,'72px')}</td><td>${groupSel(d.group)}</td><td>${inp('name',d.name,'220px')}</td><td>${inp('en',d.en,'180px')}</td><td>${inp('cat',d.cat,'96px')}</td><td>${inp('note',d.note,'220px')}</td><td>${inp('period',d.period,'130px')}</td><td><input type="checkbox" data-k="op" ${d.op?'checked':''}></td><td><button class="icon-btn" data-docdel="${i}" aria-label="Xoá ${esc(d.code)}">${I('trash')}</button></td></tr>`).join('')}</tbody></table></div></section>
  <div class="two">
    <section class="card"><div class="card-h"><h3>Lộ trình 5 bước</h3></div><div class="tbl-wrap"><table><tbody id="steprows">${STEPS.map((x,i)=>`<tr><td class="mono">${i+1}</td><td><input data-k="t" value="${esc(x.t)}" style="width:100%"></td><td><input data-k="d" value="${esc(x.d)}" style="width:120px"></td></tr>`).join('')}</tbody></table></div></section>
    <section class="card"><div class="card-h"><h3>Các đợt thanh toán (USD)</h3></div><div class="tbl-wrap"><table><tbody id="payrows">${PAY.map(p=>`<tr data-k="${p.k}"><td><input data-k="n" value="${esc(p.n)}" style="width:70px"></td><td><input data-k="w" value="${esc(p.w)}" style="width:100%"></td><td><input data-k="a" value="${p.a}" style="width:90px;text-align:right" inputmode="numeric"></td></tr>`).join('')}</tbody></table></div></section>
  </div>
  <div style="display:flex;gap:8px"><button class="btn primary" data-act="saveProgram">${I('check')}Lưu cấu hình</button><button class="btn" data-act="exportExcel">${I('sheet')}Xuất toàn bộ dữ liệu (Excel)</button></div>`;
}
function loginCard(){
  const L=R.logins;const f=S.lgf||'';const rows=(L||[]).filter(x=>!f||String(x.email).toLowerCase()===f).slice(0,60);
  const ppl=[...new Set((L||[]).map(x=>String(x.email).toLowerCase()))];
  const body=L===null?`<div class="banner warn">${I('alert')}<div>Chưa cài nhật ký đăng nhập trên Supabase. Chạy tệp <b>supabase/logins.sql</b> rồi tải lại trang.${R.loginsErr?` <span class="dnote">(${esc(R.loginsErr)})</span>`:''}</div></div>`:
    `<div class="lg-head"><label for="lg-f" class="dnote">Lọc theo người</label><select id="lg-f"><option value="">Tất cả</option>${ppl.map(e=>`<option value="${esc(e)}" ${f===e?'selected':''}>${esc(personName(e))}</option>`).join('')}</select><span class="dnote">${rows.length} lần gần nhất · lưu 180 ngày</span></div>
     <div class="tbl-wrap"><table><thead><tr><th>Thời gian</th><th>Người</th><th>Quyền</th><th>Hình thức</th><th>Thiết bị</th></tr></thead><tbody>${rows.length?rows.map(x=>{const e=String(x.email).toLowerCase();const u=(R.people||[]).find(p=>p.email===e);return `<tr><td class="num">${fmtTime(x.at)}<div class="dnote">${relTime(Date.parse(x.at))}</div></td><td><b>${esc(personName(e))}</b><div class="dnote">${esc(e)}</div></td><td>${esc(ROLE_VI[u&&u.role]||'—')}</td><td><span class="pill ${x.kind==='login'?'s-approved':'s-na'}">${x.kind==='login'?'Đăng nhập':'Mở lại portal'}</span></td><td class="dnote">${esc(x.device||'—')}</td></tr>`}).join(''):`<tr><td colspan="5" class="dnote">Chưa có lượt đăng nhập nào được ghi lại.</td></tr>`}</tbody></table></div>`;
  return `<section class="card"><div class="card-h"><h3>Ai đang online · Nhật ký đăng nhập</h3><span class="sp dnote">Có người đăng nhập, chuông 🔔 của Quản trị sẽ báo ngay. Email chỉ gửi khi lần đầu đăng nhập, thiết bị lạ hoặc ngoài giờ (22:00–6:00).</span></div>
    <div class="card-b lg-grid"><div><h4 class="lg-t">Đang online <span class="ol-count" id="ol-n">${onlineList().length}</span></h4><div id="ol-box">${onlineHTML()}</div></div><div><h4 class="lg-t">Lượt đăng nhập</h4>${body}</div></div></section>`;
}
function notifyCard(){
  const n=R.notify;
  const head=`<div class="card-h"><h3>Thông báo tệp mới</h3><span class="sp dnote">Báo cho mọi người trên portal khi có tệp mới (5–8 phút) và tổng hợp lúc 17:00.</span></div>`;
  if(!n)return `<section class="card">${head}<div class="card-b"><div class="banner warn">${I('alert')}<div>Chưa cài phần gửi thông báo trên Supabase. Làm theo hướng dẫn <b>HUONG_DAN_THONG_BAO.md</b> (chạy tệp <b>supabase/notify.sql</b>), sau đó tải lại trang.</div></div></div></section>`;
  const on=R.staff.filter(u=>u.notify!==false),zl=on.filter(u=>u.zalo_chat_id);
  const ta=(id,v,ph)=>`<textarea id="${id}" rows="2" placeholder="${ph}" style="width:100%">${esc((v||[]).join(', '))}</textarea>`;
  const ck=(id,v,l)=>`<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="${id}" ${v?'checked':''}>${l}</label>`;
  return `<section class="card">${head}<div class="card-b" style="display:grid;gap:14px">
    <div style="display:flex;gap:22px;flex-wrap:wrap;font-weight:600">${ck('n-on',n.enabled,'Bật thông báo')}${ck('n-email',n.email!==false,'Gửi qua email')}${ck('n-zalo',!!n.zalo,'Gửi thêm qua Zalo')}</div>
    <div class="banner">${I('users')}<div>Đang nhận: <b>${on.length}</b> người trên portal (bật/tắt từng người ở cột <b>Nhận thông báo</b> của bảng Nhân viên)${n.zalo?`, trong đó <b>${zl.length}</b> người đã có Zalo chat ID`:''}. Người tự tải tệp lên không nhận thông báo về tệp của mình.</div></div>
    <div class="two" style="gap:14px">
      <div class="fld"><label for="n-instant">Email nhận thêm <span class="dnote">(người không có tài khoản portal)</span></label>${ta('n-instant',n.instant,'ví dụ: luatsu@lawfirm.com')}</div>
      <div class="fld"><label for="n-digest">Nhận thư tổng hợp 17:00 <span class="dnote">(để trống = quản trị viên)</span></label>${ta('n-digest',n.digest,'ví dụ: sep@idcedu.vn, ketoan@idcedu.vn')}</div>
    </div>
    <div class="two" style="gap:14px">
      <div class="fld"><label for="n-from">Email gửi từ</label><input id="n-from" value="${esc(n.from||'')}" style="width:100%"></div>
      <div class="fld"><label for="n-groups">Chat ID nhóm Zalo <span class="dnote">(tuỳ chọn, nếu bot vào được nhóm)</span></label><input id="n-groups" value="${esc((n.zalo_groups||[]).join(', '))}" placeholder="—" style="width:100%"></div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-act="saveNotify">${I('check')}Lưu thông báo</button><button class="btn" data-act="testNotify">${I('mail')}Gửi thử cho tôi</button></div>
  </div></section>`;
}
function readProgramForm(){
  const docs=[...document.querySelectorAll('#docrows tr')].map(tr=>{const g=k=>tr.querySelector(`[data-k="${k}"]`);return{code:g('code').value.trim().toUpperCase(),group:g('group').value,name:g('name').value.trim(),en:g('en').value.trim(),cat:g('cat').value.trim(),note:g('note').value.trim(),period:g('period').value.trim(),op:g('op').checked}}).filter(d=>d.code&&d.name);
  const steps=[...document.querySelectorAll('#steprows tr')].map(tr=>({t:tr.querySelector('[data-k="t"]').value.trim(),d:tr.querySelector('[data-k="d"]').value.trim()}));
  const pay=[...document.querySelectorAll('#payrows tr')].map(tr=>({k:tr.dataset.k,n:tr.querySelector('[data-k="n"]').value.trim(),w:tr.querySelector('[data-k="w"]').value.trim(),a:parseFloat(tr.querySelector('[data-k="a"]').value.replace(/[^\d.]/g,''))||0}));
  return{docs,steps,pay};
}
async function loadStaff(){const r=await R.sb.from('staff').select('*').order('email');R.staff=r.data||[];const n=await R.sb.from('settings').select('value').eq('key','notify').maybeSingle();R.notify=n.data?n.data.value:null;if(S.view==='admin')render()}
/* ---------- danh sách hồ sơ: cột tuỳ chỉnh + phân trang ---------- */
const CL_COLS=[
 {k:'stt',t:'STT',cls:'r',td:(c,s,n)=>`<td class="r num muted">${n}</td>`},
 {k:'name',t:'Khách hàng',fixed:1,td:c=>`<td><div class="who"><div class="av">${esc(initials(c.name))}</div><div style="min-width:0"><button class="row-link" data-open="${esc(c.id)}">${esc(c.name||'—')}</button>${(()=>{const tm=caseTiming(c);return tm.st==='late'||tm.st==='soon'?` <span class="pill ${stPill[tm.st]}" style="font-size:10.5px">${esc(tm.label)}</span>`:''})()}<div class="dnote">${esc(c.company||'')}</div></div></div></td>`},
 {k:'id',t:'Mã hồ sơ',td:c=>`<td class="mono">${esc(c.id)}</td>`},
 {k:'step',t:'Tiến trình',td:c=>`<td><div class="stepdots">${[1,2,3,4,5].map(i=>`<i class="${i<=(c.step||1)?'on':''}"></i>`).join('')}</div><div class="dnote" style="margin-top:4px">Bước ${c.step||1} · ${STEPS[(c.step||1)-1].t}</div></td>`},
 {k:'docs',t:'Tài liệu',td:(c,s)=>{const w=x=>(s.req?x/s.req*100:0).toFixed(1)+'%';return `<td><div class="bar"><i class="a" style="width:${w(s.approved)}"></i><i class="r" style="width:${w(s.review)}"></i><i class="m" style="width:${w(s.missing)}"></i></div><div class="dnote num" style="margin-top:4px">${s.approved}/${s.req} đã duyệt</div></td>`}},
 {k:'rcv',t:'Đã nhận',cls:'r',td:(c,s)=>`<td class="r num"><b>${s.rcv}</b><span class="muted">/${s.req}</span></td>`},
 {k:'miss',t:'Còn thiếu',cls:'r',td:(c,s)=>`<td class="r">${s.missing?`<span class="count-bad num">${s.missing}</span>`:`<span class="count-ok">${I('check',12)}</span>`}</td>`},
 {k:'rev',t:'Chờ duyệt',cls:'r',td:(c,s)=>`<td class="r num">${s.review||'—'}</td>`},
 {k:'staff',t:'Chuyên viên',td:c=>`<td>${esc(c.staff||'—')}${assigneesOf(c).length?`<div class="dnote">${esc(assigneesOf(c).map(personName).join(', '))}</div>`:(R.isAdmin?'<div class="dnote" style="color:var(--warn)">Chưa phân công</div>':'')}${R.isAdmin?`<button class="btn asg-btn" data-assignopen="${esc(c.id)}">${I('users',14)}Phân công</button>`:''}</td>`},
 {k:'due',t:'Hạn hoàn thiện',off:1,td:c=>{const tm=caseTiming(c);return `<td class="num">${tm.due?fmtDate(new Date(tm.due).toISOString()):'—'}${tm.label?`<div class="dnote">${esc(tm.label)}</div>`:''}</td>`}},
 {k:'opt',t:'Phương án',off:1,td:c=>`<td>${esc(c.opt&&c.opt!=='?'?optLabel(c.opt):'—')}</td>`},
 {k:'us',t:'Công ty tại Mỹ',off:1,td:c=>`<td>${esc(c.us||'—')}${c.state?`<div class="dnote">${esc(stateLabel(c.state))}</div>`:''}</td>`},
 {k:'industry',t:'Ngành',off:1,td:c=>`<td>${esc(c.industry||'—')}</td>`},
 {k:'opened',t:'Ngày mở hồ sơ',off:1,td:c=>`<td class="num">${esc(c.opened||'—')}</td>`},
 {k:'upd',t:'Cập nhật',td:c=>`<td class="dnote">${fmtTime(c.updatedAt)||'—'}</td>`}];
const PG={get per(){let v=20;try{v=+localStorage.getItem('idc_per')||20}catch(_){}return [10,20,50,100].includes(v)?v:20},set per(v){try{localStorage.setItem('idc_per',String(v))}catch(_){}},
  get cols(){let v=null;try{v=JSON.parse(localStorage.getItem('idc_cols')||'null')}catch(_){}return Array.isArray(v)?v:CL_COLS.filter(x=>!x.off).map(x=>x.k)},set cols(v){try{localStorage.setItem('idc_cols',JSON.stringify(v))}catch(_){}}};
function pageNums(cur,tot){if(tot<=7)return [...Array(tot)].map((_,i)=>i+1);const o=[1];if(cur>3)o.push('…');for(let i=Math.max(2,cur-1);i<=Math.min(tot-1,cur+1);i++)o.push(i);if(cur<tot-2)o.push('…');o.push(tot);return o}
function clTable(list){
  const per=PG.per,tot=Math.max(1,Math.ceil(list.length/per));S.page=Math.min(Math.max(1,S.page||1),tot);
  const from=(S.page-1)*per,rows=list.slice(from,from+per);const on=PG.cols;const cols=CL_COLS.filter(x=>x.fixed||on.includes(x.k));
  const table=`<div class="tbl-wrap"><table><thead><tr>${cols.map(x=>`<th${x.cls?` class="${x.cls}"`:''}>${x.t}</th>`).join('')}</tr></thead>
    <tbody>${rows.length?rows.map((c,i)=>{const s=stats(c);return `<tr class="click" data-open="${esc(c.id)}">${cols.map(x=>x.td(c,s,from+i+1)).join('')}</tr>`}).join(''):`<tr><td colspan="${cols.length}" class="empty">Không có hồ sơ khớp bộ lọc.</td></tr>`}</tbody></table></div>`;
  const nums=pageNums(S.page,tot).map(n=>n==='…'?'<span class="pg-gap">…</span>':`<button class="pg-n${n===S.page?' on':''}" data-pg="${n}" aria-label="Trang ${n}" ${n===S.page?'aria-current="page"':''}>${n}</button>`).join('');
  const pop=S.colOpen?`<div class="pg-pop" role="dialog" aria-label="Chọn cột hiển thị"><div class="pg-pop-h"><b>Cột hiển thị</b><button class="bp-link" data-colreset>Mặc định</button></div>${CL_COLS.map(x=>`<label class="pg-col${x.fixed?' dis':''}"><input type="checkbox" data-col="${x.k}" ${x.fixed||on.includes(x.k)?'checked':''} ${x.fixed?'disabled':''}>${x.t}</label>`).join('')}</div>`:'';
  const bar=`<div class="pager">
    <div class="pg-nav"><button class="pg-arrow" data-pg="${S.page-1}" ${S.page<=1?'disabled':''} aria-label="Trang trước">${I('chl',16)}</button><button class="pg-arrow" data-pg="${S.page+1}" ${S.page>=tot?'disabled':''} aria-label="Trang sau">${I('chr',16)}</button></div>
    <span class="pg-info">Hiển thị <b>${list.length?from+1:0} - ${from+rows.length}</b> / <b>${list.length}</b> kết quả</span>
    ${tot>1?`<div class="pg-nums">${nums}</div>`:''}
    <span class="sp"></span>
    <div class="pg-cust"><button class="btn" data-pgcust aria-expanded="${!!S.colOpen}">${I('cog',15)}Tùy chỉnh</button>${pop}</div>
    <label class="pg-per"><span class="sr">Số dòng mỗi trang</span><select id="pg-per">${[10,20,50,100].map(n=>`<option value="${n}" ${n===per?'selected':''}>Hiển thị ${n} kết quả/trang</option>`).join('')}</select></label>
  </div>`;
  return table+bar;
}
function vClients(){
  const q=S.q.trim().toLowerCase();
  const all=R.clients;
  const list=all.filter(c=>{const s=stats(c);if(S.filter==='missing'&&!s.missing)return false;if(S.filter==='review'&&!s.review)return false;if(S.filter==='done'&&(s.missing||s.review))return false;return !q||[c.id,c.name,c.company,c.staff,c.office].join(' ').toLowerCase().includes(q)});
  let miss=0,rev=0,appr=0,req=0,rcv=0;all.forEach(c=>{const s=stats(c);miss+=s.missing;rev+=s.review;appr+=s.approved;req+=s.req;rcv+=s.rcv});
  const cnt=k=>all.filter(c=>{const s=stats(c);return k==='missing'?s.missing:k==='review'?s.review:k==='done'?!s.missing&&!s.review:true}).length;
  $('view').innerHTML=`
  <div class="phead"><div><div class="eyebrow">Chương trình · L-1A → EB-1C</div><h1>Hồ sơ khách hàng</h1><p>Chọn một hồ sơ để xem những tài liệu còn thiếu, tải tệp lên, duyệt và tải hồ sơ về.</p></div>
   <div class="actions"><button class="btn" data-act="exportExcel" ${all.length?'':'disabled'}>${I('sheet')}Xuất Excel</button>${R.canWrite?`<button class="btn primary" data-act="newClient">${I('plus')}Thêm hồ sơ</button>`:''}</div></div>
  ${(()=>{if(R.isAdmin||!R.email)return'';const items=pendingFor(R.email,R.role);if(!items.length)return'';return `<section class="todo"><div class="todo-h">${I('alert',18)}<div><b>Việc cần làm của bạn · ${items.length} hồ sơ</b><span>Hồ sơ quá hạn hoặc chưa được xử lý gần đây. Quản trị cũng nhận được danh sách này.</span></div></div><ul>${items.map(({c,why})=>`<li><button class="row-link" data-open="${esc(c.id)}">${esc(c.id)} · ${esc(c.name||'')}</button>${why.map(([k,m])=>`<span class="pill ${k==='bad'?'s-missing':'s-review'}">${esc(m)}</span>`).join('')}</li>`).join('')}</ul></section>`})()}
  ${all.length?`<section class="kpis">
    <div class="kpi"><div class="eyebrow">Hồ sơ</div><div class="v num">${all.length}</div><div class="s">${all.filter(c=>(c.step||1)===1).length} hồ sơ đang thu thập chứng từ</div></div>
    <div class="kpi"><div class="eyebrow">Tài liệu còn thiếu</div><div class="v num" style="color:var(--bad)">${miss}</div><div class="s">Cần khách bổ sung</div></div>
    <div class="kpi"><div class="eyebrow">Tài liệu đã nhận</div><div class="v num" style="color:var(--ok)">${rcv}</div><div class="s">${rev} tài liệu đang chờ duyệt</div></div>
    <div class="kpi"><div class="eyebrow">Đã duyệt</div><div class="v num" style="color:var(--ok)">${req?Math.round(appr/req*100):0}%</div><div class="s">${appr}/${req} tài liệu bắt buộc</div></div>
  </section>
  <section class="card">
    <div class="card-h"><div class="chips">${[['all','Tất cả'],['missing','Còn thiếu tài liệu'],['review','Có tài liệu chờ duyệt'],['done','Đã đủ']].map(([k,l])=>`<button class="chip" data-filter="${k}" aria-pressed="${S.filter===k}">${l}<span class="n">${cnt(k)}</span></button>`).join('')}</div></div>
    ${clTable(list)}
  </section>`:vEmpty()}`;
}

function ringSVG(s){const r=30,C=2*Math.PI*r,a=s.req?s.approved/s.req:0,rv=s.req?s.review/s.req:0;
  return `<svg viewBox="0 0 76 76" role="img" aria-label="${s.approved}/${s.req} đã duyệt"><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--panel-2)" stroke-width="8"/><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--warn)" stroke-width="8" stroke-dasharray="${C*(a+rv)} ${C}" transform="rotate(-90 38 38)" stroke-linecap="butt"/><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--ok)" stroke-width="8" stroke-dasharray="${C*a} ${C}" transform="rotate(-90 38 38)"/><text x="38" y="42" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fg)" font-family="Be Vietnam Pro,system-ui,sans-serif">${s.pct}%</text></svg>`}

function docCard(c,d,mode){
  const x=(c.docs||{})[d.code]||{},fs=filesOf(c,d.code),s=stOf(c,d.code),busy=UP[d.code];
  const req=[d.cat,d.period,d.note].filter(Boolean).map(t=>`<span>${esc(t)}</span>`).join('');
  const canUp=R.canWrite;
  return `<article class="doccard ${s}">
    <div class="top-l"><span class="code">${d.code}</span><div class="t"><b>${esc(d.name)}</b><div class="en">${esc(d.en)}</div>${req?`<div class="req">${req}</div>`:''}</div><button class="open" data-doc="${d.code}" title="Chi tiết tài liệu" aria-label="Chi tiết ${d.code}">${I('info')}</button></div>
    ${x.note?`<div class="note">${esc(x.note)}</div>`:''}
    ${fs.length?`<div class="files">${fs.map(f=>`<div class="frow"><button class="fchip" data-view="${f._id}">${I('file',14)}<span>${esc(f.name)}</span><em>${fmtSize(f.size)}</em></button>${R.canWrite?`<button class="icon-btn fdel" data-del="${f._id}" title="Xoá tệp" aria-label="Xoá ${esc(f.name)}">${I('trash')}</button>`:''}</div>`).join('')}</div>`:''}
    ${mode==='missing'?`<div class="drop ${busy?'busy':''} ${canUp?'':'locked'}" ${canUp?`data-drop="${d.code}" tabindex="0" role="button"`:''} aria-label="Tải tệp cho ${d.code}">${busy?`${I('clock')}Đang tải lên…`:canUp?`<span class="addf-pill">${I('plus',15)}Thêm tệp vào</span><span class="drop-hint">hoặc kéo tệp thả vào đây · PDF, JPG, PNG · tối đa 50 MB</span>`:`${I('alert')}Cần quyền chỉnh sửa để tải lên`}</div>`:''}
    ${mode==='review'&&R.canReview?`<div class="foot">${R.canApprove?`<button class="btn sm ok" data-setst="approved" data-code="${d.code}">${I('check',14)}Duyệt</button>`:'<span class="dnote">Chờ Luật sư duyệt</span>'}<button class="btn sm" data-ask="${d.code}">${I('undo',14)}Yêu cầu bổ sung</button>${canUp?`<button class="btn sm addf" data-pick="${d.code}" title="Thêm tệp vào tài liệu ${d.code}">${I('plus',14)}Thêm tệp vào</button>`:''}</div>`:''}
    ${mode==='approved'&&R.canReview?`<div class="foot"><span class="dnote">Duyệt ${fmtTime(x.at)}${x.by?' · '+esc(String(x.by).split('@')[0]):''}</span>${R.canApprove?`<button class="btn sm ghost" data-setst="review" data-code="${d.code}" style="margin-left:auto">${I('undo',14)}Bỏ duyệt</button>`:''}</div>`:''}
  </article>`;
}
function groupedCards(c,codes,mode){
  return Object.keys(GROUPS).map(g=>{const ds=codes.filter(d=>d.group===g);if(!ds.length)return'';
    return `<div class="section-h"><h3>${GROUPS[g].full}</h3><span class="dnote">${ds.length} tài liệu</span></div>`+byDept(ds).map(([x,l])=>`<section class="dept" style="--dc:${x.c};--dcs:${x.cs}">${deptHead(x,l.length)}<div class="docgrid">${l.map(d=>docCard(c,d,mode)).join('')}</div></section>`).join('')}).join('');
}
function vCase(){
  const c=getC(S.client);const s=stats(c);const step=c.step||1;watchFiles(c.id);
  const q=S.q.trim().toLowerCase();const mq=d=>!q||(d.code+' '+d.name+' '+d.en+' '+DEPT[deptOf(d)].t+' '+DEPT[deptOf(d)].en).toLowerCase().includes(q);const m=d=>mq(d)&&(!S.dept||deptOf(d)===S.dept);
  const by=k=>DOCS.filter(d=>stOf(c,d.code)===k&&m(d));
  const tabs=[['missing','Cần bổ sung',s.missing,'bad'],['received','Đã nhận',s.rcv,'blue'],['review','Chờ duyệt',s.review,'warn'],['approved','Đã duyệt',s.approved,'ok'],['all','Tất cả tài liệu',DOCS.length,''],['info','Thông tin & thanh toán','',''],['email','Email nhắc khách','','']];
  let body='';
  const tp={missing:d=>stOf(c,d.code)==='missing',received:d=>isRcv(c,d.code),review:d=>stOf(c,d.code)==='review',approved:d=>stOf(c,d.code)==='approved',all:()=>true}[S.tab];
  const deptBar=tp?(()=>{const base=DOCS.filter(d=>tp(d)&&mq(d));if(!base.length)return'';const cnt=k=>base.filter(d=>deptOf(d)===k).length;return `<div class="deptbar" role="toolbar" aria-label="Lọc theo nhóm hồ sơ"><span class="deptbar-l">Nhóm hồ sơ</span><button class="dchip${!S.dept?' on':''}" data-dept="">Tất cả<span>${base.length}</span></button>${DEPTS.filter(x=>cnt(x.k)).map(x=>`<button class="dchip${S.dept===x.k?' on':''}" data-dept="${x.k}" style="--dc:${x.c};--dcs:${x.cs}"><i></i>${x.t}<span>${cnt(x.k)}</span></button>`).join('')}</div>`})():'';
  if(S.tab==='missing'){const l=by('missing');body=l.length?`<div class="banner" style="margin:16px 18px 0">${I('info')}<div>Mỗi thẻ là một tài liệu khách chưa nộp. Kéo tệp vào ô của thẻ (hoặc bấm vào ô) để lưu. Tệp lưu xong, tài liệu chuyển sang <b>Chờ duyệt</b>.</div></div>`+groupedCards(c,l,'missing'):`<div class="doneall">${I('check',20)}Không còn tài liệu bắt buộc nào thiếu.</div>`}
  else if(S.tab==='received'){const l=DOCS.filter(d=>isRcv(c,d.code)&&m(d));body=l.length?`<div class="banner ok" style="margin:16px 18px 0">${I('check')}<div>Khách đã nộp <b>${s.rcv}/${s.req}</b> tài liệu bắt buộc: <b>${s.approved}</b> đã duyệt, <b>${s.review}</b> đang chờ duyệt. Ngày nhận là ngày tệp đầu tiên được tải lên.</div></div><div class="tbl-wrap"><table><thead><tr><th>Mã</th><th>Tài liệu</th><th>Trạng thái</th><th class="r">Số tệp</th><th>Ngày nhận</th></tr></thead><tbody>${Object.keys(GROUPS).map(g=>{const ds=l.filter(d=>d.group===g);if(!ds.length)return'';return `<tr class="grp"><td colspan="5">${GROUPS[g].full}</td></tr>`+byDept(ds).map(([x,dl])=>deptRow(x,dl.length,5)+dl.map(d=>{const st=stOf(c,d.code);return `<tr class="click" data-doc="${d.code}"><td class="mono">${d.code}</td><td style="min-width:220px"><div class="dname">${esc(d.name)} <span class="en">· ${esc(d.en)}</span></div></td><td><span class="pill ${ST[st][1]}">${ST[st][0]}</span></td><td class="r num">${filesOf(c,d.code).length||'—'}</td><td class="num">${fmtDate(rcvDate(c,d.code))||'<span class="muted">—</span>'}</td></tr>`}).join('')).join('')}).join('')}</tbody></table></div>`:`<div class="empty"><b>Chưa nhận tài liệu nào</b>Tài liệu khách nộp sẽ xuất hiện ở đây kèm ngày nhận.</div>`}
  else if(S.tab==='review'){const l=by('review');body=l.length?groupedCards(c,l,'review'):`<div class="empty"><b>Không có tài liệu chờ duyệt</b>Tệp mới tải lên sẽ xuất hiện ở đây.</div>`}
  else if(S.tab==='approved'){const l=by('approved');body=l.length?groupedCards(c,l,'approved'):`<div class="empty"><b>Chưa có tài liệu nào được duyệt</b></div>`}
  else if(S.tab==='all'){body=`<div class="tbl-wrap"><table><thead><tr><th>Mã</th><th>Tài liệu</th><th>Trạng thái</th><th>Tệp</th><th>Ghi chú</th><th>Cập nhật</th><th></th></tr></thead><tbody>${Object.keys(GROUPS).map(g=>{const ds=DOCS.filter(d=>d.group===g&&m(d));if(!ds.length)return'';return `<tr class="grp"><td colspan="7">${GROUPS[g].full}</td></tr>`+byDept(ds).map(([x,dl])=>deptRow(x,dl.length,7)+dl.map(d=>{const x=(c.docs||{})[d.code]||{},st=stOf(c,d.code),n=filesOf(c,d.code).length;return `<tr class="click" data-doc="${d.code}"><td class="mono">${d.code}</td><td style="min-width:220px"><div class="dname">${esc(d.name)} <span class="en">· ${esc(d.en)}</span></div></td><td><span class="pill ${ST[st][1]}">${ST[st][0]}</span></td><td class="num">${n?`${I('file',13)} ${n}`:'—'}</td><td class="dnote" style="max-width:240px">${esc(x.note||'')}</td><td class="dnote">${fmtTime(x.at)}</td><td class="r"><button class="btn sm ghost" data-doc="${d.code}">Mở</button></td></tr>`}).join('')).join('')}).join('')}</tbody></table></div>`}
  else if(S.tab==='info'){
    const info=[['Đương đơn',c.name],['Công ty Việt Nam',c.company],['Tên tiếng Anh',c.companyEn],['Mã số doanh nghiệp',c.mst],['Vốn điều lệ',c.charter],['Đăng ký doanh nghiệp',c.reg],['Chủ sở hữu / thành viên',c.owners],['Trụ sở',c.addr],['Ngành',c.industry],['Phương án',optLabel(c.opt)],['Pháp nhân tại Mỹ',c.us],['Bang',stateLabel(c.state)],['Địa chỉ tại Mỹ',usAddrOf(c)],...(c.otherCo||c.otherCountry?[['Công ty tại nước khác',[c.otherCo,c.otherCountry].filter(Boolean).join(' · ')],['Địa chỉ công ty nước khác',c.otherAddr]]:[]),['Người phụ thuộc',c.deps],['Văn phòng','IDC VIETNAM'],['Chuyên viên',c.staff],['Ngày mở hồ sơ',c.opened]];
    let acc=0;
    body=`<div class="two" style="padding:18px">
      <div class="card"><div class="card-h"><h3>Thông tin hồ sơ</h3>${R.canWrite?`<div class="sp"><button class="btn sm" data-act="editClient">${I('edit',14)}Sửa</button></div>`:''}</div><div class="card-b"><dl class="info" style="margin:0">${info.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v||'—')}</dd></div>`).join('')}</dl>${c.note?`<div class="banner warn" style="margin-top:16px">${I('alert')}<div>${esc(c.note)}</div></div>`:''}</div></div>
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="card"><div class="card-h"><h3>Thanh toán</h3><span class="sp num"><b>${usd(paidOf(c))}</b>&nbsp;<span class="muted">/ ${usd(PAY.reduce((a,p)=>a+p.a,0))} USD</span></span></div>
          <div class="tbl-wrap"><table><thead><tr><th>Đợt</th><th class="r">Số tiền</th><th class="r">Đã thu</th></tr></thead><tbody>${PAY.map((p,i)=>{const got=+((c.pay||{})[p.k])||0;return `<tr><td><b>${p.n}</b><div class="dnote">${p.w}</div></td><td class="r num">${usd(p.a)}</td><td class="r">${R.canWrite?`<input class="num" style="width:96px;text-align:right;border:1px solid var(--border-strong);border-radius:7px;padding:4px 8px;background:var(--bg)" id="pay-${p.k}" data-pay="${p.k}" value="${got||''}" placeholder="0" inputmode="numeric" aria-label="Đã thu ${p.n}">`:`<span class="num">${usd(got)}</span>`}</td></tr>`}).join('')}</tbody></table></div></div>
        <div class="card"><div class="card-h"><h3>Lịch sử cập nhật</h3></div><div class="card-b log">${(c.log||[]).length?(c.log||[]).slice(0,15).map(l=>`<div><time>${fmtTime(l.t)}</time><span><b>${whoHTML(l.by)}</b> · ${esc(l.m)}</span></div>`).join(''):'<span class="dnote">Chưa có thay đổi nào.</span>'}</div></div>
      </div></div>`}
  else {body=`<div class="mail"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><span class="dnote">Tự cập nhật theo ${s.missing} tài liệu còn thiếu và ghi chú của từng tài liệu.</span><span style="margin-left:auto;display:flex;gap:6px"><button class="btn sm" data-act="emailTxt">${I('down',14)}Tải .txt</button><button class="btn sm primary" data-act="copyEmail">${I('copy',14)}Sao chép</button></span></div><pre id="mailbody">${esc(emailText(c))}</pre></div>`}

  $('view').innerHTML=`
  <div><button class="btn ghost sm" data-go="clients" style="padding-left:4px">${I('back')}Danh sách hồ sơ</button></div>
  <section class="card">
    <div class="casehead">
      <div style="min-width:0"><div class="eyebrow">Hồ sơ ${esc(c.id)} · L-1A → EB-1C</div><h1>${esc(c.name||'—')}</h1>
        <div class="meta meta2">${[[c.company,'Công ty','folder'],[c.us?c.us+(c.state?' · '+stateLabel(c.state):''):'','Công ty tại Mỹ'],[c.otherCo||'',c.otherCountry?'Công ty tại '+c.otherCountry:'Công ty nước khác'],['IDC VIETNAM','Đơn vị tư vấn'],[c.staff,'Chuyên viên tư vấn'],[c.opt&&c.opt!=='?'?optLabel(c.opt):'','Phương án']].filter(([v])=>v&&String(v).trim()).map(([v,l,ic])=>`<span>${ic?I(ic,14):''}<em>${l}</em><b>${esc(v)}</b></span>`).join('')}</div>
        <div class="assign">${I('users',14)}<b>Phụ trách xử lý:</b>${assigneesOf(c).length?assigneesOf(c).map(e=>{const u=(R.people||[]).find(x=>x.email===e);return `<span class="who-chip ${u&&u.role==='lawyer'?'law':''}">${esc(personName(e))}<em>${u&&u.role==='lawyer'?'Luật sư':'Nhân viên'}</em></span>`}).join(''):'<span class="dnote">Chưa phân công</span>'}${(()=>{const tm=caseTiming(c);return tm.due?`<span class="pill ${stPill[tm.st]}" title="Hạn hoàn thiện chứng từ">${I('clock',12)} Hạn ${fmtDate(new Date(tm.due).toISOString())} · ${esc(tm.label)}</span>`:''})()}${R.isAdmin?`<button class="btn asg-cta" data-act="assign">${I('users',15)}Phân công xử lý</button>`:''}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px"><button class="btn primary" data-act="zip">${I('zip')}Tải trọn bộ ZIP</button><button class="btn doc-ok" data-act="receipt">${I('file')}Biên bản tiếp nhận</button><button class="btn chat-btn" data-chatcase="${esc(c.id)}">${I('chat',15)}Trao đổi hồ sơ${(()=>{const r=chatRoomOf('case',c.id);const n=r?CH.unread[r.id]||0:0;return n?`<span class="ch-n">${n}</span>`:''})()}</button><button class="btn doc-wt" data-act="notice">${I('mail')}Thông báo bổ sung</button><button class="btn" data-act="checklistCsv">${I('sheet')}Checklist .csv</button>${R.canWrite?`<button class="btn" data-act="editClient">${I('edit')}Sửa thông tin</button>`:''}</div>
      </div>
      <div class="ring">${ringSVG(s)}<div><div class="big num">${s.approved}<span class="muted" style="font-size:14px;font-weight:500"> / ${s.req}</span></div><div class="dnote">tài liệu bắt buộc đã duyệt</div><div class="small" style="margin-top:6px;display:flex;gap:10px;flex-wrap:wrap"><span class="pill s-received">${s.rcv} đã nhận</span><span class="pill s-missing">${s.missing} thiếu</span><span class="pill s-review">${s.review} chờ duyệt</span></div></div></div>
    </div>
    <div class="steps2" role="list" aria-label="Lộ trình hồ sơ">${STEPS.map((x,i)=>{const st=i+1<step?'done':i+1===step?'cur':'next';const lab=st==='done'?'Hoàn thành':st==='cur'?'Đang thực hiện':'Sắp tới';const inner=`<span class="sx-top"><span class="sx-n">${st==='done'?I('check',14):i+1}</span><span class="sx-eb">Bước ${i+1}</span><span class="sx-st">${lab}</span></span><b class="sx-t">${esc(x.t)}</b><span class="sx-d">${esc(x.s||STEP_DESC[i]||'')}</span>${i===1&&step>=2?(()=>{const pr=msProg(c);return `<span class="sx-ms"><i style="--p:${Math.round(pr.n/pr.t*100)}%"></i>${pr.n}/${pr.t} mốc</span>`})():''}<span class="sx-time">${I('clock',12)}${esc(x.d)}</span>`;return `<div class="sx sx-${i+1} ${st}" role="listitem" ${st==='cur'?'aria-current="step"':''}>${R.canWrite?`<button data-step="${i+1}" title="Chuyển hồ sơ sang bước ${i+1}">${inner}</button>`:`<div class="sx-in">${inner}</div>`}</div>`}).join('')}</div>
    ${step>=2?msPanel(c,s):''}
  </section>
  <section class="card">
    <div class="tabs" role="tablist">${tabs.map(([k,l,n,cl])=>`<button class="tab${cl?' t-'+cl:''}" role="tab" data-tab="${k}" aria-selected="${S.tab===k}">${l}${n!==''?`<span class="c ${n&&cl?cl:''}">${n}</span>`:''}</button>`).join('')}</div>
    ${deptBar}${body}
  </section>`;
}

/* ---------- drawer ---------- */
let DR=null;
function openDrawer(kind,arg){DR={kind,arg};drawRender();$('drawer').classList.add('on');$('scrim').classList.add('on');$('drawer').setAttribute('aria-hidden','false')}
function closeDrawer(){DR=null;$('drawer').classList.remove('on');$('scrim').classList.remove('on');$('drawer').setAttribute('aria-hidden','true')}
function refreshDrawer(){if(DR&&(DR.kind==='doc'||DR.kind==='file'))drawRender(true)}
function drawRender(soft){
  const c=getC(S.client);const body=$('dr-body');body.classList.remove('viewer');
  if(DR.kind==='doc'){
    const d=DOC[DR.arg],x=(c.docs||{})[d.code]||{},st=stOf(c,d.code),fs=filesOf(c,d.code),canUp=R.canWrite;
    $('dr-eb').textContent=`${c.id} · ${d.code} · ${GROUPS[d.group].short}`;$('dr-title').textContent=d.name;
    $('dr-acts').innerHTML=`<button class="icon-btn" data-act="close" aria-label="Đóng">${I('x')}</button>`;
    const noteVal=soft&&$('dr-note')?$('dr-note').value:(x.note||'');
    body.innerHTML=`
      <div class="box"><h4>Yêu cầu</h4><div class="dname">${esc(d.name)} <span class="en">· ${esc(d.en)}</span></div><div class="req" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">${[d.cat,d.period,d.note].filter(Boolean).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}<span class="tag">Bản dịch tiếng Anh kèm bản gốc</span></div></div>
      <div class="box"><h4>Trạng thái</h4><div class="seg" role="group" aria-label="Trạng thái">${Object.keys(ST).map(k=>`<button class="${k}" data-setst="${k}" data-code="${d.code}" aria-pressed="${st===k}" ${R.canReview&&(R.canApprove||(k!=='approved'&&st!=='approved'))?'':'disabled'}>${ST[k][0]}</button>`).join('')}</div>${x.at?`<div class="dnote" style="margin-top:8px">Cập nhật ${fmtTime(x.at)} · ${whoHTML(x.by)}</div>`:''}</div>
      <div class="box"><h4>Tệp đã nộp (${fs.length})</h4><div class="files" style="padding:0">${fs.length?fs.map(f=>`<div style="display:flex;gap:6px;align-items:center"><button class="fchip" data-view="${f._id}">${I('file',14)}<span>${esc(f.name)}</span><em>${fmtSize(f.size)}${f.at?' · '+fmtTime(f.at):''}</em></button><button class="icon-btn" data-dlf="${f._id}" title="Tải xuống" aria-label="Tải ${esc(f.name)}">${I('down')}</button>${R.canWrite?`<button class="icon-btn" data-del="${f._id}" title="Xoá tệp" aria-label="Xoá ${esc(f.name)}">${I('trash')}</button>`:''}</div>`).join(''):'<span class="dnote">Chưa có tệp.</span>'}</div>
        ${canUp?`<div class="drop ${UP[d.code]?'busy':''}" data-drop="${d.code}" tabindex="0" role="button" style="margin:12px 0 0">${UP[d.code]?`${I('clock')}Đang tải lên…`:`<span class="addf-pill">${I('plus',15)}Thêm tệp vào</span><span class="drop-hint">hoặc kéo tệp thả vào đây</span>`}</div>`:''}</div>
      <div class="box"><h4>Ghi chú cho tài liệu</h4><div class="fld"><textarea id="dr-note" placeholder="Ví dụ: Thiếu trang 3, cần bản dịch công chứng…" ${R.canReview?'':'disabled'}>${esc(noteVal)}</textarea></div>${R.canReview?`<div style="display:flex;gap:8px;margin-top:8px"><button class="btn sm primary" data-savenote="${d.code}">Lưu ghi chú</button></div>`:''}</div>`;
  } else if(DR.kind==='file'){
    const f=(R.files[c.id]||[]).find(x=>x._id===DR.arg);if(!f){closeDrawer();return}
    $('dr-eb').textContent=`${c.id} · ${f.code} · ${DOC[f.code]?DOC[f.code].name:''}`;$('dr-title').textContent=f.name;
    $('dr-acts').innerHTML=`<a class="btn sm" id="dr-open" href="#" target="_blank" rel="noopener">${I('ext',14)}Mở tab mới</a><button class="btn sm primary" data-dlf="${f._id}">${I('down',14)}Tải xuống</button><button class="btn sm ghost" data-doc="${f.code}">Về tài liệu</button><button class="icon-btn" data-act="close" aria-label="Đóng">${I('x')}</button>`;
    body.classList.add('viewer');
    if(soft)return;
    body.innerHTML=`<div class="empty">Đang mở tệp…</div>`;
    const id=DR.arg;
    signedUrl(f).then(url=>{if(!DR||DR.arg!==id)return;$('dr-open').href=url;
      body.innerHTML=(f.type||'').startsWith('image/')?`<img class="preview-img" src="${esc(url)}" alt="${esc(f.name)}">`:`<iframe class="pdf-frame" src="${esc(url)}" title="${esc(f.name)}"></iframe><div class="dnote" style="text-align:center">Nếu khung trống, bấm “Mở tab mới” hoặc “Tải xuống”.</div>`}).catch(e=>{body.innerHTML=`<div class="empty"><b>Không mở được tệp</b>${esc(e.message)}</div>`});
  } else if(DR.kind==='assign'){
    const cur=new Set(assigneesOf(c));
    const roleName={admin:'Quản trị',lawyer:'Luật sư',staff:'Nhân viên'};
    const grp=(role,label,hint)=>{const l=(R.people||[]).filter(u=>u.role===role);return `<div class="box asg-grp"><div class="asg-h"><h4>${label} <span class="dnote">(${l.length})</span></h4>${l.length>1?`<button type="button" class="btn sm ghost" data-asgall="${role}">Chọn tất cả</button>`:''}</div>${hint?`<div class="dnote" style="margin:-2px 0 4px">${hint}</div>`:''}${l.length?l.map(u=>`<label class="asg"><input type="checkbox" data-asg="${esc(u.email)}" data-role="${role}" ${cur.has(u.email)?'checked':''}><span class="av sm">${esc(initials(u.name||u.email))}</span><span><b>${esc(u.name||u.email)}</b><em>${esc(u.email)} · ${roleName[role]}</em></span></label>`).join(''):'<div class="dnote">Chưa có tài khoản nào với quyền này. Thêm ở Quản trị → Nhân viên.</div>'}</div>`};
    $('dr-eb').textContent=`Hồ sơ ${c.id} · ${c.name||''}`;$('dr-title').textContent='Phân công xử lý hồ sơ';$('dr-acts').innerHTML=`<button class="icon-btn" data-act="close" aria-label="Đóng">${I('x')}</button>`;
    body.innerHTML=`<div class="banner"><span>${I('info',16)}</span><div>Tích chọn <b>một hoặc nhiều người</b> cùng xử lý hồ sơ này. Nhân viên và Luật sư <b>chỉ thấy hồ sơ được phân cho mình</b>; Quản trị luôn thấy tất cả. Người được phân nhận email khi hồ sơ có tệp mới.</div></div>
    <div class="box asg-grp"><div class="asg-h"><h4>Hạn hoàn thiện chứng từ</h4></div><div class="dnote" style="margin:-2px 0 6px">Quá hạn mà còn thiếu tài liệu sẽ báo đỏ trong Báo cáo và nhắc người phụ trách qua email. Để trống = ngày mở hồ sơ + 30 ngày.</div><input type="date" id="asg-due" value="${esc(c.due||'')}" class="asg-date"><span class="dnote" style="margin-left:8px">${c.due?'':'Mặc định: '+(dueOf(c)?fmtDate(new Date(dueOf(c)).toISOString()):'—')}</span></div>
    ${grp('staff','Nhân viên','Tải tệp, cập nhật thông tin hồ sơ')}${grp('lawyer','Luật sư','Duyệt tài liệu, yêu cầu bổ sung')}${grp('admin','Quản trị','Luôn thấy mọi hồ sơ; tích để nhận email của hồ sơ này')}
    <div class="asg-foot"><span class="dnote" id="asg-n"></span><button class="btn primary" data-act="saveAssign">${I('check',14)}Lưu phân công</button><button class="btn" data-act="close">Huỷ</button></div>`;
    const cnt=()=>{const n=body.querySelectorAll('[data-asg]:checked').length;$('asg-n').textContent=n?`Đã chọn ${n} người`:'Chưa chọn ai'};cnt();body.onchange=cnt;
  } else if(DR.kind==='client'){
    const c0=DR.arg==='new'?null:c;const v=k=>esc(c0?c0[k]||'':'');
    const nextId=(()=>{let m=0;R.clients.forEach(x=>{const mm=/(\d+)$/.exec(String(x.id));const n=mm?parseInt(mm[1],10):0;if(n>m)m=n});return 'L1A-'+String(m+1).padStart(4,'0')})();
    $('dr-eb').textContent=c0?`Hồ sơ ${c0.id}`:'Hồ sơ mới';$('dr-title').textContent=c0?'Sửa thông tin hồ sơ':'Thêm hồ sơ khách hàng';
    $('dr-acts').innerHTML=`<button class="icon-btn" data-act="close" aria-label="Đóng">${I('x')}</button>`;
    const F=(id,label,val,extra='')=>`<div class="fld ${extra}"><label for="f-${id}">${label}</label><input id="f-${id}" value="${val}"></div>`;
    body.innerHTML=`<form id="cform" class="form">
      ${c0?`<div class="fld"><label>Mã hồ sơ</label><input value="${esc(c0.id)}" disabled></div>`:F('id','Mã hồ sơ *',nextId)}
      ${F('name','Đương đơn *',v('name'))}
      ${F('company','Công ty Việt Nam',v('company'),'full')}
      ${F('companyEn','Tên công ty (tiếng Anh)',v('companyEn'))}${F('mst','Mã số doanh nghiệp',v('mst'))}
      ${F('industry','Ngành',v('industry'))}
      <div class="fld"><label for="f-office">Văn phòng</label><input id="f-office" value="IDC VIETNAM" readonly tabindex="-1" style="background:var(--panel);color:var(--muted)"></div>
      ${F('staff','Chuyên viên phụ trách',v('staff'))}
      <div class="fld"><label for="f-opt">Phương án đầu tư</label><select id="f-opt">${[['?','Chưa xác định'],['A','A · Mở mới doanh nghiệp tại Mỹ'],['B','B · Đã có doanh nghiệp tại Mỹ']].map(([k,l])=>`<option value="${k}" ${(c0?c0.opt:'?')===k?'selected':''}>${l}</option>`).join('')}</select></div>
      <div class="full fsec">Công ty tại Mỹ</div>
      ${F('us','Pháp nhân tại Mỹ (tên công ty)',v('us'))}
      <div class="fld"><label for="f-state">Bang</label><select id="f-state"><option value="">— Chọn bang —</option><optgroup label="Hay dùng cho L-1A">${POPULAR_STATES.map(k=>{const n=US_STATES.find(x=>x[0]===k)[1];return `<option value="${k}" ${(c0&&(c0.state===k||String(c0.state||'').toLowerCase()===n.toLowerCase()))?'selected':''}>${n} (${k})</option>`}).join('')}</optgroup><optgroup label="Tất cả các bang">${US_STATES.map(([k,n])=>`<option value="${k}" ${(c0&&!POPULAR_STATES.includes(k)&&(c0.state===k||String(c0.state||'').toLowerCase()===n.toLowerCase()))?'selected':''}>${n} (${k})</option>`).join('')}</optgroup>${c0&&c0.state&&!US_STATES.some(([k,n])=>k===c0.state||n.toLowerCase()===String(c0.state).toLowerCase())?`<option value="${esc(c0.state)}" selected>${esc(c0.state)}</option>`:''}</select></div>
      ${F('usAddr','Địa chỉ công ty tại Mỹ (số nhà, đường, suite)',v('usAddr'),'full')}
      ${F('usCity','Thành phố (City)',v('usCity'))}${F('usZip','Mã ZIP',v('usZip'))}
      <div class="full fsec">Công ty tại nước khác (nếu có)</div>
      ${F('otherCo','Tên công ty',v('otherCo'))}${F('otherCountry','Quốc gia',v('otherCountry'))}
      ${F('otherAddr','Địa chỉ công ty',v('otherAddr'),'full')}
      <div class="full dnote" style="margin-top:-6px">Bỏ trống nếu khách không có công ty ở nước thứ ba.</div>
      <div class="full fsec">Thông tin khác</div>
      ${F('deps','Người phụ thuộc',v('deps'))}${F('opened','Ngày mở hồ sơ',c0?v('opened'):fmtTime(new Date().toISOString()).slice(0,10))}
      ${F('charter','Vốn điều lệ',v('charter'))}${F('reg','Đăng ký doanh nghiệp',v('reg'))}
      ${F('owners','Chủ sở hữu / thành viên góp vốn',v('owners'),'full')}${F('addr','Trụ sở',v('addr'),'full')}
      <div class="fld full"><label for="f-note">Ghi chú hồ sơ</label><textarea id="f-note">${v('note')}</textarea></div>
      <div class="full" style="display:flex;gap:8px"><button class="btn primary" type="submit">${c0?'Lưu thay đổi':'Tạo hồ sơ'}</button><button class="btn" type="button" data-act="close">Huỷ</button></div>
    </form>`;
  }
}
async function submitClient(e){
  e.preventDefault();if(!R.canWrite){toast('Bạn đang ở chế độ chỉ xem.');return}
  const g=k=>($('f-'+k)?$('f-'+k).value.trim():'');
  const isNew=DR.arg==='new';
  const data={name:g('name'),company:g('company'),companyEn:g('companyEn'),mst:g('mst'),industry:g('industry'),office:'IDC VIETNAM',staff:g('staff'),opt:g('opt')||'?',us:g('us'),state:g('state'),usAddr:g('usAddr'),usCity:g('usCity'),usZip:g('usZip'),otherCo:g('otherCo'),otherCountry:g('otherCountry'),otherAddr:g('otherAddr'),deps:g('deps'),opened:g('opened'),charter:g('charter'),reg:g('reg'),owners:g('owners'),addr:g('addr'),note:g('note')};
  if(!data.name){toast('Nhập tên đương đơn.');return}
  if(isNew){
    const id=g('id').toUpperCase();if(!/^[A-Z0-9][A-Z0-9-]{2,30}$/.test(id)){toast('Mã hồ sơ chỉ gồm chữ, số và dấu gạch (ví dụ L1A-0023).');return}
    const err=await createClient(id,data);if(err){toast(err);return}
    closeDrawer();S.view='case';S.client=id;S.tab='missing';setHash();render();toast('Đã tạo hồ sơ '+id);
  } else {
    const c=getC(S.client);const patch=Object.assign({},data);
    if(data.opt!==c.opt){const docs={};DOCS.filter(d=>d.op).forEach(d=>{const s=stOf(c,d.code);if(s==='na'||s==='missing')docs[d.code]={s:data.opt==='B'?'missing':'na',note:data.opt==='A'?'Công ty Mỹ mới thành lập':data.opt==='B'?'':'Tạm không áp dụng – chờ chọn phương án A/B'}});patch.docs=docs}
    if(await updateClient(c,patch,'Sửa thông tin hồ sơ')){closeDrawer();toast('Đã lưu thông tin')}
  }
}

/* ---------- events ---------- */
let upTarget=null,armed=null;
document.addEventListener('click',async e=>{
  const t=e.target.closest('button,[data-open],[data-drop],tr[data-doc]');if(!t)return;
  const ds=t.dataset;const c=getC(S.client);
  if(ds.go){S.view=ds.go;S.client=null;closeDrawer();setHash();if(ds.go==='admin'){loadStaff();loadLogins();if(BELL.open)toggleBell(false)}if(ds.go==='report')loadReportFiles();if(ds.go==='trash'){TR.rows=null;loadTrash()}render();window.scrollTo(0,0);return}
  if(ds.staffdel){const r=await R.sb.from('staff').delete().eq('email',ds.staffdel);if(r.error)toast(dbErr(r.error));else{toast('Đã gỡ '+ds.staffdel);loadStaff()}return}
  if(ds.docdel!==undefined){t.closest('tr').remove();return}
  if(ds.asgall){const bx=[...document.querySelectorAll(`[data-asg][data-role="${ds.asgall}"]`)];const all=bx.every(x=>x.checked);bx.forEach(x=>x.checked=!all);$('asg-n')&&document.getElementById('dr-body').onchange();return}
  if(ds.assignopen){S.view='case';S.client=ds.assignopen;S.tab='missing';setHash();render();setTimeout(()=>openDrawer('assign'),50);return}
  if(ds.open){S.view='case';S.client=ds.open;S.tab=stats(getC(ds.open)).missing?'missing':'review';S.q='';$('q').value='';setHash();render();window.scrollTo(0,0);return}
  if(ds.filter){S.filter=ds.filter;S.page=1;return render()}
  if(ds.pg){S.page=+ds.pg;render();const t2=document.querySelector('.kpis+.card')||document.querySelector('.card');if(t2)t2.scrollIntoView({block:'start',behavior:'smooth'});return}
  if(ds.pgcust!==undefined){S.colOpen=!S.colOpen;return render()}
  if(ds.colreset!==undefined){try{localStorage.removeItem('idc_cols')}catch(_){}return render()}
  if(ds.tab){S.tab=ds.tab;return render()}
  if(ds.dept!==undefined){S.dept=ds.dept;return render()}
  if(ds.step&&c){const n=+ds.step;if(n>=2&&(c.step||1)===1){const st=stats(c);const left=st.req-st.approved;if(left>0&&!confirm(`Còn ${left} tài liệu bắt buộc chưa được duyệt. Vẫn chuyển hồ sơ sang Bước ${n}?`))return}if(n!==(c.step||1))await updateClient(c,{step:n},`Chuyển sang bước ${n}: ${STEPS[n-1].t}`);return}
  if(ds.drop||ds.pick){if(!R.canWrite)return;upTarget=ds.drop||ds.pick;$('file').value='';$('file').click();return}
  if(ds.doc){openDrawer('doc',ds.doc);return}
  if(ds.view){openDrawer('file',ds.view);return}
  if(ds.dlf&&c){const f=(R.files[c.id]||[]).find(x=>x._id===ds.dlf);if(f)downloadFile(c,f);return}
  if(ds.trrestore){restoreTrash(ds.trrestore);return}
  if(ds.trview){const f=(TR.rows||[]).find(x=>x.id===ds.trview);if(f){try{window.open(await signedUrl({path:f.storage_path}),'_blank','noopener')}catch(err){toast(err.message)}}return}
  if(ds.trpurge){if(trArmed!==ds.trpurge){trArmed=ds.trpurge;t.classList.add('armed');t.innerHTML='Xoá hẳn?';t.title='Bấm lần nữa để xoá vĩnh viễn';setTimeout(()=>{if(trArmed===ds.trpurge){trArmed=null;render()}},4000);return}trArmed=null;purgeTrash([ds.trpurge]);return}
  if(ds.del&&c){if(armed!==ds.del){armed=ds.del;t.classList.add('btn','danger','armed');t.innerHTML='Xoá?';t.title='Bấm lần nữa để chuyển tệp vào Thùng rác (giữ 60 ngày)';setTimeout(()=>{if(armed===ds.del){armed=null;render();refreshDrawer()}},4000);return}armed=null;const f=(R.files[c.id]||[]).find(x=>x._id===ds.del);if(f)deleteFile(c,f);return}
  if(ds.setst&&c){await setStatus(c,ds.code,ds.setst);refreshDrawer();return}
  if(ds.ask&&c){openDrawer('doc',ds.ask);setTimeout(()=>{const n=$('dr-note');if(n){n.focus();n.placeholder='Ghi rõ cần khách bổ sung gì, rồi bấm “Lưu ghi chú” và chọn Còn thiếu.'}},250);return}
  if(ds.savenote&&c){await saveNote(c,ds.savenote,$('dr-note').value.trim());return}
  switch(ds.act){
    case 'close':return closeDrawer();
    case 'logout':return logout();
    case 'addDoc':{const tb=$('docrows');const tr=tb.rows[tb.rows.length-1].cloneNode(true);tr.querySelectorAll('input').forEach(i=>{if(i.type==='checkbox')i.checked=false;else i.value=''});tb.appendChild(tr);tr.querySelector('input').focus();return}
    case 'saveNotify':{const list=id=>[...new Set($(id).value.split(/[\s,;]+/).map(x=>x.trim().toLowerCase()).filter(Boolean))];const bad=[...list('n-instant'),...list('n-digest')].filter(e=>!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e));if(bad.length){toast('Email không hợp lệ: '+bad.join(', '));return}const v=Object.assign({},R.notify,{enabled:$('n-on').checked,email:$('n-email').checked,zalo:$('n-zalo').checked,zalo_groups:$('n-groups').value.split(/[\s,;]+/).map(x=>x.trim()).filter(Boolean),from:$('n-from').value.trim()||R.notify.from,instant:list('n-instant'),digest:list('n-digest')});const r=await R.sb.from('settings').upsert({key:'notify',value:v,updated_by:R.email});if(r.error){toast(dbErr(r.error));return}R.notify=v;toast(v.enabled?'Đã lưu · thông báo đang bật':'Đã lưu · thông báo đang tắt');render();return}
    case 'testNotify':{const r=await R.sb.rpc('notify_test');if(r.error){toast('Chưa gửi được: '+r.error.message);return}toast('Đã gửi thử tới '+(r.data||R.email)+'. Kiểm tra email (cả mục Spam) và Zalo sau 1–2 phút.');return}
    case 'saveProgram':{const p=readProgramForm();const codes=p.docs.map(d=>d.code);if(new Set(codes).size!==codes.length){toast('Mã tài liệu bị trùng.');return}const r=await R.sb.from('settings').upsert({key:'program_l1a',value:p,updated_by:R.email});if(r.error){toast(dbErr(r.error));return}applyProgram(p);toast('Đã lưu cấu hình');render();return}
    case 'newClient':return openDrawer('client','new');
    case 'editClient':return openDrawer('client','edit');
    case 'assign':return openDrawer('assign');
    case 'reportCsv':return reportCsv();
    case 'saveAssign':{const list=[...document.querySelectorAll('[data-asg]')].filter(x=>x.checked).map(x=>x.dataset.asg);const due=($('asg-due')||{}).value||'';const msg='Phân công: '+(list.length?list.map(personName).join(', '):'bỏ phân công')+(due!==(c.due||'')?` · hạn ${due?fmtDate(due):'mặc định'}`:'');if(await updateClient(c,{assignees:list,due},msg)){closeDrawer();toast('Đã lưu phân công')}return}
    case 'exportExcel':return exportExcel();
    case 'zip':return zipCase(c);
    case 'receipt':return openReceipt(c);
    case 'notice':return openReceipt(c,'tb');
    case 'checklistCsv':return saveFile(`${c.id}_Checklist-L1A.csv`,checklistCSV(c));
    case 'emailTxt':return saveFile(`${c.id}_Email-bo-sung-ho-so.txt`,emailText(c));
    case 'copyEmail':{try{await navigator.clipboard.writeText(emailText(c));toast('Đã sao chép email')}catch(_){const r=document.createRange();r.selectNodeContents($('mailbody'));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);toast('Đã chọn nội dung – nhấn Ctrl/Cmd + C')}return}
  }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();if((e.key==='Enter'||e.key===' ')&&e.target.dataset&&e.target.dataset.drop){e.preventDefault();e.target.click()}});
document.addEventListener('submit',async e=>{if(e.target.id==='cform')return submitClient(e);
  if(e.target.id==='msform'){e.preventDefault();const c=getC(S.client);if(c)await saveMs(c);return}
  if(e.target.id==='loginform'){e.preventDefault();$('l-btn').disabled=true;$('l-err').textContent='';const err=await login($('l-email').value.trim(),$('l-pass').value);if(err){$('l-err').textContent=err;$('l-btn').disabled=false}return}
  if(e.target.id==='staffform'){e.preventDefault();const email=$('s-email').value.trim().toLowerCase();const r=await R.sb.from('staff').upsert({email,name:$('s-name').value.trim(),role:$('s-role').value});if(r.error)toast(dbErr(r.error));else{toast('Đã thêm '+email);loadStaff()}return}});
document.addEventListener('change',async e=>{const el=e.target;if(!el.dataset)return;
  if(el.dataset.staffrole){const r=await R.sb.from('staff').update({role:el.value}).eq('email',el.dataset.staffrole);toast(r.error?dbErr(r.error):'Đã đổi quyền');}
  if(el.dataset.staffname!==undefined&&el.dataset.staffname){const v=el.value.trim();const r=await R.sb.from('staff').update({name:v||null}).eq('email',el.dataset.staffname);toast(r.error?dbErr(r.error):'Đã đổi tên: '+(v||'(trống)'));if(!r.error){const u=R.staff.find(x=>x.email===el.dataset.staffname);if(u)u.name=v;if(el.dataset.staffname===R.email)R.name=v;BELL.names[el.dataset.staffname.toLowerCase()]=v}return}
  if(el.dataset.staffnotify){const r=await R.sb.from('staff').update({notify:el.checked}).eq('email',el.dataset.staffnotify);toast(r.error?dbErr(r.error):(el.checked?'Đã bật thông báo cho ':'Đã tắt thông báo cho ')+el.dataset.staffnotify);if(!r.error)loadStaff();}
  if(el.dataset.staffzalo!==undefined&&el.dataset.staffzalo){const v=el.value.trim();const r=await R.sb.from('staff').update({zalo_chat_id:v||null}).eq('email',el.dataset.staffzalo);toast(r.error?dbErr(r.error):'Đã lưu Zalo chat ID');if(!r.error)loadStaff();}
});
document.addEventListener('change',async e=>{const el=e.target;if(el.dataset&&el.dataset.pay){const c=getC(S.client);const v=Math.max(0,parseFloat(String(el.value).replace(/[^\d.]/g,''))||0);const p=PAY.find(x=>x.k===el.dataset.pay);if(+((c.pay||{})[p.k]||0)!==v&&await updateClient(c,{pay:{[p.k]:v}},`${p.n}: đã thu ${usd(v)} USD`))toast('Đã lưu thanh toán '+p.n)}});
['dragover','dragenter'].forEach(ev=>document.addEventListener(ev,e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(z){e.preventDefault();z.classList.add('over')}}));
document.addEventListener('dragleave',e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(z)z.classList.remove('over')});
document.addEventListener('drop',e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(!z)return;e.preventDefault();z.classList.remove('over');const c=getC(S.client);if(c&&e.dataTransfer.files.length)uploadFiles(c,z.dataset.drop,e.dataTransfer.files)});
$('file').addEventListener('change',e=>{const c=getC(S.client);if(c&&upTarget)uploadFiles(c,upTarget,e.target.files);upTarget=null});
$('scrim').addEventListener('click',closeDrawer);
$('q').addEventListener('input',e=>{S.q=e.target.value;S.page=1;if(S.view==='case'&&!['all','missing','received','review','approved'].includes(S.tab))S.tab='all';render();$('q').focus()});
function setHash(){try{history.replaceState(null,'','#'+(S.view==='case'?S.client:S.view))}catch(_){}}
(function boot(){const h=(location.hash||'').slice(1);if(h==='admin'||h==='report'||h==='trash')S.view=h;else if(/^[A-Za-z0-9-]+$/.test(h)&&h!=='clients'){S.view='case';S.client=h}render();initRuntime()})();

document.addEventListener('change',e=>{if(e.target&&e.target.id==='ms-premium'){const b=document.querySelector('.ms-pp');if(b)b.hidden=!e.target.value}});

document.addEventListener('change',e=>{if(e.target&&e.target.id==='lg-f'){S.lgf=e.target.value;render()}});

document.addEventListener('change',e=>{const t=e.target;if(!t)return;
  if(t.id==='pg-per'){PG.per=+t.value;S.page=1;render();return}
  if(t.dataset&&t.dataset.col){const on=new Set(PG.cols);t.checked?on.add(t.dataset.col):on.delete(t.dataset.col);PG.cols=CL_COLS.filter(x=>on.has(x.k)).map(x=>x.k);render()}});
document.addEventListener('click',e=>{if(S.colOpen&&!e.target.closest('.pg-cust')){S.colOpen=false;render()}});

/* ---------- Trao đổi (chat) ---------- */
const CH={open:false,tab:'case',room:null,rooms:[],msgs:{},unread:{},ready:false,err:'',newGroup:false,edit:false,ment:new Map(),sugg:null};
const chatTot=()=>Object.values(CH.unread).reduce((a,b)=>a+b,0);
function chatRoomOf(kind,key){return CH.rooms.find(r=>r.kind===kind&&(kind==='case'?r.client_id===key:false))}
function chatTitle(r){if(!r)return'';if(r.kind==='case'){const c=getC(r.client_id);return `${r.client_id}${c&&c.name?' · '+c.name:''}`}if(r.kind==='group')return r.name||'Nhóm';const o=(r.members||[]).find(e=>e!==R.email);return personName(o)}
function chatPeople(r){if(!r)return[];const adm=(R.people||[]).filter(p=>p.role==='admin').map(p=>p.email);let l=[];
  if(r.kind==='case'){const c=getC(r.client_id);l=[...assigneesOf(c||{}),...adm]}else l=r.members||[];return [...new Set(l.map(e=>String(e).toLowerCase()))]}
async function chatInit(){
  if(CH.ready||!R.sb||!R.email)return;CH.ready=true;
  ensureChatDom();await chatLoadRooms();await chatLoadUnread();
  R.sb.channel('idc-chat').on('postgres_changes',{event:'INSERT',schema:'public',table:'chat_messages'},p=>chatLive(p.new))
    .on('postgres_changes',{event:'*',schema:'public',table:'chat_rooms'},()=>chatLoadRooms().then(chatRender)).subscribe();
  chatRender();
}
function chatReset(){CH.ready=false;CH.open=false;CH.room=null;CH.rooms=[];CH.msgs={};CH.unread={};const f=document.getElementById('chatfab');if(f)f.hidden=true;const p=document.getElementById('chatpanel');if(p)p.hidden=true}
async function chatLoadRooms(){const r=await R.sb.from('chat_rooms').select('*').order('last_at',{ascending:false});if(r.error){CH.err=r.error.message;return}CH.err='';CH.rooms=(r.data||[]).map(x=>Object.assign(x,{members:(x.members||[]).map(e=>String(e).toLowerCase())}))}
async function chatLoadUnread(){const r=await R.sb.rpc('chat_unread');if(r.error)return;CH.unread={};(r.data||[]).forEach(x=>{CH.unread[x.room_id]=+x.n});chatBadge()}
async function chatLoadMsgs(id){const r=await R.sb.from('chat_messages').select('*').eq('room_id',id).order('id',{ascending:false}).limit(150);if(r.error){toast(dbErr(r.error));return}CH.msgs[id]=(r.data||[]).slice().reverse()}
async function chatOpenRoom(id){CH.room=id;CH.open=true;CH.newGroup=false;CH.edit=false;CH.ment=new Map();chatRender();if(!CH.msgs[id])await chatLoadMsgs(id);delete CH.unread[id];chatBadge();chatRender(true);R.sb.rpc('chat_mark_read',{p_room:id})}
async function chatOpenCase(cid){const ex=chatRoomOf('case',cid);if(ex)return chatOpenRoom(ex.id);const r=await R.sb.rpc('chat_case_room',{p_client:cid});if(r.error){toast(dbErr(r.error));return}await chatLoadRooms();chatOpenRoom(r.data)}
async function chatOpenDm(email){const r=await R.sb.rpc('chat_dm_room',{p_email:email});if(r.error){toast(dbErr(r.error));return}await chatLoadRooms();chatOpenRoom(r.data)}
function chatLive(m){
  if(!m)return;const room=CH.rooms.find(r=>r.id===m.room_id);
  if(!room){chatLoadRooms().then(()=>{if(CH.rooms.find(r=>r.id===m.room_id))chatLive(m)});return}
  room.last_at=m.created_at;room.last_text=String(m.body).slice(0,160);room.last_by=m.author;CH.rooms.sort((a,b)=>String(b.last_at).localeCompare(String(a.last_at)));
  if(CH.msgs[m.room_id]&&!CH.msgs[m.room_id].some(x=>x.id===m.id))CH.msgs[m.room_id].push(m);
  const mine=String(m.author).toLowerCase()===R.email;
  if(CH.open&&CH.room===m.room_id&&!document.hidden){if(!mine)R.sb.rpc('chat_mark_read',{p_room:m.room_id});chatRender(true);return}
  if(!mine){CH.unread[m.room_id]=(CH.unread[m.room_id]||0)+1;chatBadge();
    const ment=(m.mentions||[]).map(e=>String(e).toLowerCase()).includes(R.email);
    const msg=`${personName(m.author)}${ment?' nhắc bạn':''} · ${chatTitle(room)}: ${String(m.body).slice(0,90)}`;
    if(document.hidden&&('Notification' in window)&&Notification.permission==='granted'){try{const n=new Notification('IDC Portal · Tin nhắn',{body:msg,tag:'idc-chat-'+m.room_id});n.onclick=()=>{window.focus();chatOpenRoom(m.room_id);n.close()}}catch(_){}}
    else if(!(CH.open&&CH.room===m.room_id))toast(msg)}
  chatRender();
}
function chatBadge(){const f=document.getElementById('chatfab');if(!f)return;const n=chatTot();f.hidden=!(R.email&&R.role&&!R.err);const b=f.querySelector('.cf-n');b.textContent=n>99?'99+':String(n);b.hidden=!n;f.setAttribute('aria-label',n?`Trao đổi: ${n} tin chưa đọc`:'Trao đổi')}
function ensureChatDom(){
  if(document.getElementById('chatfab'))return;
  const f=document.createElement('button');f.type='button';f.id='chatfab';f.className='chatfab';f.hidden=true;f.innerHTML=`${I('chat',22)}<span class="cf-l">Trao đổi</span><span class="cf-n" hidden></span>`;document.body.appendChild(f);
  const p=document.createElement('section');p.id='chatpanel';p.className='chatpanel';p.hidden=true;p.setAttribute('aria-label','Trao đổi');document.body.appendChild(p);
}
const chatTime=t=>{const d=new Date(t),n=new Date(),p=x=>String(x).padStart(2,'0');return d.toDateString()===n.toDateString()?`${p(d.getHours())}:${p(d.getMinutes())}`:`${p(d.getDate())}/${p(d.getMonth()+1)}`};
function chatBodyHTML(m,room){let h=esc(m.body);const ppl=chatPeople(room).concat(m.mentions||[]);
  [...new Set(ppl)].map(e=>personName(e)).filter(Boolean).sort((a,b)=>b.length-a.length).forEach(nm=>{const k='@'+esc(nm);h=h.split(k).join(`<b class="cm-ment">${k}</b>`)});
  return h.replace(/\n/g,'<br>').replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')}
function chatListHTML(){
  const un=id=>CH.unread[id]||0;
  const tabs=[['case','Hồ sơ'],['group','Nhóm'],['dm','Riêng']].map(([k,l])=>{const n=CH.rooms.filter(r=>r.kind===k).reduce((a,r)=>a+un(r.id),0);return `<button class="ch-tab${CH.tab===k?' on':''}" data-chtab="${k}">${l}${n?`<span class="ch-n">${n}</span>`:''}</button>`}).join('');
  const item=(id,title,sub,last,at,n,av,attr)=>`<button class="ch-item${n?' un':''}" ${attr}><span class="ch-av ${av.cls}">${av.t}</span><span class="ch-mid"><b>${esc(title)}</b><span>${last?esc(last):`<i>${esc(sub)}</i>`}</span></span><span class="ch-end">${at?`<time>${chatTime(at)}</time>`:''}${n?`<span class="ch-n">${n}</span>`:''}</span></button>`;
  let body='';
  if(CH.tab==='case'){
    const cs=R.clients.slice().sort((a,b)=>{const ra=chatRoomOf('case',a.id),rb=chatRoomOf('case',b.id);return String(rb?rb.last_at:'').localeCompare(String(ra?ra.last_at:''))||a.id.localeCompare(b.id)});
    body=cs.length?cs.map(c=>{const r=chatRoomOf('case',c.id);const lb=r&&r.last_text?`${r.last_by===R.email?'Bạn':personName(r.last_by)}: ${r.last_text}`:'';return item(c.id,`${c.id} · ${c.name||''}`,'Chưa có trao đổi',lb,r&&r.last_text?r.last_at:'',r?un(r.id):0,{cls:'case',t:esc(initials(c.name))},`data-chcase="${esc(c.id)}"`)}).join(''):'<div class="ch-empty">Bạn chưa được phân hồ sơ nào.</div>';
  }else if(CH.tab==='group'){
    const gs=CH.rooms.filter(r=>r.kind==='group');
    body=(CH.newGroup?chatGroupForm(null):`<button class="ch-new" data-chnewgroup>${I('plus',15)}Tạo nhóm mới</button>`)+
      (gs.length?gs.map(r=>item(r.id,r.name||'Nhóm',`${r.members.length} thành viên`,r.last_text?`${r.last_by===R.email?'Bạn':personName(r.last_by)}: ${r.last_text}`:'',r.last_text?r.last_at:'',un(r.id),{cls:'grp',t:I('users',16)},`data-chroom="${r.id}"`)).join(''):(CH.newGroup?'':'<div class="ch-empty">Chưa có nhóm nào. Tạo nhóm để trao đổi chung với nhiều người.</div>'));
  }else{
    const dms=CH.rooms.filter(r=>r.kind==='dm');const withDm=new Set(dms.map(r=>(r.members||[]).find(e=>e!==R.email)));
    const others=(R.people||[]).filter(p=>p.email!==R.email&&!withDm.has(p.email));
    body=dms.map(r=>{const o=(r.members||[]).find(e=>e!==R.email);return item(r.id,personName(o),'',r.last_text?`${r.last_by===R.email?'Bạn: ':''}${r.last_text}`:'',r.last_text?r.last_at:'',un(r.id),{cls:'dm',t:esc(initials(personName(o)))},`data-chroom="${r.id}"`)}).join('')+
      (others.length?`<div class="ch-sec">Bắt đầu nhắn riêng</div>`+others.map(p=>item(p.email,personName(p.email),ROLE_VI[p.role]||'','','',0,{cls:'dm off',t:esc(initials(personName(p.email)))},`data-chdm="${esc(p.email)}"`)).join(''):'');
  }
  return `<div class="ch-h"><b>Trao đổi</b><button class="icon-btn" data-chclose aria-label="Đóng">${I('x')}</button></div><div class="ch-tabs" role="tablist">${tabs}</div>${CH.err?`<div class="banner warn" style="margin:10px">${I('alert')}<div>Chưa cài phần Trao đổi trên Supabase (chạy supabase/chat.sql). <span class="dnote">${esc(CH.err)}</span></div></div>`:''}<div class="ch-list">${body}</div>`;
}
function chatGroupForm(r){
  const sel=new Set(r?r.members:[R.email]);
  return `<form class="ch-gform" id="chgform" data-room="${r?r.id:''}"><label class="dnote" for="chg-name">Tên nhóm</label><input id="chg-name" value="${esc(r?r.name||'':'')}" placeholder="VD: Team hồ sơ TP.HCM" maxlength="80" required>
    <div class="dnote" style="margin-top:8px">Thành viên</div><div class="ch-gpeople">${(R.people||[]).map(p=>`<label><input type="checkbox" value="${esc(p.email)}" ${sel.has(p.email)?'checked':''} ${p.email===R.email&&!r?'disabled':''}>${esc(personName(p.email))} <span class="dnote">${esc(ROLE_VI[p.role]||'')}</span></label>`).join('')}</div>
    <div class="ch-gact"><button type="button" class="btn sm" data-chgcancel>Huỷ</button><button class="btn sm primary" type="submit">${r?'Lưu':'Tạo nhóm'}</button></div></form>`;
}
function chatThreadHTML(){
  const r=CH.rooms.find(x=>x.id===CH.room);if(!r){CH.room=null;return chatListHTML()}
  const ms=CH.msgs[r.id];const ppl=chatPeople(r);
  const sub=r.kind==='case'?`${ppl.length} người · người phụ trách + Quản trị`:r.kind==='group'?`${r.members.length} thành viên`:'Tin nhắn riêng';
  const canEdit=r.kind==='group'&&(R.isAdmin||r.created_by===R.email);
  let last='',html='';
  (ms||[]).forEach(m=>{const d=new Date(m.created_at).toDateString();if(d!==last){last=d;html+=`<div class="cm-day"><span>${fmtDate(m.created_at)}</span></div>`}
    const mine=String(m.author).toLowerCase()===R.email;
    html+=`<div class="cm${mine?' me':''}">${mine?'':`<span class="ch-av sm">${esc(initials(personName(m.author)))}</span>`}<div class="cm-b">${mine?'':`<b>${esc(personName(m.author))}</b>`}<div class="cm-t">${chatBodyHTML(m,r)}</div><time>${chatTime(m.created_at)}</time></div></div>`});
  return `<div class="ch-h"><button class="icon-btn" data-chback aria-label="Quay lại">${I('chl',18)}</button><div class="ch-ht"><b>${esc(chatTitle(r))}</b><span title="${esc(ppl.map(personName).join(', '))}">${esc(sub)}</span></div>${r.kind==='case'?`<button class="icon-btn" data-open="${esc(r.client_id)}" title="Mở hồ sơ">${I('folder',16)}</button>`:''}${canEdit?`<button class="icon-btn" data-chedit title="Sửa nhóm">${I('edit',16)}</button>`:''}${r.kind==='group'&&!canEdit&&r.members.includes(R.email)?`<button class="icon-btn" data-chleave title="Rời nhóm">${I('undo',16)}</button>`:''}<button class="icon-btn" data-chclose aria-label="Đóng">${I('x')}</button></div>
    ${CH.edit?chatGroupForm(r):''}
    <div class="ch-msgs" id="ch-msgs">${ms?(html||`<div class="ch-empty">Chưa có tin nhắn. Gõ <b>@</b> để nhắc tên người cần đọc.</div>`):'<div class="ch-empty">Đang tải…</div>'}</div>
    <form class="ch-in" id="chform"><div class="ch-sugg" id="ch-sugg" hidden></div><textarea id="ch-text" rows="1" placeholder="Nhập tin nhắn… (gõ @ để nhắc tên, Enter để gửi)" maxlength="4000"></textarea><button class="btn primary" type="submit" aria-label="Gửi">${I('send',16)}</button></form>`;
}
function chatRender(scroll){
  chatBadge();const p=document.getElementById('chatpanel');if(!p)return;p.hidden=!CH.open;if(!CH.open)return;
  const ta=document.getElementById('ch-text');const draft=ta?ta.value:'';const hadFocus=document.activeElement===ta;const box=document.getElementById('ch-msgs');const atBottom=!box||box.scrollHeight-box.scrollTop-box.clientHeight<60;
  p.innerHTML=CH.room?chatThreadHTML():chatListHTML();
  const t2=document.getElementById('ch-text');if(t2){t2.value=draft;if(hadFocus||scroll)t2.focus();chatGrow(t2)}
  const b2=document.getElementById('ch-msgs');if(b2&&(scroll||atBottom))b2.scrollTop=b2.scrollHeight;
}
const chatGrow=t=>{t.style.height='auto';t.style.height=Math.min(140,t.scrollHeight)+'px'};
async function chatSend(){
  const t=document.getElementById('ch-text');const body=(t.value||'').trim();if(!body||!CH.room)return;
  const ments=[...CH.ment.entries()].filter(([nm])=>body.includes('@'+nm)).map(([,e])=>e);
  t.value='';chatGrow(t);CH.ment=new Map();
  const r=await R.sb.rpc('chat_send',{p_room:CH.room,p_body:body,p_mentions:ments});
  if(r.error){toast(dbErr(r.error));t.value=body;return}
  if(!CH.msgs[CH.room]||!CH.msgs[CH.room].some(x=>x.id===r.data)){await chatLoadMsgs(CH.room)}
  chatRender(true);
}
function chatSuggest(t){
  const box=document.getElementById('ch-sugg');if(!box)return;const pos=t.selectionStart,before=t.value.slice(0,pos),m=/(^|\s)@([^\s@]*)$/.exec(before);
  if(!m){box.hidden=true;CH.sugg=null;return}
  const q=m[2].toLowerCase();const r=CH.rooms.find(x=>x.id===CH.room);
  const list=chatPeople(r).filter(e=>e!==R.email).map(e=>({e,n:personName(e)})).filter(x=>!q||x.n.toLowerCase().includes(q)||x.e.includes(q)).slice(0,6);
  if(!list.length){box.hidden=true;CH.sugg=null;return}
  CH.sugg={start:pos-m[2].length-1,end:pos,list,i:0};
  box.innerHTML=list.map((x,i)=>`<button type="button" class="${i===0?'on':''}" data-chment="${i}"><span class="ch-av sm">${esc(initials(x.n))}</span>${esc(x.n)}</button>`).join('');box.hidden=false;
}
function chatPick(i){const t=document.getElementById('ch-text');const s=CH.sugg;if(!t||!s)return;const x=s.list[i];const ins='@'+x.n+' ';
  t.value=t.value.slice(0,s.start)+ins+t.value.slice(s.end);const c=s.start+ins.length;t.setSelectionRange(c,c);t.focus();CH.ment.set(x.n,x.e);CH.sugg=null;document.getElementById('ch-sugg').hidden=true}
document.addEventListener('click',async e=>{
  const g=s=>e.target.closest(s);
  if(g('#chatfab')){CH.open=!CH.open;if(CH.open&&!CH.room)chatLoadUnread();chatRender(true);return}
  if(!g('#chatpanel')&&!g('[data-chatcase]'))return;
  let b;
  if((b=g('[data-chatcase]'))){chatOpenCase(b.dataset.chatcase);return}
  if(g('[data-chclose]')){CH.open=false;chatRender();return}
  if(g('[data-chback]')){CH.room=null;CH.edit=false;chatRender();return}
  if((b=g('[data-chtab]'))){CH.tab=b.dataset.chtab;CH.newGroup=false;chatRender();return}
  if((b=g('[data-chcase]'))){chatOpenCase(b.dataset.chcase);return}
  if((b=g('[data-chroom]'))){chatOpenRoom(b.dataset.chroom);return}
  if((b=g('[data-chdm]'))){chatOpenDm(b.dataset.chdm);return}
  if(g('[data-chnewgroup]')){CH.newGroup=true;chatRender();setTimeout(()=>{const n=document.getElementById('chg-name');n&&n.focus()},0);return}
  if(g('[data-chgcancel]')){CH.newGroup=false;CH.edit=false;chatRender();return}
  if(g('[data-chedit]')){CH.edit=!CH.edit;chatRender();return}
  if(g('[data-chleave]')){const r=await R.sb.rpc('chat_leave_group',{p_room:CH.room});if(r.error){toast(dbErr(r.error));return}CH.room=null;await chatLoadRooms();chatRender();toast('Đã rời nhóm');return}
  if((b=g('[data-chment]'))){chatPick(+b.dataset.chment);return}
});
document.addEventListener('submit',async e=>{
  if(e.target.id==='chform'){e.preventDefault();chatSend();return}
  if(e.target.id==='chgform'){e.preventDefault();const f=e.target;const name=f.querySelector('#chg-name').value.trim();const mem=[...f.querySelectorAll('input[type=checkbox]:checked')].map(x=>x.value);const rid=f.dataset.room;
    const r=rid?await R.sb.rpc('chat_update_group',{p_room:rid,p_name:name,p_members:mem}):await R.sb.rpc('chat_create_group',{p_name:name,p_members:mem});
    if(r.error){toast(dbErr(r.error));return}CH.newGroup=false;CH.edit=false;await chatLoadRooms();if(!rid&&r.data)chatOpenRoom(r.data);else chatRender();toast(rid?'Đã lưu nhóm':'Đã tạo nhóm '+name)}
});
document.addEventListener('input',e=>{if(e.target&&e.target.id==='ch-text'){chatGrow(e.target);chatSuggest(e.target)}});
document.addEventListener('keydown',e=>{
  if(e.target&&e.target.id==='ch-text'){
    if(CH.sugg){if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();CH.sugg.i=(CH.sugg.i+(e.key==='ArrowDown'?1:CH.sugg.list.length-1))%CH.sugg.list.length;document.querySelectorAll('#ch-sugg button').forEach((b,i)=>b.classList.toggle('on',i===CH.sugg.i));return}
      if(e.key==='Enter'||e.key==='Tab'){e.preventDefault();chatPick(CH.sugg.i);return}if(e.key==='Escape'){CH.sugg=null;document.getElementById('ch-sugg').hidden=true;return}}
    if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();chatSend()}}
  else if(e.key==='Escape'&&CH.open&&!BELL.open){CH.open=false;chatRender()}
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&CH.open&&CH.room&&CH.unread[CH.room]){delete CH.unread[CH.room];chatBadge();R.sb.rpc('chat_mark_read',{p_room:CH.room})}});
