const express = require('express');
const path = require('path');

const app = express();

// Đảm bảo port là 8080 để khớp với cấu hình Security Group và Task Definition
const PORT = process.env.PORT || 8080; 
// Host '0.0.0.0' là bắt buộc để chấp nhận kết nối từ bên ngoài container
const HOST = '0.0.0.0';

// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: phục vụ index.html cho các route không phải là file
app.get(/^\/([^.]*)$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server với đúng HOST và PORT
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});