import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000',   // or your deployed backend URL
  headers: { 'Content-Type': 'application/json' }
});

export const fetchSlides = () => client.get('/slides');
export const createSlide = data => client.post('/slides', data);
export const updateSlide = (id, data) => client.put(`/slides/${id}`, data);
export const deleteSlide = id => client.delete(`/slides/${id}`);
