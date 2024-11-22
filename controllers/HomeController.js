class HomeController{
    //method xử lí logic
    index(req,res){
        //trả về views index và gửi title là trang chủ
        res.render('index',{title:'Trang chủ'});
    }
    detail(req,res){
        //req.params: xử lí khi người dùng cần lấy dữ liệu từ đường dẫn
        res.send('This is detail  ' + req.params.slug);
    }
    store(req,res){
        //req.body: xử lí khi người dùng gửi form
        res.send('hello' + req.body.user);
    }
}
module.exports = new HomeController;