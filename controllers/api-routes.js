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





module.exports = router;