import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        index:true,
        // lowercase:true,
    },
    fullName:{
        type: String,
        required:true,
        trim:true,
        index: true,
    },
    email:{
        type:String,
        lowercase: true,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
    },
    avatarImage:{
        type:String,
    },
    coverImage: {
      type:String,
    },
    career:{
        type:String,
        trim:true,
    },
    location:{
      type:String,
    },
    about:{
      type:String,
      trim:true,
    },
    skills:[{
        type:String,
        trim:true,
    }],
    role:{
        type:String,
        enum: ["user", "admin"],
        default: "user"
    },
    blogs: [{
        type:mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    blogHistory:[{
        type:mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    likedBlogs:[{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    bookmark: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }],
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
}, {timestamps: true})

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    return next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    // password correct or not
    // returns true or false
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = async function(){
    return jwt.sign({
        _id: this._id,
        username: this.username,
        fullName: this.fullName,
        email: this.email,
        role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    })
}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    })
}

// Methods for maintaining Logs





export const User = mongoose.model("User", userSchema)