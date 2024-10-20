import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import './UsersList.css';  // Import the CSS file

function UsersList({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        setUsers(response.data.data);
      });
  }, [page]);

  const handleDelete = (userId) => {
    axios.delete(`https://reqres.in/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      });
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button>
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default UsersList;
