const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
const users = require('./Routes/user');


app.use(express.json());

connectDB();
app.use('/api',users);

app.get('/',(req,res)=>{
    console.log("Inside home page route handler");
    res.send("Welcome"); 
})

app.listen(port,()=>{
    console.log("Server is running");
})