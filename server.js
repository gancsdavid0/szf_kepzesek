const express = require('express')
require('dotenv').config() //.env fájlt olvassa

const tranings = require('./routes/tranings')


const app = express()

app.use('/api/trainings', tranings)


app.listen(process.env.PORT, ()=>
    console.log(`Server is running on port: ${process.env.PORT}`
))