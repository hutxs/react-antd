var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '/public')));

app.all("/*", function(req, res){
  // 判断是否登录
//  req.accepts('text/html');
  res.render('index', { title: 'iconfig' });
});

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
