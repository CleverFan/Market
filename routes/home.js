/**
 * Created by ChengFan on 2016/8/18.
 */
module.exports = function ( app ) {
    app.get('/home', function (req, res) {
        res.render('home');
    });
}