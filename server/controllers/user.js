import express from 'express';
import mongoose from 'mongoose';

import UserProfile from '../models/userProfile';

const userRouter = express.Router();

export const getProfile = async (req, res) => { 
    try {
        const userProfiles = await UserProfile.find();
                
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPostMessage.save();
        res.status(201).json(newPost);
    }catch (error){
        res.status(409).json({message: error.message});
    }
}