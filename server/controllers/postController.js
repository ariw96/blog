import Post from "../models/Post.js";

import { createError } from "../utils/error.js";
//post post
export const createPost = async (req, res, next) => {
	const newPost = await Post.create(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(201);
		res.send(savedPost);
	} catch (err) {
		next(err);
	}
};
//delete user
export const deletePost = async (req, res, next) => {
	try {
		await Post.findByIdAndDelete(req.params.id);
		res.status(201);
		res.send("Deleted Post");
	} catch (err) {
		next(err);
	}
};
//get
export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(201);
		res.send(user);
	} catch (err) {
		next(err);
	}
};
//get all
export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(201);
		res.send(users);
	} catch (err) {
		next(err);
	}
};
