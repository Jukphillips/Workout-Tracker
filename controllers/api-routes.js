const router = require("express").Router()
const db = require("../models")


//find last workout
router.get("/workouts", async (req, res) => {

    db.Workout.find({})
        .then(recentworkout => {

            res.json(recentworkout)
        })
        .catch(err => {
            cosnole.log(err)
            res.json(err)
        })
})

router.post("/workouts", async (req, res) => {
    console.log(req.body)
    try {
    const workouts = await db.Workout.create(req.body);

    res.json(workouts)

    console
    } catch (err) {
        console.log(err)
    }

})

router.put("/workouts/:id", async (req, res) => {

    try {

    const addExercise = await db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body}}, {new: true})

    res.json(addExercise)

    } catch (err) {
            console.log(err)
            res.json(err)

    }})

router.get("/workouts/range", async (req, res) => {
  try {
    const aggregateData = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
          totalSets: { $sum: "$exercises.sets" },
          totalReps: { $sum: "$exercises.reps" },
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);

    console.log(aggregateData);
    res.json(aggregateData);
  } catch (error) {
    console.log(error);
  }
});






module.exports = router;