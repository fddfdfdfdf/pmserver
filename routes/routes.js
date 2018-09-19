const express = require('express')
const router = express.Router()
const fs =require("fs");
const path = require("path");
const requstData = require("./get_post.js")


router.get('/', function (req, res) {
     // requstData._get(function (data){
     //   res.send(data)
     // })
    requstData._post(function (data){
      res.send(data)
    })
    // res.sendFile(path.resolve(__dirname+"/../view/index.html"));
})
router.get('/ff', function (req, res) {
    res.send("ff========f");
})


module.exports = router