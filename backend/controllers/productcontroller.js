exports.getProducts=(req,res,bect)=>{
    res.status(200).json({
        success:true,
        message:"this route will be show all the products in database"
    })
}