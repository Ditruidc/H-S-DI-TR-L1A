
/* ---------- helpers ---------- */
const P={users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
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
clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'};
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
let STEPS=[{t:'Thẩm định & chứng từ',d:'2–4 tuần'},{t:'Nộp I-129 · Phỏng vấn',d:'5–9 tháng'},{t:'Nhận visa L-1A',d:'≥ 12 tháng'},{t:'I-140 · I-485',d:'12–24 tháng'},{t:'Thẻ xanh EB-1C',d:'Thẻ 10 năm'}];
let PAY=[{k:'d1',n:'Đợt 1',w:'Khi ký hợp đồng & mở hồ sơ',a:19000},{k:'d2',n:'Đợt 2',w:'Khi nộp I-129',a:20000},{k:'d3',n:'Đợt 3',w:'Khi nhận visa L-1A',a:15255},{k:'d4',n:'Đợt 4',w:'Khi nộp I-140 / I-485',a:18245},{k:'d5',n:'Đợt 5',w:'Sau khi nhận thẻ xanh',a:5000}];
const ST={missing:['Còn thiếu','s-missing'],review:['Chờ duyệt','s-review'],approved:['Đã duyệt','s-approved'],na:['Không áp dụng','s-na']};
const OFFICES=['TP.HCM','Hà Nội','Đà Nẵng','Buôn Ma Thuột','Hoa Kỳ'];
const OK_TYPES={'application/pdf':'pdf','image/png':'png','image/jpeg':'jpg','image/webp':'webp'};
const EXT_TYPE={pdf:'application/pdf',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',webp:'image/webp'};

/* ---------- state ---------- */
const CFG=window.APP_CONFIG||{};
const BUCKET=CFG.BUCKET||'hoso';
const S={view:'clients',client:null,tab:'missing',q:'',filter:'all'};
const R={sb:null,session:null,email:null,role:null,canWrite:false,isAdmin:false,ready:false,err:null,clients:[],files:{},filesFor:null,urls:{},staff:[]};
const getC=id=>R.clients.find(c=>c.id===id);
const stOf=(c,code)=>(c.docs&&c.docs[code]&&c.docs[code].s)||'missing';
function stats(c){const o={approved:0,review:0,missing:0,na:0};DOCS.forEach(d=>o[stOf(c,d.code)]++);o.req=DOCS.length-o.na;o.pct=o.req?Math.round(o.approved/o.req*100):0;return o}
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
  if(!R.session){R.email=null;R.clients=[];R.files={};R.ready=true;if(channel){R.sb.removeChannel(channel);channel=null}render();return}
  R.email=(R.session.user.email||'').toLowerCase();R.ready=false;render();
  const me=await R.sb.from('staff').select('email,role,name').eq('email',R.email).maybeSingle();
  if(me.error||!me.data){R.role=null;R.canWrite=false;R.ready=true;R.err=me.error?{message:me.error.message}:{code:'not_staff'};render();return}
  R.role=me.data.role;R.isAdmin=me.data.role==='admin';R.canWrite=me.data.role!=='viewer';R.err=null;
  const st=await R.sb.from('settings').select('value').eq('key','program_l1a').maybeSingle();
  if(st.data&&st.data.value)applyProgram(st.data.value);
  await loadClients();
  if(S.view==='admin')loadStaff();
  if(!channel){channel=R.sb.channel('hoso-live')
    .on('postgres_changes',{event:'*',schema:'public',table:'clients'},()=>loadClients())
    .on('postgres_changes',{event:'*',schema:'public',table:'files'},p=>{const cid=(p.new&&p.new.client_id)||(p.old&&p.old.client_id);if(cid&&cid===R.filesFor)loadFiles(cid,true)})
    .subscribe()}
}
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
  R.files[id]=r.data.map(rowToFile);render();refreshDrawer();
}
async function signedUrl(f){
  const k=f.path,c=R.urls[k];if(c&&c.exp>Date.now()+60000)return c.url;
  const r=await R.sb.storage.from(BUCKET).createSignedUrl(f.path,3600);
  if(r.error)throw new Error('Không mở được tệp: '+r.error.message);
  R.urls[k]={url:r.data.signedUrl,exp:Date.now()+3600*1000};return r.data.signedUrl;
}
async function login(email,password){
  const r=await R.sb.auth.signInWithPassword({email,password});
  if(r.error)return r.error.message==='Invalid login credentials'?'Email hoặc mật khẩu không đúng.':r.error.message;
  return null;
}
async function logout(){await R.sb.auth.signOut();location.hash=''}
const whoHTML=e=>e?`<span>${esc(String(e).split('@')[0])}</span>`:'—';

