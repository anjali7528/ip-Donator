const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userSchema = require('../models/user');
const  hospitalSchema = require('../models/hospital');
const jwt  = require("jsonwebtoken");

const JWT_SECRET ='805fa36a6470b09c3957ece0d9031df8c582868e1612ffb045d41659bec766b858c84cce1d9fdb6bf4568fe8958ae15192d42c52e086d2b81462ebb74d01126c'

//RegisterUser
router.post("/register/user", async(req,res)=>{
    try{
         
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
          const newUser = new teacherSchema({

              username: req.body.username,
              email: req.body.email,
              dob:req.body.dob,
              PhoneNumber: req.body.phone,
              AadharID: req.body.id,
              Sex:req.body.sex,
              password:hashedPass,
          });
          console.log('cp1')
          const user = await newUser.save();
          res.status(200).json(user);
    } catch(err){
        console.log('cpp2')
        res.status(500).json(err);
    }
})


//LoginUser
router.post("/login/user",async(req,res) => {
    try{
        const user = await teacherSchema.findOne({AadharID: req.body.id})
        if(!user) return next(createError(404,"User not found!"))
        const validate = await bcrypt.compare(req.body.password, user.password)

        if(!validate) return next(createError(400,"wrong password or username"))
        
       const token = jwt.sign({ username: user.username, email: user.email}, JWT_SECRET);
    
       const {password, ...others} = user._doc;
       
       res.cookie("access_token", token,{
         httpOnly: true,
       }).status(200).json(others);
     
         
    }catch(err){
      
        res.status(500).json(err);

    }
})

//RegisterHospital
router.post("/register/hospital", async(req,res)=>{
    try{
         
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
          const newUser = new studentSchema({
              username: req.body.username,
              RegistrationID: req.body.id,
              PhoneNumber: req.body.phone,
              email: req.body.email,
              password:hashedPass,
              address:req.body.address
          });
          const user = await newUser.save();
          res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})


//Loginhospital
router.post("/login/hospital",async(req,res) => {

    
    try{
          const user = await studentSchema.findOne({RegistrationID: req.body.id})
          !user && res.status(400).json("Wrong credentials!")

          const validate = await bcrypt.compare(req.body.password, user.password)
          !validate && res.status(400).json("Wrong credentials!")

          const {password, ...others} = user._doc;
          res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;