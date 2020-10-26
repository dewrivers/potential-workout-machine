var db =require("../models");

module.exports = function (app) {
/******** GET route for homepage DATA */
      app.get('/',  (req, res) => {
          //console.log('home data route')
          db.Workout.find({})
             .then(data => { res.json(data);})
             .catch(err => { res.json(err);});
      });
/******** GET route for excercise DATA */
      app.get('api/exercise/:id', (req, res) => {
          //console.log('exercise data by id route');
          db.Workout.find({
              where: {_id: req.params._id}
          })
          .then(data => { res.json(data);})
          .catch(err => {res.json(err);});
      });
/******** GET route stats DATA */
       app.get('api/stats', (req, res) => {
           db.Workout.find({})
           .then(data => { res.json(data); })
           .catch(err => {res.json(err);});
       });
/******** GET route for workouts DATA */
        app.get('api/workouts', (req, res)=>{
            db.Workout.find({})
            .then(data => { res.json(data);})
            .catch(err => {res.json(err);});
        });
/******** POST route for homepage DATA */
        app.post('api/workouts', (req, res)=>{
            db.Workout.find({})
            .then(data => { res.json(data);})
            .catch(err => {res.json(err);});
        });

};