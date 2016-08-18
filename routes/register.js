/**
 * Created by ChengFan on 2016/8/18.
 */

module.exports = function ( app ) {
    var multer = require('multer');
    var upload = multer();
    global.dbHelper = require( '../common/dbHelper' );

    app.use(function(req, res, next){
        res.locals.user = req.session.user; //保存用户信息
        var err = req.session.error;  //保存结果响应信息
        res.locals.message = '';  // 保存html标签
        if (err) res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
        next();
    });

    app.get('/register', function(req, res) {
        res.render('register');
    });
    app.post('/register', upload.array(),function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({name: uname}, function (error, doc) {
            if (doc) {
                req.session.error = '用户名已存在！';
                console.log('用户名已存在！');
                res.send(500);
            } else {
                User.create({
                    name: uname,
                    password: req.body.upassword
                }, function (error, doc) {
                    if (error) {
                        res.send(500);
                    } else {
                        req.session.error = '用户名创建成功！';
                        console.log('用户名创建成功！');
                        res.send(200);
                    }
                });
            }
        });
    });
}