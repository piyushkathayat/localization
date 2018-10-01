import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h4>Admin Dashboard</h4>
            <ul>
                <li>
                    <Link to="/admin/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/admin/users">Users</Link>
                </li>
            </ul>
        </div>

    )
};

export default Admin;
