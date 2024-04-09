import mongoose from "mongoose";



const commentSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true,
    trim:true,
  },
  comment:[{
    type: mongoose.Types.ObjectId,
    ref: "Comment"
  }],
  owner:{
    type:mongoose.Types.ObjectId,
    ref: "User",
    required:true,
  },
  blog:{
    type:mongoose.Types.ObjectId,
    ref: "Blog"
  },
  noOfLikes:{
    type:Number,
    default: 0
  }
}, {timestamps:true})

export const Comment = mongoose.model("Comment", commentSchema)
