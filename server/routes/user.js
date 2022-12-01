import express from 'express';
// import { getPosts, createPost } from '../controllers/posts.js';

const userRouter = express.Router();

userRouter.get('/', (req, res)=> {
    res.send("this works")
})
// router.get('/', getPosts);
// router.get('/', createPost);

//
export default userRouter;