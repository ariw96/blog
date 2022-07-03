import express from "express";
import { createPost } from "../controllers/postController.js";
import {
	createPost,
	deletePost,
	getUser,
	getUsers,
} from "../controllers/userController.js";
import { verifyUser } from "../utils/verify.js";
const router = express.Router();
//UPDATE
router.post("/", createPost);

//DELETE
router.delete("/:id", deletePost);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", getUsers);

export default router;
