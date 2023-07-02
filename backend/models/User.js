const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type:String,
            reqired:true
        },
        username:{
            type: String,
            required: true
        },
        likedSongs:{
            type:String,
            default: ""
        },
        likedPlaylists:{
            type:String,
            default:""
        },
        suscribedArtists:{
            type:String,
            default:""
        }
    }
)

const UserModel = mongoose.model("User",User);

module.exports = UserModel