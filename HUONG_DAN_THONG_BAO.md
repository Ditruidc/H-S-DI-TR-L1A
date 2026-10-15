# Bật thông báo tệp mới (email + Zalo) cho portal hồ sơ

Sau khi cài đặt, portal tự báo qua email (và Zalo nếu bật) để mọi người không cần mở portal vẫn biết hồ sơ vừa có tệp mới:

- **Mỗi 5 phút:** gom các tệp mới tải lên theo từng hồ sơ thành 1 thông báo, gửi cho **mọi người có tài khoản portal** (nhân viên, sếp, luật sư…) đang bật **Nhận thông báo** trong bảng Nhân viên, cộng danh sách "Email nhận thêm" cho người ngoài portal. Người tự tải tệp lên không nhận thông báo về tệp của chính mình.
- **17:00 hằng ngày:** gửi thư tổng hợp tệp mới trong 24 giờ và số tài liệu đang chờ duyệt cho danh sách "Tổng hợp". Nếu danh sách này để trống thì gửi cho quản trị viên.
- **Nội dung thư** chỉ có mã hồ sơ, tên khách, mã tài liệu và link portal. Muốn xem tệp vẫn phải đăng nhập.

Thư được gửi qua dịch vụ **Resend**. Gói miễn phí cho 3.000 thư/tháng, tối đa 100 thư/ngày, đủ dùng cho portal.

---

## Bước 1. Tạo tài khoản Resend (người phụ trách IT tự làm)

1. Vào **resend.com**, bấm **Sign up** và đăng ký bằng email công ty.
2. Vào **Domains**, bấm **Add Domain** và nhập `ditruidc.com`.
3. Resend hiện ra 3–4 **bản ghi DNS** (loại TXT và MX). Gửi nguyên danh sách này cho team web để thêm tại nơi quản lý tên miền (PA Vietnam), giống lần thêm CNAME cho `hoso`.
4. Khi các bản ghi đã thêm xong, quay lại Resend và bấm **Verify**. Đợi trạng thái chuyển sang **Verified**, thường vài phút đến vài giờ.
5. Vào **API Keys**, bấm **Create API Key**, quyền chọn **Sending access**, rồi **sao chép khoá** (bắt đầu bằng `re_`). Khoá này chỉ hiện một lần.

> Khoá API là thông tin bí mật. Không gửi qua chat, Zalo hay email. Chỉ dán vào Supabase ở bước 2.

## Bước 2. Lưu khoá vào Supabase

1. Vào **supabase.com**, mở project của portal, chọn **SQL Editor** và bấm **New query**.
2. Dán dòng dưới đây, **thay `re_xxx` bằng khoá vừa sao chép**, rồi bấm **Run**:

   ```sql
   select vault.create_secret('re_xxx', 'resend_api_key');
   ```

   Nếu sau này cần đổi khoá: `select vault.update_secret((select id from vault.secrets where name='resend_api_key'), 're_moi');`

## Bước 3. Cài phần gửi thư

1. Vẫn trong **SQL Editor**, mở query mới.
2. Mở tệp `supabase/notify.sql` trong kho GitHub, sao chép **toàn bộ** nội dung, dán vào và bấm **Run**. Chạy lại nhiều lần cũng không sao.
3. Khi chạy xong sẽ có 2 lịch tự động: `idc-notify-uploads` chạy mỗi 5 phút và `idc-notify-digest` chạy lúc 17:00. Kiểm tra bằng lệnh `select * from cron.job;`.

## Bước 4. Bật trong portal

1. Đăng nhập portal bằng tài khoản quản trị, vào **Quản trị**.
2. Trong bảng **Nhân viên**, cột **Nhận thông báo** mặc định bật cho tất cả. Bỏ chọn ai không muốn nhận. Muốn sếp hoặc luật sư nhận thông báo thì thêm họ vào bảng này (quyền Quản trị hoặc Chỉ xem), sau khi đã tạo tài khoản cho họ trong Supabase.
3. Trong mục **Thông báo tệp mới**:
   - Nếu có người cần nhận nhưng không có tài khoản portal, nhập email vào **Email nhận thêm**.
   - Nhập danh sách **Nhận thư tổng hợp 17:00**, ví dụ sếp và kế toán.
   - Kiểm tra **Email gửi từ**: mặc định là `IDC VIETNAM <thongbao@ditruidc.com>`. Đuôi email ở đây phải đúng tên miền đã xác minh ở bước 1.
4. Đánh dấu **Bật thông báo** và **Gửi qua email**, bấm **Lưu thông báo**, rồi bấm **Gửi thử cho tôi**. Sau 1–2 phút, kiểm tra hộp thư, xem cả mục Spam.

## Bước 5. Thử thật

Tải 1 tệp bất kỳ vào một hồ sơ thử. Nên dùng tài khoản khác với chuyên viên phụ trách, vì người tự tải tệp lên không nhận thư về tệp của mình. Thư sẽ đến trong khoảng **5–8 phút**.

---

## Bước 6 (tuỳ chọn). Gửi thêm qua Zalo

Dùng **Zalo Bot Platform** (miễn phí). Bot gửi tin nhắn riêng cho từng người, nên mỗi người phải nhắn cho bot trước 1 lần.

1. Vào **bot.zaloplatforms.com**, đăng nhập bằng tài khoản Zalo của người quản lý, tạo bot (ví dụ tên "IDC Hồ sơ") và sao chép **Bot Token**, dạng `số:chuỗi`.
2. Lưu token vào Supabase giống bước 2: `select vault.create_secret('TOKEN_CUA_BOT', 'zalo_bot_token');`
3. Mỗi người muốn nhận thông báo tìm bot trên Zalo (quét mã QR của bot) và nhắn **"hi"**.
4. Lấy **chat ID** của từng người: mở trình duyệt, vào `https://bot-api.zaloplatforms.com/botTOKEN_CUA_BOT/getUpdates`, tìm mục `"chat": {"id": "…"}` đi kèm tên người vừa nhắn.
5. Nhập chat ID đó vào cột **Zalo chat ID** của từng người trong bảng Nhân viên.
6. Trong **Thông báo tệp mới**, đánh dấu **Gửi thêm qua Zalo**, bấm **Lưu**, rồi bấm **Gửi thử cho tôi**.

> Tính năng bot của Zalo còn mới và đang được Zalo hoàn thiện. Nếu bước 4 không ra chat ID, hoặc bot không vào được nhóm, hãy gửi ảnh chụp màn hình cho người phụ trách kỹ thuật để điều chỉnh. Ô **Chat ID nhóm Zalo** chỉ dùng được nếu bot thêm được vào nhóm.

## Khi không nhận được thư

| Hiện tượng | Kiểm tra |
|---|---|
| Bấm "Gửi thư thử" báo lỗi *Chưa có khoá resend_api_key* | Làm lại bước 2 |
| Không có thư, không báo lỗi | Chạy `select status_code, content from net._http_response order by created desc limit 5;` · mã **200** là đã gửi · **401/403** là khoá sai hoặc tên miền chưa Verified |
| Thư vào mục Spam | Các bản ghi DNS ở bước 1 chưa đủ hoặc chưa Verified |
| Một người không nhận được | Cột **Nhận thông báo** của người đó đang tắt, hoặc chính người đó vừa tải tệp |
| Không có tin Zalo | Chưa bật **Gửi thêm qua Zalo**, chưa có token `zalo_bot_token`, hoặc chat ID trống/sai |
| Muốn tạm dừng | Quản trị → Thông báo email → bỏ chọn **Bật thông báo email** → Lưu |
