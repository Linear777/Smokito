var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient({detect_buffers : true});

const config = require('../config');


router.get('/', function(req, res, next){


    res.status(200).json({
        token : "NO"
    });

});


module.exports = router;
