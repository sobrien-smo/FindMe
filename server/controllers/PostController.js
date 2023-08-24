const mongoose = require("mongoose");
const router =express.Router();
const PostModel = require('../models/PostModel');


export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const limit = 8;
        const startIndex = (Number(page) - 1) * limit; // get the starting index of every page
    
        const total = await PostModel.countDocuments({});
        const posts = await PostModel.find().sort({ _id: -1 }).limit(limit).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / limit)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsByTopic = async (req, res) => {
    const { searchQuery, topics } = req.query;

    try {
     
        const posts = await PostModel.find([  { topics: { $in: topics.split(',') } } ]);

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsByUser = async (req, res) => {
    const { name } = req.query;

    try {
        const posts = await PostModel.find({ name });

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostModel.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostModel = new PostModel({ ...post, user: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostModel.save();

        res.status(201).json(newPostModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {user, topics, caption, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { user, topics, caption, selectedFile, _id: id };

    await PostModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostModel.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
}

export const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await PostModel.findById(id);

    post.comments.push(value);

    const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};

export default router;