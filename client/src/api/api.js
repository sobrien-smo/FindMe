import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, data) =>  API.put(`/user/${id}`, data);
export const getAllUsers = ()=> API.get('/user')

export const getPost = (id) => API.get(`/posts/${id}`);
export const getAllPosts = (id)=> API.get(`/posts/${id}/allPosts`);
export const getExplorePosts = (page) => API.get(`/posts?page=${page}`);
export const getPostsByUser = (name) => API.get(`/posts/user?name=${name}`);
export const getPostsByTopic = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&topics=${searchQuery.topics}`);
export const createPost = (newPost) => API.post('/posts', newPost);

// export const uploadImage = (data) => API.post("/upload/", data);
// export const uploadPost = (data) => API.post("/posts", data);

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const like = (id, userId)=>API.put(`posts/${id}/like`, {userId: userId})
export const comment = (value, id) => API.post(`/posts/${id}/comment`, { value });

export const follow = (id,data)=> API.put(`/user/${id}/follow`, data)
export const unfollow = (id, data)=> API.put(`/user/${id}/unfollow`, data)

// export const login = (formData) => API.post('/user/login', formData);
// export const signup = (formData) => API.post('/user/signup', formData);