
import { Report } from "../models/report.models";
import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

export const createReport = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const { blog, user, issue, title } = req.body;

  if(!currentUser){
    throw new ApiError(401, "You must be logged in to create a report");
  }

  if(!blog && !user){
    throw new ApiError(400, "You must provide a blog or a user")
  }

  if(!title){
    throw new ApiError(400, "You must provide a title")
  }

  if(!issue){
    throw new ApiError(400, "You must provide an issue")
  }

  const report = await Report.create({
    blog: blog || null,
    user: user || null,
    title,
    issue,
    createdBy: currentUser._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      {
        report
      },
      "Report created successfully"
    ))
});

export const getReports = asyncHandler(async (req, res) => {
  const currentUser = req.user;

  if(!currentUser){
    throw new ApiError(401, "You must be logged in to view reports")
  }

  const user = await User.findById(currentUser._id);

  if(!user){
    throw new ApiError(404, "User not found")
  }

  if(user.role !== "admin"){
    throw new ApiError(403, "You are not allowed to view reports")
  }

  const reports = await Report.find({});

  if(!reports){
    throw new ApiError(404, "Reports not found")
  }

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      {
        reports
      },
      "Reports fetched successfully"
    ))
})

export const getReportById = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const reportId = req.params.id;

  if(!currentUser){
    throw new ApiError(401, "You must be logged in to view a report")
  }

  const user = await User.findById(currentUser._id);

  if(!reportId){
    throw new ApiError(400, "You must provide a report id")
  }

  const report = await Report.findById(reportId);

  if(!report){
    throw new ApiError(404, "Report not found")
  }

  if(report.createdBy == user._id || user.role == "admin"){
    throw new ApiError(403, "You are not allowed to view this report")
  }

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      {
        report
      },
      "Report fetched successfully"
    ))
})

export const resolveReport = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const reportId = req.params.id;

  if(!currentUser){
    throw new ApiError(401, "You must be logged in to resolve a report")
  }

  if(!reportId){
    throw new ApiError(400, "You must provide a report id")
  }

  const user = await User.findById(currentUser._id);

  if(!user){
    throw new ApiError(404, "User not found")
  }

  if(user.role !== "admin"){
    throw new ApiError(403, "You are not allowed to resolve a report")
  }

  const report = await Report.findById(reportId);

  if(!report){
    throw new ApiError(404, "Report not found")
  }

  report.status = "resolved";
  report.resolvedBy = user._id;
  await report.save();

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      {
        report
      },
      "Report resolved successfully"
    ))

});

export const rejectReport = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const reportId = req.params.id;

  if(!currentUser){
    throw new ApiError(401, "You must be logged in to reject a report")
  }

  if(!reportId){
    throw new ApiError(400, "You must provide a report id")
  }

  const user = await User.findById(currentUser._id);

  if(!user){
    throw new ApiError(404, "User not found")
  }

  if(user.role !== "admin"){
    throw new ApiError(403, "You are not allowed to reject a report")
  }

  const report = await Report.findById(reportId);

  if(!report){
    throw new ApiError(404, "Report not found")
  }

  report.status = "rejected";
  report.resolvedBy = user._id;
  await report.save();

  return res
    .status(200)
    .json(new ApiResponse(
      200,
      {
        report
      },
      "Report rejected successfully"
    ))
});

// Delete reports after 30 days if resolved or rejected