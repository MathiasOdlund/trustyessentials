const express = require('express');
const app = express();
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
//initializing some middleware morgan, db, etc.
//Setting the amount of feedback needed from morgan, love user data;)
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname + '/Trafic', 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

//Simple test req, should remove later
app.get('/', (req, res)=>{
    res.send('hey')
})

//Listening for connections
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`Running server on prot ${port}`)
})