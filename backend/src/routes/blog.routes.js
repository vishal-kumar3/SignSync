import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

import { comment, createBlog, deleteBlog, getAllBlogs, getBlogById, likeBlog, updateBlog, uploadBlogImage, uploadThumbnail, viewBlog } from "../controllers/blog.controller.js";

const router = Router();


router.route("/").get(getAllBlogs)
router.route("/:id").get(getBlogById)

// secured routes
router.route("/create").post(
  verifyJWT,
  createBlog
);
router.route("/uploadThumbnail").post(verifyJWT, upload.single("thumbnail"), uploadThumbnail);
router.route("/uploadThumbnail").post(verifyJWT, upload.single("coverImage"), uploadBlogImage);
router.route("/:id/delete").delete(verifyJWT, deleteBlog)
router.route("/:id/update").patch(verifyJWT, updateBlog)
router.route("/:id/like").post(verifyJWT, likeBlog)
router.route("/:id/comment").post(verifyJWT, comment)
router.route("/:id/view").post(verifyJWT, viewBlog)

export default router;

