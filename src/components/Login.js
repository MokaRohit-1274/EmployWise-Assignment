import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

function Login({ onLogin }) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    
 
    const loginDetails = {
      email: 'eve.holt@reqres.in', 
      password: 'cityslicka'       
    };


    axios.post('https://reqres.in/api/login', loginDetails)
      .then(response => {
        localStorage.setItem('token', response.data.token); 
        onLogin(); 
      })
      .catch(() => {
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
