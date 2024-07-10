// src/components/UserDashboard.js

import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import TransactionHistory from './TransactionHistory';

const UserDashboard = () => {
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
            <h2>User Dashboard</h2>
            <TransactionHistory />
            <h3>Book List</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
