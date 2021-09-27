const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose");
const routes = require('./controllers')
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}!`)
})