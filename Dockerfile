# [cite_start]Sử dụng base image chính thức của Node.js phiên bản 18-alpine, rất nhỏ gọn [cite: 1]
FROM node:18-alpine

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép package.json và package-lock.json để tận dụng Docker cache
COPY package*.json ./

# Chạy lệnh cài đặt tất cả các thư viện đã định nghĩa trong package.json
RUN npm install

# [cite_start]Sao chép toàn bộ mã nguồn của dự án vào thư mục làm việc [cite: 2]
COPY . .

# Mở cổng 8080 để bên ngoài có thể truy cập
EXPOSE 8080

# Lệnh mặc định để khởi động server Node.js khi container chạy
CMD ["node", "server.js"]