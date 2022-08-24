require('dotenv').config()
const express = require('express')


// created express app
const app = express()

app.get('/', (req,res) => {
    res.json({messg:'Welcome to the app'})
})

// listen for requests

app.listen(process.env.PORT, () => {
    console.log('server is listening')
})

