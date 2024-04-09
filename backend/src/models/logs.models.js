import mongoose from 'mongoose';

const logsShcema = new mongoose.Schema({
  message:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  severity : {
    type:String,
    required:true,
    enum: ['INFO', 'WARNING', 'ERROR'],
    index:true,
  },
  request: {
    method : {
      type:String,
    },
    url:{
      type:String,
    },
    ip_address:{
      type:String,
    },
    user_agent:{
      type:String,
    }
  },
  user:{
    id : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  error: {
    code :{
      type: String,
    },
    stack_trace:{
      type:String,
    }
  }
}, {timestamps:true})

export const Logs = mongoose.model("Logs", logsShcema)