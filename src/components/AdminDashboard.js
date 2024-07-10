// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import BookList from './BookList';

const AdminDashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const booksData = await fetchBooks();
                setBooks(booksData);
            } catch (error) {
                console.error('Error fetching books', error);
            }
        };

        loadBooks();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <BookList books={books} />
        </div>
    );
};

export default AdminDashboard;
