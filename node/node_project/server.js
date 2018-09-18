const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const routes = require('./routes/index');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.use(function (req, res, next) {
  const error = new Error('No Found');
  error.status = 404;
  next(error);
});

if(app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err, status || 500);
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    })
});

app.listen(9090, function () {
  console.log('server port is 9090');
})


