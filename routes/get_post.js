var http = require('http');

module.exports = {
    _get: function (url,cb) {
        console.log(http)
        http.get('http://127.0.0.1:3000', function (res) {
            res.setEncoding('utf8');
            var rawData = '';
            res.on('data', function (chunk) {
                rawData += chunk;
            });
            res.on('end', function () {
                try {
                    // const parsedData = JSON.parse(rawData);
                    // console.log(parsedData);
                    cb(rawData);
                } catch (e) {
                console.error(e.message);
                    cb('error');
                }
            });
        });
    },
    _post:function (cb) {
        var opt = {
            host:'localhost',
            port:'3000',
            method:'POST',
            path:'/',
            headers:{
            }
        }
        var body = '';
        var req = http.request(opt, function(res) {
            res.on('data',function(d){
                body += d;
            }).on('end', function(){
                console.log(res.headers)
                cb(body)
            });
        }).on('error', function(e) {
            cb("Got error: " + e.message);
        })
        req.end();
    },
 }