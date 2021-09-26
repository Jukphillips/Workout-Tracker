const router = require('express').Router()

const homeRoute = require("./home-routes")
const apiRoute = require("./api-routes")

router.use("/", homeRoute)
router.use("/api", apiRoute)

module.exports = router;