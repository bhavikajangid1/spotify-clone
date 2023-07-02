const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const User = require('./models/User')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const authRoutes = require('./routes/auth')
const songRoutes = require('./routes/song')
const playlistRoutes = require('./routes/playlist')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((x)=>{
        console.log("Connected To Database")
    })
    .catch((err)=>{
        console.log("Error While connecting to Database", err.message);
})

app.use(passport.initialize());

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY,
  };
passport.use(
    new JwtStrategy(opts, async function(jwt_payload, done) {
      try {
        const user = await User.findOne({ _id: jwt_payload.identifier }).exec();
  
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
  
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);
app.listen(PORT, ()=>{
    console.log("app in running on port " + PORT);
})