/* ---------- writes ---------- */
function dbErr(e){const m=(e&&e.message)||'';if(/row-level security|permission/i.test(m))return'Bạn không có quyền sửa dữ liệu này.';return'Chưa lưu được: '+(m||'lỗi không rõ')+'. Thử lại.'}
async function updateClient(c,patch,logMsg){
  if(!R.canWrite){toast('Bạn đang ở chế độ chỉ xem.');return false}
  const r=await R.sb.rpc('patch_client',{p_id:c.id,p_patch:patch||{},p_log:logMsg||null});
  if(r.error){toast(dbErr(r.error));return false}
  await loadClients();return true;
}
async function setStatus(c,code,s,note){
  const cur=(c.docs||{})[code]||{};
  const ok=await updateClient(c,{docs:{[code]:{s,note:note!==undefined?note:(cur.note||''),at:new Date().toISOString(),by:R.email}}},`${code} → ${ST[s][0]}${note?': '+note:''}`);
  if(ok)toast(`${code}: ${ST[s][0]}`);
}
async function saveNote(c,code,note){
  const cur=(c.docs||{})[code]||{};
  if(await updateClient(c,{docs:{[code]:{s:cur.s||'missing',note,at:new Date().toISOString(),by:R.email}}},`${code}: cập nhật ghi chú`))toast('Đã lưu ghi chú');
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
  const d=await R.sb.from('files').delete().eq('id',f._id);
  if(d.error){toast(dbErr(d.error));return}
  await R.sb.storage.from(BUCKET).remove([f.path]);
  await loadFiles(c.id);
  const cc=getC(c.id)||c;
  await updateClient(cc,{},`${f.code}: xoá tệp ${f.name}`);
  if(!filesOf(cc,f.code).length&&stOf(cc,f.code)==='review')await setStatus(getC(c.id)||cc,f.code,'missing');
  toast('Đã xoá '+f.name);
}
async function createClient(id,data){
  const now=new Date().toISOString();
  const r=await R.sb.from('clients').insert({id,data:Object.assign(data,{program:'L-1A',step:1,docs:defaultDocs(data.opt),pay:{}}),log:[{t:now,by:R.email,m:'Tạo hồ sơ'}]});
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
    for(const f of all){const d=DOC[f.code];try{root.folder(GROUPS[d?d.group:'VN'].folder).file(dlName(c,f).replace(c.id+'_',''),await fetchBlob(f))}catch(_){fail.push(f.code+' – '+f.name)}}
    root.file(`00_Checklist_${c.id}.csv`,checklistCSV(c));
    if(fail.length){root.file('00_KHONG_DOC_DUOC.txt','Các tệp sau không đọc được khi đóng gói:\r\n'+fail.join('\r\n'));toast(`${fail.length} tệp không đọc được, xem 00_KHONG_DOC_DUOC.txt trong ZIP.`)}
    saveFile(`${c.id}_${slug(c.name||'')}_HoSo-L1A.zip`,await z.generateAsync({type:'blob'}))
  }catch(e){toast('Đóng gói thất bại: '+(e.message||e))}
}
const csvCell=v=>`"${String(v??'').replace(/"/g,'""')}"`;
function checklistCSV(c){return '\ufeff'+[['Mã','Tài liệu','Nhóm','Trạng thái','Ghi chú','Tệp'].map(csvCell).join(','),...DOCS.map(d=>[d.code,d.name,GROUPS[d.group].short,ST[stOf(c,d.code)][0],((c.docs||{})[d.code]||{}).note||'',filesOf(c,d.code).map(f=>f.name).join(' | ')].map(csvCell).join(','))].join('\r\n')}
async function exportExcel(){
  if(!window.XLSX){toast('Chưa tải được thư viện Excel.');return}
  const kh=[['Mã HS','Đương đơn','Công ty VN','Tên công ty (EN)','Mã số DN','Ngành','Văn phòng','Phương án','Bước','Chuyên viên','Ngày mở','Người phụ thuộc','Pháp nhân tại Mỹ','Bang','Vốn điều lệ','Đăng ký DN','Chủ sở hữu / thành viên','Trụ sở','Ghi chú','Đã thu (USD)','Đã duyệt','Chờ duyệt','Còn thiếu','Cập nhật']];
  const ck=[['Mã HS','Mã TL','Tài liệu','Nhóm','Trạng thái','Ghi chú','Số tệp','Cập nhật']];
  const tt=[['Mã HS','Đợt','Thời điểm','Số tiền (USD)','Đã thu (USD)']];
  R.clients.forEach(c=>{const s=stats(c);
    kh.push([c.id,c.name,c.company,c.companyEn,c.mst,c.industry,c.office,c.opt,c.step,c.staff,c.opened,c.deps,c.us,c.state,c.charter,c.reg,c.owners,c.addr,c.note,paidOf(c),s.approved,s.review,s.missing,fmtTime(c.updatedAt)]);
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
  const first=String(c.name||'').split(' ').slice(-1)[0];
  return `Kính gửi Anh/Chị ${first},

IDC VIETNAM cập nhật tình trạng hồ sơ ${c.id} (L-1A → EB-1C). Hồ sơ đang ở bước ${c.step||1}/5: ${STEPS[(c.step||1)-1].t}.

${miss.length?`Để luật sư kịp thẩm định, Anh/Chị vui lòng bổ sung ${miss.length} tài liệu sau:\n\n${byG}`:'Toàn bộ tài liệu bắt buộc đã đủ. Cảm ơn Anh/Chị đã phối hợp.'}

Lưu ý khi gửi:
  • Tất cả tài liệu cần bản dịch tiếng Anh kèm bản gốc.
  • Bản scan thẳng, rõ nét, định dạng PDF; đặt tên theo mã tài liệu (ví dụ ${c.id}_VN-01_Giay-phep-kinh-doanh.pdf).

Nếu cần hỗ trợ, Anh/Chị liên hệ chuyên viên ${c.staff||'phụ trách'} – văn phòng ${c.office||'IDC VIETNAM'}.

Trân trọng,
${c.staff||'IDC VIETNAM'}
IDC VIETNAM`;
}

/* ---------- rendering ---------- */
function navs(){
  const n=R.clients.length,logged=!!R.email&&!R.err;
  $('nav-main').innerHTML=logged?`<button data-go="clients" aria-current="${S.view!=='admin'}">${I('users')}Hồ sơ khách hàng<span class="ct">${n}</span></button>`+(R.isAdmin?`<button data-go="admin" aria-current="${S.view==='admin'}">${I('edit')}Quản trị</button>`:''):'';
  $('nav-prog').innerHTML=`<button data-go="clients" aria-current="false">${I('folder')}L-1A → EB-1C<span class="ct">${logged?n:''}</span></button>`+['EB-5','E-2','Du học Mỹ'].map(p=>`<button disabled>${I('folder')}${p}<span class="soon">Sắp có</span></button>`).join('');
  $('nav-mobile').innerHTML=`<div class="logo">IDC</div>`+(logged?`<button class="chip" data-go="clients" aria-pressed="${S.view!=='admin'}">Hồ sơ</button>${R.isAdmin?`<button class="chip" data-go="admin" aria-pressed="${S.view==='admin'}">Quản trị</button>`:''}<button class="chip" data-act="logout">Đăng xuất</button>`:'');
  $('side-foot').innerHTML=R.email?`<div class="dotline"><span class="dot ${R.err?'bad':'ok'}"></span><b>${esc(R.email)}</b></div><span>${R.isAdmin?'Quản trị viên':R.canWrite?'Nhân viên · được chỉnh sửa':'Chỉ xem'}</span><button class="btn sm" data-act="logout" style="margin-top:6px">Đăng xuất</button>`:`<div class="dotline"><span class="dot warn"></span><b>Chưa đăng nhập</b></div><span>Chỉ nhân viên IDC VIETNAM được cấp tài khoản mới truy cập được.</span>`;
}
function crumbs(){
  const c=S.client&&getC(S.client);
  $('crumbs').innerHTML=`<span>Hồ sơ định cư</span><span class="sep">/</span>`+(S.view==='case'&&c?`<button class="row-link" data-go="clients" style="font-weight:500;color:var(--muted)">L-1A → EB-1C</button><span class="sep">/</span><b class="mono">${esc(c.id)}</b>`:`<b>L-1A → EB-1C</b>`);
}
function render(){navs();crumbs();if(R.ready&&!R.email&&R.sb){vLogin();return}if(R.err&&R.ready){$('view').innerHTML=vEmpty();return}if(S.view==='admin'&&R.isAdmin){vAdmin();return}if(S.view==='case'&&getC(S.client))vCase();else{if(S.view==='case'&&R.ready&&R.clients.length&&!getC(S.client)){S.view='clients'}vClients()}}

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
function vAdmin(){
  const groupSel=v=>`<select data-k="group">${Object.keys(GROUPS).map(g=>`<option value="${g}" ${g===v?'selected':''}>${GROUPS[g].short}</option>`).join('')}</select>`;
  const inp=(k,v,w)=>`<input data-k="${k}" value="${esc(v)}" style="width:${w||'100%'}">`;
  $('view').innerHTML=`
  <div class="phead"><div><div class="eyebrow">Quản trị</div><h1>Cấu hình portal</h1><p>Quản lý nhân viên được đăng nhập, danh mục tài liệu, các bước lộ trình và mức phí của chương trình L-1A → EB-1C.</p></div></div>
  <section class="card"><div class="card-h"><h3>Nhân viên</h3><span class="sp dnote">Tạo mật khẩu cho nhân viên trong Supabase → Authentication → Add user, rồi thêm email tại đây.</span></div>
    <div class="tbl-wrap"><table><thead><tr><th>Email</th><th>Tên</th><th>Quyền</th><th></th></tr></thead><tbody id="staffrows">${R.staff.map(u=>`<tr><td>${esc(u.email)}</td><td>${esc(u.name||'')}</td><td><select data-staffrole="${esc(u.email)}">${[['admin','Quản trị'],['staff','Nhân viên'],['viewer','Chỉ xem']].map(([k,l])=>`<option value="${k}" ${u.role===k?'selected':''}>${l}</option>`).join('')}</select></td><td class="r">${u.email===R.email?'<span class="dnote">Bạn</span>':`<button class="btn sm ghost danger" data-staffdel="${esc(u.email)}">Gỡ</button>`}</td></tr>`).join('')}</tbody></table></div>
    <form id="staffform" class="card-b" style="display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid var(--border)"><input id="s-email" type="email" placeholder="email@congty.com" required style="flex:1 1 220px;border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><input id="s-name" placeholder="Tên hiển thị" style="flex:1 1 160px;border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><select id="s-role" style="border:1px solid var(--border-strong);border-radius:8px;padding:7px 10px;background:var(--bg)"><option value="staff">Nhân viên</option><option value="viewer">Chỉ xem</option><option value="admin">Quản trị</option></select><button class="btn primary" type="submit">${I('plus')}Thêm nhân viên</button></form>
  </section>
  <section class="card"><div class="card-h"><h3>Danh mục tài liệu</h3><div class="sp"><button class="btn sm" data-act="addDoc">${I('plus',14)}Thêm tài liệu</button></div></div>
    <div class="tbl-wrap"><table class="cfg"><thead><tr><th>Mã</th><th>Nhóm</th><th>Tên tài liệu</th><th>Tên tiếng Anh</th><th>Phân loại</th><th>Yêu cầu</th><th>Kỳ dữ liệu</th><th title="Chỉ áp dụng khi công ty Mỹ đang hoạt động (phương án B)">Chỉ PA B</th><th></th></tr></thead><tbody id="docrows">${DOCS.map((d,i)=>`<tr data-i="${i}"><td>${inp('code',d.code,'72px')}</td><td>${groupSel(d.group)}</td><td>${inp('name',d.name,'220px')}</td><td>${inp('en',d.en,'180px')}</td><td>${inp('cat',d.cat,'96px')}</td><td>${inp('note',d.note,'220px')}</td><td>${inp('period',d.period,'130px')}</td><td><input type="checkbox" data-k="op" ${d.op?'checked':''}></td><td><button class="icon-btn" data-docdel="${i}" aria-label="Xoá ${esc(d.code)}">${I('trash')}</button></td></tr>`).join('')}</tbody></table></div></section>
  <div class="two">
    <section class="card"><div class="card-h"><h3>Lộ trình 5 bước</h3></div><div class="tbl-wrap"><table><tbody id="steprows">${STEPS.map((x,i)=>`<tr><td class="mono">${i+1}</td><td><input data-k="t" value="${esc(x.t)}" style="width:100%"></td><td><input data-k="d" value="${esc(x.d)}" style="width:120px"></td></tr>`).join('')}</tbody></table></div></section>
    <section class="card"><div class="card-h"><h3>Các đợt thanh toán (USD)</h3></div><div class="tbl-wrap"><table><tbody id="payrows">${PAY.map(p=>`<tr data-k="${p.k}"><td><input data-k="n" value="${esc(p.n)}" style="width:70px"></td><td><input data-k="w" value="${esc(p.w)}" style="width:100%"></td><td><input data-k="a" value="${p.a}" style="width:90px;text-align:right" inputmode="numeric"></td></tr>`).join('')}</tbody></table></div></section>
  </div>
  <div style="display:flex;gap:8px"><button class="btn primary" data-act="saveProgram">${I('check')}Lưu cấu hình</button><button class="btn" data-act="exportExcel">${I('sheet')}Xuất toàn bộ dữ liệu (Excel)</button></div>`;
}
function readProgramForm(){
  const docs=[...document.querySelectorAll('#docrows tr')].map(tr=>{const g=k=>tr.querySelector(`[data-k="${k}"]`);return{code:g('code').value.trim().toUpperCase(),group:g('group').value,name:g('name').value.trim(),en:g('en').value.trim(),cat:g('cat').value.trim(),note:g('note').value.trim(),period:g('period').value.trim(),op:g('op').checked}}).filter(d=>d.code&&d.name);
  const steps=[...document.querySelectorAll('#steprows tr')].map(tr=>({t:tr.querySelector('[data-k="t"]').value.trim(),d:tr.querySelector('[data-k="d"]').value.trim()}));
  const pay=[...document.querySelectorAll('#payrows tr')].map(tr=>({k:tr.dataset.k,n:tr.querySelector('[data-k="n"]').value.trim(),w:tr.querySelector('[data-k="w"]').value.trim(),a:parseFloat(tr.querySelector('[data-k="a"]').value.replace(/[^\d.]/g,''))||0}));
  return{docs,steps,pay};
}
async function loadStaff(){const r=await R.sb.from('staff').select('*').order('email');R.staff=r.data||[];if(S.view==='admin')render()}
function vClients(){
  const q=S.q.trim().toLowerCase();
  const all=R.clients;
  const list=all.filter(c=>{const s=stats(c);if(S.filter==='missing'&&!s.missing)return false;if(S.filter==='review'&&!s.review)return false;if(S.filter==='done'&&(s.missing||s.review))return false;return !q||[c.id,c.name,c.company,c.staff,c.office].join(' ').toLowerCase().includes(q)});
  let miss=0,rev=0,appr=0,req=0;all.forEach(c=>{const s=stats(c);miss+=s.missing;rev+=s.review;appr+=s.approved;req+=s.req});
  const cnt=k=>all.filter(c=>{const s=stats(c);return k==='missing'?s.missing:k==='review'?s.review:k==='done'?!s.missing&&!s.review:true}).length;
  $('view').innerHTML=`
  <div class="phead"><div><div class="eyebrow">Chương trình · L-1A → EB-1C</div><h1>Hồ sơ khách hàng</h1><p>Chọn một hồ sơ để xem những tài liệu còn thiếu, tải tệp lên, duyệt và tải hồ sơ về.</p></div>
   <div class="actions"><button class="btn" data-act="exportExcel" ${all.length?'':'disabled'}>${I('sheet')}Xuất Excel</button>${R.canWrite?`<button class="btn primary" data-act="newClient">${I('plus')}Thêm hồ sơ</button>`:''}</div></div>
  ${all.length?`<section class="kpis">
    <div class="kpi"><div class="eyebrow">Hồ sơ</div><div class="v num">${all.length}</div><div class="s">${all.filter(c=>(c.step||1)===1).length} hồ sơ đang thu thập chứng từ</div></div>
    <div class="kpi"><div class="eyebrow">Tài liệu còn thiếu</div><div class="v num" style="color:var(--bad)">${miss}</div><div class="s">Cần khách bổ sung</div></div>
    <div class="kpi"><div class="eyebrow">Chờ duyệt</div><div class="v num" style="color:var(--warn)">${rev}</div><div class="s">Đã có tệp, chờ kiểm tra</div></div>
    <div class="kpi"><div class="eyebrow">Đã duyệt</div><div class="v num" style="color:var(--ok)">${req?Math.round(appr/req*100):0}%</div><div class="s">${appr}/${req} tài liệu bắt buộc</div></div>
  </section>
  <section class="card">
    <div class="card-h"><div class="chips">${[['all','Tất cả'],['missing','Còn thiếu tài liệu'],['review','Có tài liệu chờ duyệt'],['done','Đã đủ']].map(([k,l])=>`<button class="chip" data-filter="${k}" aria-pressed="${S.filter===k}">${l}<span class="n">${cnt(k)}</span></button>`).join('')}</div></div>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Khách hàng</th><th>Mã hồ sơ</th><th>Tiến trình</th><th>Tài liệu</th><th class="r">Còn thiếu</th><th class="r">Chờ duyệt</th><th>Chuyên viên</th><th>Cập nhật</th></tr></thead>
      <tbody>${list.length?list.map(c=>{const s=stats(c),w=x=>(s.req?x/s.req*100:0).toFixed(1)+'%';return `<tr class="click" data-open="${esc(c.id)}">
        <td><div class="who"><div class="av">${esc(initials(c.name))}</div><div style="min-width:0"><button class="row-link" data-open="${esc(c.id)}">${esc(c.name||'—')}</button><div class="dnote">${esc(c.company||'')}</div></div></div></td>
        <td class="mono">${esc(c.id)}</td>
        <td><div class="stepdots">${[1,2,3,4,5].map(i=>`<i class="${i<=(c.step||1)?'on':''}"></i>`).join('')}</div><div class="dnote" style="margin-top:4px">Bước ${c.step||1} · ${STEPS[(c.step||1)-1].t}</div></td>
        <td><div class="bar"><i class="a" style="width:${w(s.approved)}"></i><i class="r" style="width:${w(s.review)}"></i><i class="m" style="width:${w(s.missing)}"></i></div><div class="dnote num" style="margin-top:4px">${s.approved}/${s.req} đã duyệt</div></td>
        <td class="r">${s.missing?`<span class="count-bad num">${s.missing}</span>`:`<span class="count-ok">${I('check',12)}</span>`}</td>
        <td class="r num">${s.review||'—'}</td>
        <td>${esc(c.staff||'—')}<div class="dnote">${esc(c.office||'')}</div></td>
        <td class="dnote">${fmtTime(c.updatedAt)||'—'}</td></tr>`}).join(''):`<tr><td colspan="8" class="empty">Không có hồ sơ khớp bộ lọc.</td></tr>`}</tbody>
    </table></div>
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
    ${fs.length?`<div class="files">${fs.map(f=>`<button class="fchip" data-view="${f._id}">${I('file',14)}<span>${esc(f.name)}</span><em>${fmtSize(f.size)}</em></button>`).join('')}</div>`:''}
    ${mode==='missing'?`<div class="drop ${busy?'busy':''} ${canUp?'':'locked'}" ${canUp?`data-drop="${d.code}" tabindex="0" role="button"`:''} aria-label="Tải tệp cho ${d.code}">${busy?`${I('clock')}Đang tải lên…`:canUp?`${I('up')}Kéo tệp vào đây hoặc <b>bấm để chọn</b> · PDF, JPG, PNG · tối đa 50 MB`:`${I('alert')}Cần quyền chỉnh sửa để tải lên`}</div>`:''}
    ${mode==='review'&&R.canWrite?`<div class="foot"><button class="btn sm ok" data-setst="approved" data-code="${d.code}">${I('check',14)}Duyệt</button><button class="btn sm" data-ask="${d.code}">${I('undo',14)}Yêu cầu bổ sung</button>${canUp?`<button class="btn sm ghost" data-pick="${d.code}">${I('plus',14)}Thêm tệp</button>`:''}</div>`:''}
    ${mode==='approved'&&R.canWrite?`<div class="foot"><span class="dnote">Duyệt ${fmtTime(x.at)}</span><button class="btn sm ghost" data-setst="review" data-code="${d.code}" style="margin-left:auto">${I('undo',14)}Bỏ duyệt</button></div>`:''}
  </article>`;
}
function groupedCards(c,codes,mode){
  return Object.keys(GROUPS).map(g=>{const ds=codes.filter(d=>d.group===g);if(!ds.length)return'';
    return `<div class="section-h"><h3>${GROUPS[g].full}</h3><span class="dnote">${ds.length} tài liệu</span></div><div class="docgrid">${ds.map(d=>docCard(c,d,mode)).join('')}</div>`}).join('');
}
function vCase(){
  const c=getC(S.client);const s=stats(c);const step=c.step||1;watchFiles(c.id);
  const q=S.q.trim().toLowerCase();const m=d=>!q||(d.code+' '+d.name+' '+d.en).toLowerCase().includes(q);
  const by=k=>DOCS.filter(d=>stOf(c,d.code)===k&&m(d));
  const tabs=[['missing','Cần bổ sung',s.missing,'bad'],['review','Chờ duyệt',s.review,'warn'],['approved','Đã duyệt',s.approved,'ok'],['all','Tất cả tài liệu',DOCS.length,''],['info','Thông tin & thanh toán','',''],['email','Email nhắc khách','','']];
  let body='';
  if(S.tab==='missing'){const l=by('missing');body=l.length?`<div class="banner" style="margin:16px 18px 0">${I('info')}<div>Mỗi thẻ là một tài liệu khách chưa nộp. Kéo tệp vào ô của thẻ (hoặc bấm vào ô) để lưu. Tệp lưu xong, tài liệu chuyển sang <b>Chờ duyệt</b>.</div></div>`+groupedCards(c,l,'missing'):`<div class="doneall">${I('check',20)}Không còn tài liệu bắt buộc nào thiếu.</div>`}
  else if(S.tab==='review'){const l=by('review');body=l.length?groupedCards(c,l,'review'):`<div class="empty"><b>Không có tài liệu chờ duyệt</b>Tệp mới tải lên sẽ xuất hiện ở đây.</div>`}
  else if(S.tab==='approved'){const l=by('approved');body=l.length?groupedCards(c,l,'approved'):`<div class="empty"><b>Chưa có tài liệu nào được duyệt</b></div>`}
  else if(S.tab==='all'){body=`<div class="tbl-wrap"><table><thead><tr><th>Mã</th><th>Tài liệu</th><th>Trạng thái</th><th>Tệp</th><th>Ghi chú</th><th>Cập nhật</th><th></th></tr></thead><tbody>${Object.keys(GROUPS).map(g=>{const ds=DOCS.filter(d=>d.group===g&&m(d));if(!ds.length)return'';return `<tr class="grp"><td colspan="7">${GROUPS[g].full}</td></tr>`+ds.map(d=>{const x=(c.docs||{})[d.code]||{},st=stOf(c,d.code),n=filesOf(c,d.code).length;return `<tr class="click" data-doc="${d.code}"><td class="mono">${d.code}</td><td style="min-width:220px"><div class="dname">${esc(d.name)} <span class="en">· ${esc(d.en)}</span></div></td><td><span class="pill ${ST[st][1]}">${ST[st][0]}</span></td><td class="num">${n?`${I('file',13)} ${n}`:'—'}</td><td class="dnote" style="max-width:240px">${esc(x.note||'')}</td><td class="dnote">${fmtTime(x.at)}</td><td class="r"><button class="btn sm ghost" data-doc="${d.code}">Mở</button></td></tr>`}).join('')}).join('')}</tbody></table></div>`}
  else if(S.tab==='info'){
    const info=[['Đương đơn',c.name],['Công ty Việt Nam',c.company],['Tên tiếng Anh',c.companyEn],['Mã số doanh nghiệp',c.mst],['Vốn điều lệ',c.charter],['Đăng ký doanh nghiệp',c.reg],['Chủ sở hữu / thành viên',c.owners],['Trụ sở',c.addr],['Ngành',c.industry],['Phương án',optLabel(c.opt)],['Pháp nhân tại Mỹ',[c.us,c.state].filter(Boolean).join(' · ')],['Người phụ thuộc',c.deps],['Văn phòng',c.office],['Chuyên viên',c.staff],['Ngày mở hồ sơ',c.opened]];
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
        <div class="meta"><span>${I('folder',14)}${esc(c.company||'—')}</span><span>${esc(c.office||'—')}</span><span>Chuyên viên: ${esc(c.staff||'chưa phân công')}</span><span>${esc(optLabel(c.opt))}</span></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px"><button class="btn primary" data-act="zip">${I('zip')}Tải trọn bộ ZIP</button><button class="btn" data-act="checklistCsv">${I('sheet')}Checklist .csv</button>${R.canWrite?`<button class="btn" data-act="editClient">${I('edit')}Sửa thông tin</button>`:''}</div>
      </div>
      <div class="ring">${ringSVG(s)}<div><div class="big num">${s.approved}<span class="muted" style="font-size:14px;font-weight:500"> / ${s.req}</span></div><div class="dnote">tài liệu bắt buộc đã duyệt</div><div class="small" style="margin-top:6px;display:flex;gap:10px;flex-wrap:wrap"><span class="pill s-missing">${s.missing} thiếu</span><span class="pill s-review">${s.review} chờ duyệt</span></div></div></div>
    </div>
    <div class="steps">${STEPS.map((x,i)=>`<div class="stp ${i+1<step?'done':i+1===step?'cur':''}">${R.canWrite?`<button data-step="${i+1}" title="Chuyển hồ sơ sang bước ${i+1}">`:'<div style="display:flex;gap:10px">'}<span class="n">${i+1<step?I('check',12):i+1}</span><span><b>${x.t}</b><span>${x.d}</span></span>${R.canWrite?'</button>':'</div>'}</div>`).join('')}</div>
  </section>
  <section class="card">
    <div class="tabs" role="tablist">${tabs.map(([k,l,n,cl])=>`<button class="tab" role="tab" data-tab="${k}" aria-selected="${S.tab===k}">${l}${n!==''?`<span class="c ${n&&cl?cl:''}">${n}</span>`:''}</button>`).join('')}</div>
    ${body}
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
      <div class="box"><h4>Trạng thái</h4><div class="seg" role="group" aria-label="Trạng thái">${Object.keys(ST).map(k=>`<button class="${k}" data-setst="${k}" data-code="${d.code}" aria-pressed="${st===k}" ${R.canWrite?'':'disabled'}>${ST[k][0]}</button>`).join('')}</div>${x.at?`<div class="dnote" style="margin-top:8px">Cập nhật ${fmtTime(x.at)} · ${whoHTML(x.by)}</div>`:''}</div>
      <div class="box"><h4>Tệp đã nộp (${fs.length})</h4><div class="files" style="padding:0">${fs.length?fs.map(f=>`<div style="display:flex;gap:6px;align-items:center"><button class="fchip" data-view="${f._id}">${I('file',14)}<span>${esc(f.name)}</span><em>${fmtSize(f.size)}${f.at?' · '+fmtTime(f.at):''}</em></button><button class="icon-btn" data-dlf="${f._id}" title="Tải xuống" aria-label="Tải ${esc(f.name)}">${I('down')}</button>${R.canWrite?`<button class="icon-btn" data-del="${f._id}" title="Xoá tệp" aria-label="Xoá ${esc(f.name)}">${I('trash')}</button>`:''}</div>`).join(''):'<span class="dnote">Chưa có tệp.</span>'}</div>
        ${canUp?`<div class="drop ${UP[d.code]?'busy':''}" data-drop="${d.code}" tabindex="0" role="button" style="margin:12px 0 0">${UP[d.code]?`${I('clock')}Đang tải lên…`:`${I('up')}Kéo tệp vào đây hoặc <b>bấm để chọn</b>`}</div>`:''}</div>
      <div class="box"><h4>Ghi chú cho tài liệu</h4><div class="fld"><textarea id="dr-note" placeholder="Ví dụ: Thiếu trang 3, cần bản dịch công chứng…" ${R.canWrite?'':'disabled'}>${esc(noteVal)}</textarea></div>${R.canWrite?`<div style="display:flex;gap:8px;margin-top:8px"><button class="btn sm primary" data-savenote="${d.code}">Lưu ghi chú</button></div>`:''}</div>`;
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
      <div class="fld"><label for="f-office">Văn phòng</label><select id="f-office">${OFFICES.map(o=>`<option ${c0&&c0.office===o?'selected':''}>${o}</option>`).join('')}</select></div>
      ${F('staff','Chuyên viên phụ trách',v('staff'))}
      <div class="fld"><label for="f-opt">Phương án đầu tư</label><select id="f-opt">${[['?','Chưa xác định'],['A','A · Mở mới doanh nghiệp tại Mỹ'],['B','B · Đã có doanh nghiệp tại Mỹ']].map(([k,l])=>`<option value="${k}" ${(c0?c0.opt:'?')===k?'selected':''}>${l}</option>`).join('')}</select></div>
      ${F('us','Pháp nhân tại Mỹ',v('us'))}${F('state','Bang',v('state'))}
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
  const data={name:g('name'),company:g('company'),companyEn:g('companyEn'),mst:g('mst'),industry:g('industry'),office:g('office'),staff:g('staff'),opt:g('opt')||'?',us:g('us'),state:g('state'),deps:g('deps'),opened:g('opened'),charter:g('charter'),reg:g('reg'),owners:g('owners'),addr:g('addr'),note:g('note')};
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
  if(ds.go){S.view=ds.go;S.client=null;closeDrawer();setHash();if(ds.go==='admin')loadStaff();render();window.scrollTo(0,0);return}
  if(ds.staffdel){const r=await R.sb.from('staff').delete().eq('email',ds.staffdel);if(r.error)toast(dbErr(r.error));else{toast('Đã gỡ '+ds.staffdel);loadStaff()}return}
  if(ds.docdel!==undefined){t.closest('tr').remove();return}
  if(ds.open){S.view='case';S.client=ds.open;S.tab=stats(getC(ds.open)).missing?'missing':'review';S.q='';$('q').value='';setHash();render();window.scrollTo(0,0);return}
  if(ds.filter){S.filter=ds.filter;return render()}
  if(ds.tab){S.tab=ds.tab;return render()}
  if(ds.step&&c){const n=+ds.step;if(n!==(c.step||1))await updateClient(c,{step:n},`Chuyển sang bước ${n}: ${STEPS[n-1].t}`);return}
  if(ds.drop||ds.pick){if(!R.canWrite)return;upTarget=ds.drop||ds.pick;$('file').value='';$('file').click();return}
  if(ds.doc){openDrawer('doc',ds.doc);return}
  if(ds.view){openDrawer('file',ds.view);return}
  if(ds.dlf&&c){const f=(R.files[c.id]||[]).find(x=>x._id===ds.dlf);if(f)downloadFile(c,f);return}
  if(ds.del&&c){if(armed!==ds.del){armed=ds.del;t.classList.add('btn','danger','armed');t.innerHTML='Xoá?';t.title='Bấm lần nữa để xoá';setTimeout(()=>{if(armed===ds.del){armed=null;refreshDrawer()}},3500);return}armed=null;const f=(R.files[c.id]||[]).find(x=>x._id===ds.del);if(f)deleteFile(c,f);return}
  if(ds.setst&&c){await setStatus(c,ds.code,ds.setst);refreshDrawer();return}
  if(ds.ask&&c){openDrawer('doc',ds.ask);setTimeout(()=>{const n=$('dr-note');if(n){n.focus();n.placeholder='Ghi rõ cần khách bổ sung gì, rồi bấm “Lưu ghi chú” và chọn Còn thiếu.'}},250);return}
  if(ds.savenote&&c){await saveNote(c,ds.savenote,$('dr-note').value.trim());return}
  switch(ds.act){
    case 'close':return closeDrawer();
    case 'logout':return logout();
    case 'addDoc':{const tb=$('docrows');const tr=tb.rows[tb.rows.length-1].cloneNode(true);tr.querySelectorAll('input').forEach(i=>{if(i.type==='checkbox')i.checked=false;else i.value=''});tb.appendChild(tr);tr.querySelector('input').focus();return}
    case 'saveProgram':{const p=readProgramForm();const codes=p.docs.map(d=>d.code);if(new Set(codes).size!==codes.length){toast('Mã tài liệu bị trùng.');return}const r=await R.sb.from('settings').upsert({key:'program_l1a',value:p,updated_by:R.email});if(r.error){toast(dbErr(r.error));return}applyProgram(p);toast('Đã lưu cấu hình');render();return}
    case 'newClient':return openDrawer('client','new');
    case 'editClient':return openDrawer('client','edit');
    case 'exportExcel':return exportExcel();
    case 'zip':return zipCase(c);
    case 'checklistCsv':return saveFile(`${c.id}_Checklist-L1A.csv`,checklistCSV(c));
    case 'emailTxt':return saveFile(`${c.id}_Email-bo-sung-ho-so.txt`,emailText(c));
    case 'copyEmail':{try{await navigator.clipboard.writeText(emailText(c));toast('Đã sao chép email')}catch(_){const r=document.createRange();r.selectNodeContents($('mailbody'));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);toast('Đã chọn nội dung – nhấn Ctrl/Cmd + C')}return}
  }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();if((e.key==='Enter'||e.key===' ')&&e.target.dataset&&e.target.dataset.drop){e.preventDefault();e.target.click()}});
