const express = require('express');
var Workout =require('../models/workout.js');
var router =  express.Router();

// POST route for workouts data
router.post("/api/workouts", function(req, res){
    console.log("WORKOUT POST API ROUTE", req.body)
    Workout.create({})
        .then(data => {
        res.json(data);
    })
    .catch(err => {res.json(err)});
});

    router.put("/api/workouts/:id", function(req, res){
        var exerciseId = req.params.id;
        console.log("req setup", req.params.id);
        var exerciseData = req.body;
        Workout.findByIdAndUpdate(
            exerciseId,
            {$push: {exercises: exerciseData}},
            {new:true, runValidators: true}
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });
    
    // GET route for workouts data
    router.get("/api/workouts/", function(req, res){
    console.log("GET exercise data", req.params)
    Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});




// GET route for stats data
router.get("/api/workouts/range", function(req, res){
    
    Workout.find({}).limit(8)
    .then(data => {res.json(data)})
    .catch(err => {
        console.log(err)
        res.json(err);
    });
});

module.exports = router;