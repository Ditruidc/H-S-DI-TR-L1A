// Điền 2 giá trị lấy ở Supabase → Project Settings → API.
// "anon public key" được thiết kế để nằm ở trình duyệt; dữ liệu vẫn được bảo vệ bằng đăng nhập + quyền trong schema.sql.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://ihcngkdqrrgjaafdwhdq.supabase.co',        // ví dụ https://abcdxyz.supabase.co
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloY25na2RxcnJnamFhZmR3aGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1Mjc5NzIsImV4cCI6MjEwNzEwMzk3Mn0.PgDwXj5i2m-49pWAk5wKMRVd_Dpijv0Ig_b26gdbTNI',   // chuỗi bắt đầu bằng eyJ...
  BUCKET: 'hoso'
};
