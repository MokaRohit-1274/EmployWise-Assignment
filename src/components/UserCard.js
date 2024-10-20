import React, { useState } from 'react';
import EditUser from './EditUser';
import './UserCard.css';  // Import the CSS file

function UserCard({ user, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <p>{user.first_name} {user.last_name}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>

      {isEditing && <EditUser user={user} onEditComplete={() => setIsEditing(false)} />}
    </div>
  );
}

export default UserCard;
