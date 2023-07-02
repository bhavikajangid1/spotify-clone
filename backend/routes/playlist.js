const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Playlist = require('../models/Playlist')
const User = require('../models/User')
const Song = require('../models/Song')

router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const playlistId = req.params.playlistId
    const playlist = await Playlist.findOne({_id:playlistId}).populate({path:"songs",
    populate:{
        path:"artist"
    }})
    if(!playlist){
        return res.status(301).json({err:"Playist Not Found"})
    }
    return res.status(200).json(playlist)
})

router.get("/get/artist/me",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const artistId=req.user._id
    const artist = await User.find({_id:artistId})
    if(!artist){
        return res.status(301).json({
            err:"Artist Not Found"
        })
    }
    const playlist = await Playlist.find({owner:artistId}).populate("owner")
    if(!playlist){
        return res.status(301).json({
            err:"This user has no playlist",
        })
    }
    return res.status(200).json({
        data: playlist
    }) 
})

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const artistId=req.params.artistId
    const artist = await User.find({_id:artistId})
    if(!artist){
        return res.status(301).json({
            err:"Artist Not Found"
        })
    }
    const playlist = await Playlist.find({owner:artistId})
    if(!playlist){
        return res.status(301).json({
            err:"This user has no playlist",
        })
    }
    return res.status(200).json({
        data: playlist
    }) 
})


router.post("/add/song",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const currentUser = req.user;
    const {playlistId,songId} = req.body;
    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(304).json({
            err:"Playlist does not exist",
        })
    }
    if (!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)) {
      return res.status(400).json({
        err: "You don't have access to add a song to this playlist",
      });
    }
  

    const song = await Song.findOne({_id:songId})
    if(!song){
        return res.status(304).json({
            err:"Song doesn't exist"
        })
    }
    
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
})

router.post("/create",passport.authenticate("jwt",{session:false}), async (req,res)=>{
    const currentUser = req.user;
    const {name,thumbnail,songs} = req.body;
    if(!name||!thumbnail){
        return res.status(301).json({
            err:"Insufficient Data"
        })
    }
    const playlistDetails = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collaborators:[],
    };
    const playlist = await Playlist.create(playlistDetails)
    return res.status(200).json(playlist)
})


module.exports = router