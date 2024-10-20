import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UsersList from './pages/UsersList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/users" />} />
        <Route path="/users" element={isAuthenticated ? <UsersList onLogout={handleLogout} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
