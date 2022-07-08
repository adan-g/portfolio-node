const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');


router.get('/', function(req, res){
    res.render('home/index');
});


router.post('/sentEmail', emailController.sendEmail);


module.exports = router;