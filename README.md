# IDC Case Portal · Hồ sơ L-1A → EB-1C

Cổng quản lý hồ sơ khách hàng của IDC VIETNAM: theo dõi tài liệu còn thiếu, tải lên / xem / tải xuống tệp, duyệt tài liệu, thanh toán, lịch sử cập nhật, xuất Excel và ZIP.

- **Giao diện:** trang tĩnh trong `public/` (HTML + JS thuần, không cần build).
- **Dữ liệu, đăng nhập, kho tệp:** Supabase (`supabase/schema.sql`).
- **Chạy web:** Vercel, tên miền `hoso.duhocidc.com`.

---

## Cài đặt lần đầu (khoảng 20 phút)

### 1. Tạo Supabase
1. Vào https://supabase.com → **Start your project** → đăng nhập bằng GitHub.
2. **New project** → tên `idc-hoso` → đặt **Database password** (lưu lại) → Region **Southeast Asia (Singapore)** → Create.
3. Khi project chạy xong: **SQL Editor → New query**, dán toàn bộ `supabase/schema.sql` → **Run**.
4. Dán tiếp nội dung file `seed.sql` (gửi riêng, không nằm trong repo vì có dữ liệu khách) → **Run**.
5. **Authentication → Users → Add user → Create new user**: nhập email quản trị + mật khẩu, tick **Auto Confirm User**.
6. **Authentication → Sign In / Providers**: tắt **Allow new users to sign up** (chỉ quản trị tạo tài khoản).
7. **Project Settings → API**: chép **Project URL** và **anon public key**.

### 2. Điền cấu hình
Sửa `public/config.js`:
```js
SUPABASE_URL: 'https://xxxx.supabase.co',
SUPABASE_ANON_KEY: 'eyJ...',
```
`anon key` được phép nằm trong trang web; dữ liệu vẫn được bảo vệ bằng đăng nhập + quyền trong `schema.sql`. **Không bao giờ** dán `service_role key` vào repo.

### 3. Đưa lên Vercel
1. https://vercel.com → đăng nhập bằng GitHub → **Add New → Project** → chọn repo này → **Deploy** (không cần chỉnh gì, `vercel.json` đã cấu hình).
2. **Settings → Domains** → thêm `hoso.duhocidc.com`. Vercel sẽ báo một bản ghi DNS, thường là:
   - Loại **CNAME**, tên **hoso**, giá trị **cname.vercel-dns.com**
3. Vào nơi quản lý DNS của `duhocidc.com`, thêm đúng bản ghi đó. Website chính không bị ảnh hưởng.
4. Supabase → **Authentication → URL Configuration** → Site URL: `https://hoso.duhocidc.com`.

---

## Dùng hằng ngày
- **Thêm nhân viên:** Supabase → Authentication → Add user (email + mật khẩu) → rồi vào portal **Quản trị → Nhân viên** thêm email và chọn quyền:
  - *Quản trị*: toàn quyền, sửa cấu hình.
  - *Nhân viên*: thêm/sửa hồ sơ, tải tệp, duyệt.
  - *Chỉ xem*: xem và tải xuống.
- **Sửa danh mục tài liệu, lộ trình, mức phí:** portal → **Quản trị** → sửa → **Lưu cấu hình**.
- **Sao lưu:** nút **Xuất Excel** (toàn bộ khách, checklist, thanh toán). Tệp nằm trong Supabase Storage, bucket `hoso`.

## Giới hạn & chi phí
- Tệp nhận: PDF, JPG, PNG, WEBP, tối đa 50 MB/tệp.
- Supabase Free: 500 MB cơ sở dữ liệu, **1 GB tệp** (~30 hồ sơ). Khi vượt: nâng Supabase Pro (~25 USD/tháng, 100 GB).
- Supabase Free tạm dừng project nếu **7 ngày không có ai truy cập**; mở lại bằng một cú bấm trong dashboard.

## Cấu trúc
```
public/
  index.html   khung trang
  styles.css   giao diện
  app.js       logic (đăng nhập, hồ sơ, tệp, quản trị)
  config.js    URL + anon key Supabase
supabase/
  schema.sql   bảng, quyền (RLS), kho tệp, hàm patch_client
vercel.json    cấu hình triển khai
```
