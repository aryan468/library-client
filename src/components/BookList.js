// src/components/BookList.js

import React from 'react';

const BookList = ({ books }) => {
    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
