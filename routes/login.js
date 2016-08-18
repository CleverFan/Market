/**
 * Created by ChengFan on 2016/8/18.
 */

module.exports = function ( app ) {
    app.get('/login',function(req,res){
        res.render('login');
    });
}