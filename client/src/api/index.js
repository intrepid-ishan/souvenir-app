import axios from 'axios';

const url = 'http://localhost:5000/posts';

// returns all posts in the DB
export const fetchPosts = () => axios.get(url);

//returns added post 
export const createPost = (newPost) => axios.post(url, newPost);

//returns updated post 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//returns success message
export const deletePost = (id) => axios.delete(`${url}/${id}`);

//returns updated post 
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);