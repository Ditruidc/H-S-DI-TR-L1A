// Điền 2 giá trị lấy ở Supabase → Project Settings → API.
// "anon public key" được thiết kế để nằm ở trình duyệt; dữ liệu vẫn được bảo vệ bằng đăng nhập + quyền trong schema.sql.
window.APP_CONFIG = {
  SUPABASE_URL: '',        // ví dụ https://abcdxyz.supabase.co
  SUPABASE_ANON_KEY: '',   // chuỗi bắt đầu bằng eyJ...
  BUCKET: 'hoso'
};
