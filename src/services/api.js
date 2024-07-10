// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000, // Timeout after 5 seconds
});

export const fetchBooks = async () => {
    try {
        const response = await axiosInstance.get('/books');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post('/api/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/api/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Add more API functions for other endpoints (e.g., transactions)
