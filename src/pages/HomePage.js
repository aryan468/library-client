// HomePage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container className="p-5 my-5 bg-light rounded">
            <h1>Welcome to Library Management System</h1>
            <p>This is the home page. You can navigate to login or register.</p>
            <Link to="/login">
                <Button variant="primary" className="mr-2">Login</Button>
            </Link>
            <Link to="/register">
                <Button variant="secondary">Register</Button>
            </Link>
        </Container>
    );
};

export default HomePage;
