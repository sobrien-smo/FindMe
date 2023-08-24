const express = require("express");

const createPost = require ( '../controllers/PostController');
const getPost = require ( '../controllers/PostController');
const deletePost = require ( '../controllers/PostController');
const getAllPosts = require ( '../controllers/PostController');
const like = require ( '../controllers/PostController');
const updatePost = require ( '../controllers/PostController');
//import validation from '../jwt/validation.js';
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', like)
//comment
router.get('/:id/allPosts', getAllPosts)

//get posts by user
//opsts by topic

module.exports = router;