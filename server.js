const express = require('express');
const app = express();
const indexRouter = require('./routes/routes.js');
const path = require('path');





//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
//设置模板文件文件夹,__dirname为全局变量,表示网站根目录
app.set('views', path.join(__dirname, './views'));
//设置静态变量
app.use(express.static("./public"))


app.use('/', indexRouter);


 app.listen(9000, function () {
     console.log("应用实例运行于9000端口")
 })
