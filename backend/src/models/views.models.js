import mongoose from "mongoose";



const viewsSchema = new mongoose.Schema({
  blog:{
    type:mongoose.Types.ObjectId,
    ref:"Blog"
  },
  user:{
    type: mongoose.Types.ObjectId,
    ref:"User"
  }
}, {timestamps:true})

export const View = mongoose.model("View", viewsSchema)