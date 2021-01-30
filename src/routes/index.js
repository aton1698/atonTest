const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index.ejs', {title: 'Ñor Oviedo'});
});

router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('contact.ejs', {title: '¿Cómo contactarme?'});
});


router.get('/img/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/public/img/logo.png'));
});


router.get('/img/brandon.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/public/img/brandon.jpg'));
});



router.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('about.ejs', {title: 'Acerca de mi'});
});


module.exports = router;