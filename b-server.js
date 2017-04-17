/**
* test build index.html
*
* */
const express = require('express');
const config = require('./config/index');

var port = process.env.PORT || config.build.port; //端口设置

var app = express();
var router = express.Router();

//设置路由
router.get('/', (req, res, next) => {
  req.url = '/index.html';
  next();
});

app.use(router); //使用路由

//模拟后台对前台地址请求的处理
var appData = require('./data.json') // 获取data.json对象
var seller = appData.seller // 获取这个对象[seller]的内容
var goods = appData.goods // 获取这个对象[goods]的内容
var ratings = appData.ratings // 获取这个对象 [ratings]的内容

var apiRoutes = express.Router();

// 对前台/seller的处理
apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

// 对前台/goods的处理
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
});
// 对前台/ratings的处理
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);

//设置静态资源目录
app.use(express.static('./dist'));

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
  };
  console.log('Server running on http://localhost:' + port +'\n');
});
