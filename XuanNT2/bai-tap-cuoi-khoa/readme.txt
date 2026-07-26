Tạo project 2 bài test độc lập test chức năng trên browser như sau:

1. Tạo bản ghi
2. Delete bản ghi

Yêu cầu:

- Viết code theo POM
- Sử dụng fixture để login --> fixture chịu trách nhiệm chuẩn bị trạng thái đăng nhập chứ ko viết UI login ở đây 
- Sử dụng hook after xóa bài cho test 1 bằng API
- Sử dụng hook before tạo bài cho test 2 bằng API
luồng 1: fixture login --> UI login --> UI create article --> after Each --> Delete API
luồng 2: fixture login --> beforeEach --> Creat API --> UI Delete
