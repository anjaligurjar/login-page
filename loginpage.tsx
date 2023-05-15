import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
    setIsLoggedIn(true);
  };

  const responseGoogle = (response) => {
    console.log(response);
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <FaUser />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="input-container">
            <FaLock />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <GoogleLogin
          clientId="YOUR_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="google-button"
        />
      </div>
    </div>
  );
}

export default Login;