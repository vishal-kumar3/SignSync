import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  blog:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title:{
    type: String,
    required: true
  },
  issue:{
    type: String,
    required: true
  },
  status:{
    type: String,
    enum: ["pending", "resolved", "rejected"],
    default: "pending"
  },
  resolvedBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true});


export const Report = mongoose.model("Report", reportSchema);