const express = require('express')
const router = express.Router()
const fs =require("fs");
const path = require("path");
const requstData = require("./get_post.js")


router.get('/', function (req, res) {
     // requstData._get(function (data){
     //   res.send(data)
     // })
    // requstData._post(function (data){
    //   res.send(data)
    // })
    var users = [
        {name: 'tobi', email: 'tobi@learnboost.com'},
        {name: 'loki', email: 'loki@learnboost.com'},
        {name: 'jane', email: 'jane@learnboost.com'}
    ];
    res.render('index', {
        users:users,
        title: "EJS example",
        header: "Some users"
    });
    // res.sendFile(path.resolve(__dirname+"/../view/index.html"));
})
router.get('/ff', function (req, res) {
    res.send("ff========f");
})


module.exports = router