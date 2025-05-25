const ProductModels = require('../models/productModel');

// Get Products API - /api/v1/products
exports.getProducts = async(req, res, next)=>{
    const query = req.query.keyword?{ name:{ // for get the product while searching 
        $regex : req.query.keyword,
        $options : 'i'
    }}:{}
    const products = await ProductModels.find(query);
    res.json({
        success : true,
        products
    })
}
// Get SingleProduct API - /api/v1/product/:id
exports.getSingleProduct = async (req,res,next)=>{
    try{
        const product = await ProductModels.findById(req.params.id);
        res.json({
            success : true,
            product
    })
    }catch(error){
        res.status(404).json({
            success : false,
            message:'Unable to get Product with that ID'
    })
    }
  
}
