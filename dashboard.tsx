import React, { useState } from 'react';

const Dashboard = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  
    console.log('Search query:', searchQuery);
 
    setSearchQuery('');
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {showLogin ? (
        <div>
          <h3>Login Panel</h3>
        
        </div>
      ) : (
        <button onClick={handleToggleLogin}>Show Login</button>
      )}

      {showRegister ? (
        <div>
          <h3>Register Panel</h3>
          {/* Add your registration component or form here */}
        </div>
      ) : (
        <button onClick={handleToggleRegister}>Show Register</button>
      )}

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Dashboard;