const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },


    email:{
        type: String,
        required: true,
        unique: true
    },

    RegistrationID:{
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

    profilePic:{
        type:String,
        default: "",
    },

    address:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Hospital",hospitalSchema);