const express = require('express')
const router = express.Router()
const Song = require("../models/Song")
const User = require("../models/User")
const passport = require('passport') 

router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const user = req.user;
    const songs = await Song.find({artist:req.user._id}).populate("artist")
    return res.status(200).json(songs);
})

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const artistId = req.params.artistId
    const artist = await User.find({_id:artistId})
    if(!artist) return res.status(301).json({
        err:"Artist Not Found"
    })
    const songs = await Song.find({artist:artistId})
    return res.status(200).json({data: songs});
})

router.get("/get/song/:songName",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const {songName} = req.params;
    const songs = await Song.find({name:songName}).populate("artist");
    if(songs.length === 0) return res.status(301).json({
        err:"Song Not Found"
    })
    return res.status(200).json({data: songs});
})

router.post("/create",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const {name,thumbnail,track} = req.body
    if(!name||!thumbnail||!track){
        return res.status(301).json({
            error:"All details are required"
        })
    }
    const artist = req.user._id
    const songDetails = {name,thumbnail,track,artist}
    const createdSong = await Song.create(songDetails)
    return res.status(200).json(createdSong)    
})

module.exports = router
