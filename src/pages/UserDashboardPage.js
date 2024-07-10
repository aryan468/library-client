// UserDashboardPage.js

import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';

const UserDashboardPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books');
                setBooks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <Container>
            <h2 className="text-center mt-4">User Dashboard</h2>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default UserDashboardPage;
