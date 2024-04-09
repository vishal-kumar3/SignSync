import mongoose from "mongoose";



const likesSchema = new mongoose.Schema({
  comment:{
    type:mongoose.Types.ObjectId,
    ref:"Comment"
  },
  blog:{
    type:mongoose.Types.ObjectId,
    ref:"Blog"
  },
  likedBy:{
    type:mongoose.Types.ObjectId,
    ref:"User",
  },
}, {timestamps:true})

export const Like = mongoose.model("Like", likesSchema)