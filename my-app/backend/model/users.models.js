const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userName : {
        type : String,
        required : true,
        trim : true
    },
    password :{
        type : String,
        requried : true,
        trim:true
    },
    firstName :{
        type : String,
        required : true,
        trim : true,
    },
    lastName :{
        type : String,
        required : true,
        trim : true,
    },
    phoneNumber :{
        type : Number,
        required : true,
        minlength:10,
        maxlength :10
    },
    email :{
        type : String,
        required : true
    }
},{timestamps : true})

const users = mongoose.model('users',userSchema);
module.exports = users;