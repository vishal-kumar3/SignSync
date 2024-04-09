import { Router } from 'express';
import {upload} from "../middleware/multer.middleware.js"

import {
    login,
    register,
    logout,
    getUserById,
    getAllUsers,
    updateProfilePic,
    updateUserProfile,
    bookmark,
    follow,
    getCurrentUser,
    searchUser,
    updateCoverPic,
    updateUserSkills,
    deleteUser,
} from "../controllers/user.controller.js"
import { verifyJWT } from '../middleware/auth.middleware.js';


const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/filter").get(searchUser)
router.route("/:id").get(getUserById)
router.route("/").get(getAllUsers)


// secured routes
router.route("/getCurrentUser").post(verifyJWT, getCurrentUser)
router.route("/logout").post(verifyJWT, logout)
router.route("/:id/deleteAccount").delete(verifyJWT, deleteUser)
router.route("/:id/updateProfilePic").patch(upload.single('avatarImage'), verifyJWT, updateProfilePic)
router.route("/:id/updateCoverImage").patch(upload.single('coverImage'), verifyJWT, updateCoverPic)
router.route("/:id/updateUserProfile").patch(verifyJWT, updateUserProfile)
router.route("/:id/updateUserSkills").patch(verifyJWT, updateUserSkills)
router.route("/:id/bookmark").patch(verifyJWT, bookmark)
router.route("/:id/follow").patch(verifyJWT, follow)

export default router;