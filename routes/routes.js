const express = require('express')
const router = express.Router()
const fs =require("fs");
const path = require("path");


router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname+"/../view/index.html"));
})
router.get('/ff', function (req, res) {
    res.send("s=ff---------");
})


module.exports = router