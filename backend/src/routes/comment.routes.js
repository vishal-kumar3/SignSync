import { Router } from "express";
import { deleteComment, getAllComment, getCommentById, replyComment, updateComment } from "../controllers/comment.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";



const router = Router()

router.route("/").get(getAllComment)
router.route("/:id").get(getCommentById)

// secured comments
router.route("/:id/update").patch(verifyJWT, updateComment)
router.route("/:id/delete").delete(verifyJWT, deleteComment)
router.route("/:id/reply").post(verifyJWT, replyComment)

export default router