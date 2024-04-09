import mongoose from "mongoose";



const tagSchema = new mongoose.Schema({
  tag:{
    type:String,
    required:true,
    trim:true,
    index:true,
    lowercase:true,
  },
  blog:[{
    type:mongoose.Types.ObjectId,
    ref:"Blog"
  }]
}, {timestamps:true})

export const Tag = mongoose.model("Tag", tagSchema)