import {  GET_ALL, GET_POST, GET_BY_TOPIC, CREATE, UPDATE, DELETE, LIKE, COMMENT, GET_BY_USER } from '../constants/actionTypes';
import * as api from '../api/api.js';

export const getPost = (id) => async (dispatch) => {
  try {
   

    const { data } = await api.getPost(id);

    dispatch({ type: GET_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = (page) => async (dispatch) => {
  try {
   
    const { data: { data, currentPage, numberOfPages } } = await api.getAllPosts(page);

    dispatch({ type: GET_ALL, payload: { data, currentPage, numberOfPages } });
 
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByUser = (name) => async (dispatch) => {
  try {
 
    const { data: { data } } = await api.getPostsByUser(name);

    dispatch({ type: GET_BY_USER, payload: { data } });
  
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByTopic = (searchQuery) => async (dispatch) => {
  try {
  
    const { data: { data } } = await api.getPostsByTopic(searchQuery);

    dispatch({ type: GET_BY_TOPIC, payload: { data } });
   
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
   
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const like = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.like(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const comment = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};