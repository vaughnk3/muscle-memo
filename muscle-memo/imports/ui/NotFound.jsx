import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div>
        <h1>404 - the page you are looking for is not found</h1>
        <Link to="/login">Back to login</Link>
    </div>
)