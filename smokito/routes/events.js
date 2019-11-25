var express = require('express');
var router = express.Router();




router.get('/:id', function(req, res, next){

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        name : "EVENT TEST"
    });
});


module.exports = router;
