var express = require('express');
var router = express.Router();

router.put('/:id', function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ id : 1, val : "YOU ARE ALONE"});
});

router.get('/', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ id : 1, val : "all users"});
});

router.get('/find/:area', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ id : 1, val : "all users"});
});

module.exports = router;
