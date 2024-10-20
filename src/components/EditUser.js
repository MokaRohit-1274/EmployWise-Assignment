import React, { useState } from 'react';
import axios from 'axios';
import './EditUser.css'; 
function EditUser({ user, onEditComplete }) {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    axios.put(`https://reqres.in/api/users/${user.id}`, {
      first_name: firstName,
      last_name: lastName,
      email
    })
      .then(() => {
        onEditComplete(); // Close the edit form
      });
  };

  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}

export default EditUser;
