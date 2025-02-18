const express = require('express');
const router = express.Router();


//middlewares
const auth = function(req,res,next){
    console.log("Inside authentication middleware");
    
    req.user ={userId:1,role:"Student"};

    if(req.user){
        //if valid user
        next();
    }else{
        res.json({
            success:false,
            message:"Not a valid user"
        })
    }
}

const isStudent = function(req,res,next){

    console.log("Inside student middleware");

    if(req.user.role ==="Student"){
        next();
    }else{
        res.json({
            success:false,
            message:"This route is only for students"
        })
    }
    
}

const isAdmin = function(req,res,next){

    console.log("Inside admin middleware");

    if(req.user.role ==="Admin"){
        next();
    }else{
        res.json({
            success:false,
            message:"This route is only for admin"
        })
    }
    
}

//routes

router.get("/student",auth,isStudent,(req,res)=>{
    res.send("This is Student page/route");
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.send("This is Admin page/route");
})

module.exports = router;