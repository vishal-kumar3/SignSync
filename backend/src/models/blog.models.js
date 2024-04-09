import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  description:{
    type:String,
    required:true,
    trim:true,
  },
  content:{
    type:String,
    required:true,
    trim:true,
  },
  owner:{
    type:mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status:{
    type:String,
    enum: ["draft", "published"],
    default: "draft",
  }
  ,
  thumbnail:{
    type:String,
    required:true,
  }
  ,
  tags:[{
    type:mongoose.Types.ObjectId,
    ref:"Tag"
  }],
  noOfLikes:{
    type:Number,
    default:0,
  },
  noOfViews:{
    type:Number,
    default:0,
  },
  noOfComments:{
    type:Number,
    default:0,
  },
  comment:[{
    type:mongoose.Types.ObjectId,
    ref: "Comment"
  }],
}, {timestamps:true})

export const Blog = mongoose.model('Blog', blogSchema)
