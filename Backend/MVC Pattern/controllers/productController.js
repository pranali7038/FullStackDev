const Product = require('../models/productModel');


//business logic

const getProducts = async(req,res)=>{
    
    try{
        const allProducts = await Product.find();

        if(!allProducts || allProducts.length ===0){
            res.json({
                message:"Product not present"
            })
            res.status(200).json({
                success:true,
                products:allProducts,
            })
        }

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

//create product

const createProduct = async(req,res)=>{
    try{
        const {name,price,description,category} = req.body;
        const newProduct = new Product({name,price,description,category});
        await newProduct.save();
        res.status(200).json({
            product:newProduct
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

//update
const updateProduct = async(req,res)=>{
    try{

        const {id} = req.params;
        const {name,price,description,category} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id,{name,price,description,category},{new:true});
        
        if(!updateProduct){
            res.json({
                massage:"Cannot find product"
            })
        }
        res.status(200).json({
            product:updatedProduct
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

module.exports = {getProducts};