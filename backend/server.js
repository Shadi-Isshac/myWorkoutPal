const express = require('express')

// created express app
const app = express()

// listen for requests

app.listen(4000, () => {
    console.log('server is listening!')
})

