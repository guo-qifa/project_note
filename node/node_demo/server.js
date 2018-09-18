const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const routes = require('./routes/index');

const app = express();
// ejs 模板
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// 静态文件的加载
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', routes);
app.use('/login', routes);
app.use('/sign_in', routes);
app.use('/sign_out', routes);
app.use('/oversignin', routes);

// 错误处理
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8080, function () {
  console.log('server is 8080 port');
})