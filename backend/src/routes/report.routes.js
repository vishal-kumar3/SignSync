import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware";
import { createReport, getReportById, getReports, rejectReport, resolveReport } from "../controllers/report.controller";

const router = Router();

router.route("/create").post(verifyJWT, createReport);
router.route("/resolve").get(verifyJWT, resolveReport);
router.route("/reject").get(verifyJWT, rejectReport);
router.route("/:id").get(verifyJWT, getReportById);
router.route("/").get(verifyJWT, getReports);