// AdminDashboardPage.js
import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { fetchBooks } from '../services/api';

const AdminDashboardPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
            } catch (error) {
                console.error(error);
            }
        };

        getBooks();
    }, []);

    const handleAddBook = () => {
        // Functionality to add a book
    };

    const handleEditBook = (bookId) => {
        // Functionality to edit a book
    };

    const handleDeleteBook = (bookId) => {
        // Functionality to delete a book
    };

    return (
        <Container className="mt-5">
            <h2>Admin Dashboard</h2>
            <Button variant="primary" onClick={handleAddBook} className="mb-3">Add Book</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.status}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEditBook(book._id)} className="mr-2">Edit</Button>
                                <Button variant="danger" onClick={() => handleDeleteBook(book._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminDashboardPage;
