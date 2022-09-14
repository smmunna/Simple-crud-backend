const express = require("express");
require('./DB/db');
const cors = require("cors");
const User = require("./models/userModel");
const Product = require('./models/productModel');
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

app.post("/signup",async (req, res) => {
  const user = new User({
    username:req.body.username,
    email:req.body.email,
    password: req.body.password,
  });
  const result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("User not Found");
    }
  } else {
    res.send("User not Found");
  }
});

app.post('/addproducts',async (req,res)=>{
    const products = new Product(req.body);
    const result = await products.save();
    res.send(result);
})

app.get('/products', async(req,res)=>{
    const products = await Product.find();
    if(products.length>0){
        res.send(products);
    }
    else{
        res.send('Products Not Found');
    }
})

app.delete('/products/:id', async(req,res)=>{
    const products = await Product.deleteOne({_id:req.params.id});
    res.send(products);
})

app.get('/products/:id',async(req,res)=>{
    const products = await Product.findOne({_id:req.params.id});
    if(products){
        res.send(products);
    }
    else{
        res.send({'result':'Not found'});
    }
})

app.put('/products/:id', async(req,res)=>{
    const products = await Product.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(products);
})

// Uploading the photo




app.get("/", (req, res) => res.send("Ecommerce Backend Process"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
