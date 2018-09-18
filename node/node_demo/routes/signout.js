function signout(req, res, next) {
  res.render('sign_out', {title: '退出'})
}

module.exports = signout;