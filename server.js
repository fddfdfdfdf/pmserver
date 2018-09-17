const express = require('express');
const app = express();
const indexRouter = require('./routes/routes.js');


app.use(express.static("./public"))


app.use('/', indexRouter);


 app.listen(9000, function () {
     console.log("应用实例运行于9000端口")
 })
