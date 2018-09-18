function signin(req, res, next) {
  res.render('sign_in', { title: '请登录'} );
}
module.exports = signin;