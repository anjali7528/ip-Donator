const express = require("express");
const app  = express();
const port = 8000;
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// app.use(
//     cors({
//         origin: "http://localhost:3000"
//     })
//     )

app.use(cookieParser())
app.use(express.json());

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${post}`);
    }
    console.log(`server is up and running: ${port}`);
})