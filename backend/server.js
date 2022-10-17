require('dotenv').config()
const path = require("path")
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// created express app
const app = express()

// middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connection to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to MongoDB server is listening')
    })
})
.catch((error) => {
    console.log(error)
})







