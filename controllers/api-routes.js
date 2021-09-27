const router = require("express").Router()
const db = require("../models")


//find last workout
router.get("/workouts", async (req, res) => {

    db.Workout.find({})
        .then(recentworkout => {
            console.log(recentworkout)
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

    console.log(workouts)
    res.json(workouts)

    console
    } catch (err) {
        console.log(err)
    }

})

router.put("/workouts/:id", async (req, res) => {

    try {
        console.log(req.body)
    const addExercise = await db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})

    console.log(addExercise)
    res.json(addExercise)

    } catch (err) {
            console.log(err)
            res.json(err)

        }})







module.exports = router;