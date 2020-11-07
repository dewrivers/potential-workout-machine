const path = require("path");

const express = require('express');
var router =  express.Router();



    router.get('/', (req, res) => {
        console.log('ruta -> home HTML');
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    router.get('/exercise',  (req, res) => {
        console.log('ruta -> exercise HTML');
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    router.get('/stats',  (req, res) => {
        console.log('ruta -> stats HTML');
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

    module.exports = router;