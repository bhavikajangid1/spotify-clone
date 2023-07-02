const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const {getToken} = require('../utils/helper')

router.post("/register", async (req,res)=>{
    console.log("POST/")
    const {email,password,firstName,lastName,username} = req.body
    if(!email||!password||!firstName||!username){
        return res.json({
            error:"All feilds are required"
        })
    }
    const user = await User.findOne({email:email});
    if(user){
        return res.status(403).json({
            error:"A user with this email already exists"
        });
    }
    const hashedPassword = bcrypt.hashSync(password,10);
    const newUserData = {email,password:hashedPassword,firstName,lastName,username};
    const newUser = await User.create(newUserData);

    const token = await getToken(email,newUser);
    const userToReturn = {...newUser.toJSON(),token:token}
    delete userToReturn.password;
    return res.status(200).json(userToReturn)
});

//login 
router.post("/login",async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email:email});
    if(!user){
        return res.status(403).json({
            error: "Invalid Credentials"
        })
    }
    const correctPassword = await bcrypt.compare(password,user.password || '');
    if(!correctPassword){
        return res.status(403).json({
            error:"Invaild Credentials"
        })
    }

    const token = await getToken(user.email,user);
    const userToReturn = {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn)
})

module.exports = router