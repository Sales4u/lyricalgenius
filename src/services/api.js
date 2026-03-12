// API service calls
import axios from 'axios';

const API_URL = '/api';

export const fetchTracks = () => axios.get(`${API_URL}/tracks`);