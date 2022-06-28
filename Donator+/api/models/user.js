const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },

    dob:{
        type:Date,
        required:true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    AadharID:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },

    PhoneNumber:{
        type:String,
        required:true,
    },

    Sex:{
        type:String,
        required:true
    },

    profilePic:{
        type:String,
        default: "",
    },

    address:{
        type:String
    }

},{timestamps:true});

module.exports = mongoose.model("User",userSchema);