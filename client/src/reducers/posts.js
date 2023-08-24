import {  GET_ALL, GET_POST, GET_BY_TOPIC, CREATE, UPDATE, DELETE, LIKE, COMMENT, GET_BY_USER } from '../constants/actionTypes';

export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case GET_BY_TOPIC:
    case GET_BY_USER:
      return { ...state, posts: action.payload.data };
    case GET_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};