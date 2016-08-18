/**
 * Created by ChengFan on 2016/8/18.
 */

module.exports = function ( app ) {
    app.get('/login',function(req,res){
        res.render('login');
    });

    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user'),uname = req.body.uname;
        User.findOne({name: uname}, function (error, doc) {
            if (!doc) {
                req.session.error = '用户名不存在！';
                console.log("用户名不存在!");
                res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;text-align: center;">用户名不存在</div>';
                res.render('login');
            } else if(doc.password != req.body.upassword) {
                req.session.error = "密码错误!";
                console.log("密码错误!");
                res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;text-align: center;">密码错误</div>';
                res.render('login');
            }else{ //用户名、密码正确
                req.session.user=doc;
                //res.send(200);
                res.redirect('home');
            }
        });
    });
}