document.addEventListener('submit',async e=>{if(e.target.id==='cform')return submitClient(e);
  if(e.target.id==='loginform'){e.preventDefault();$('l-btn').disabled=true;$('l-err').textContent='';const err=await login($('l-email').value.trim(),$('l-pass').value);if(err){$('l-err').textContent=err;$('l-btn').disabled=false}return}
  if(e.target.id==='staffform'){e.preventDefault();const email=$('s-email').value.trim().toLowerCase();const r=await R.sb.from('staff').upsert({email,name:$('s-name').value.trim(),role:$('s-role').value});if(r.error)toast(dbErr(r.error));else{toast('Đã thêm '+email);loadStaff()}return}});
document.addEventListener('change',async e=>{const el=e.target;if(el.dataset&&el.dataset.staffrole){const r=await R.sb.from('staff').update({role:el.value}).eq('email',el.dataset.staffrole);toast(r.error?dbErr(r.error):'Đã đổi quyền');}});
document.addEventListener('change',async e=>{const el=e.target;if(el.dataset&&el.dataset.pay){const c=getC(S.client);const v=Math.max(0,parseFloat(String(el.value).replace(/[^\d.]/g,''))||0);const p=PAY.find(x=>x.k===el.dataset.pay);if(+((c.pay||{})[p.k]||0)!==v&&await updateClient(c,{pay:{[p.k]:v}},`${p.n}: đã thu ${usd(v)} USD`))toast('Đã lưu thanh toán '+p.n)}});
['dragover','dragenter'].forEach(ev=>document.addEventListener(ev,e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(z){e.preventDefault();z.classList.add('over')}}));
document.addEventListener('dragleave',e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(z)z.classList.remove('over')});
document.addEventListener('drop',e=>{const z=e.target.closest&&e.target.closest('[data-drop]');if(!z)return;e.preventDefault();z.classList.remove('over');const c=getC(S.client);if(c&&e.dataTransfer.files.length)uploadFiles(c,z.dataset.drop,e.dataTransfer.files)});
$('file').addEventListener('change',e=>{const c=getC(S.client);if(c&&upTarget)uploadFiles(c,upTarget,e.target.files);upTarget=null});
$('scrim').addEventListener('click',closeDrawer);
$('q').addEventListener('input',e=>{S.q=e.target.value;if(S.view==='case'&&!['all','missing','review','approved'].includes(S.tab))S.tab='all';render();$('q').focus()});
function setHash(){try{history.replaceState(null,'','#'+(S.view==='case'?S.client:S.view))}catch(_){}}
(function boot(){const h=(location.hash||'').slice(1);if(h==='admin')S.view='admin';else if(/^[A-Za-z0-9-]+$/.test(h)&&h!=='clients'){S.view='case';S.client=h}render();initRuntime()})();
