const express = require('express')
const app=express();
const port =3000;

app.use(express.json());

//craeting own middleware ->logging,auth,validation

const loggingMiddleware = function(req,res,next){
    console.log("Logging the data");
    next();
}
app.use(loggingMiddleware);

const authMiddleware = function(req,res,next){
    console.log("Authenticating in middleware");
    next();
}

app.use(authMiddleware);

const validationMiddleware = function(req,res,next){
    console.log("Performing validation");
    next();  //here there is no middleware after this hence it will representing the route
}
app.use(validationMiddleware);

app.get('/',(req,res)=>{
    console.log("Now inside route handler");
    console.log(req.body);
    res.send("This is home page")
})


app.listen(port,()=>{
    console.log("app ruuning successfully on port ",{port});
    
})