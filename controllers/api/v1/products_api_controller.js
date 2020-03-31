const Product=require('../../../models/product');

// To create product
module.exports.addProduct = function(req,res){
    Product.create(req.body, function(err, item){
        if(err){
            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({item})
    })
}

// To get product
module.exports.getProduct = function(req,res){
    Product.find({},function(err,item){
        if(err){
        console.log(err);
        return  res.redirect('/');
        }
        return  res.json({data:{
        products:item
        }});
    })
}

// To delete product
module.exports.deleteProduct = function(req, res) {
    console.log(req.body);
    Product.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
        console.error(err);
        return res.redirect("/");
        } else {
        return res.json({data:{message:"product deleted"}})
        }
    });
};

// To Update product
module.exports.updateProduct = function(req,res){
    const number = parseInt(req.query.number);
    console.log("params:", req.params.id);
    Product.findByIdAndUpdate(req.params.id, {$inc:{quantity:number}},{new:true} ,function(err,item) {
        if (err) {
        console.error(err);
        return res.redirect("/");
        } else {
        return res.json({data:{
            product:item,
            message: "updated  successfully"
        }})
        }
    });
}
