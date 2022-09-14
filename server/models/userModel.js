const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/ecommerce")
// .then(()=>console.log('MongoDB Connected Successfully'))
// .catch(()=>console.log('MongoDB not Connected '))

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password:String,
})

const User = mongoose.model("User",userSchema);

module.exports = User;