const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/web');
const path = require('path');

//app.use : đăng kí middleware
//đăng kí public là thư mục tĩnh, có thể truy cập
app.use(express.static('public'));

//xử lí dữ liệu khi gửi từ form
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//đăng kí view engine là ejs
app.set('view engine','ejs');

//định tuyến gốc
app.use('/',route);
//xử lí khi người dùng nhập url không tồn tại (chưa xử lí)
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
})
//khởi tạo server
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})