import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth.tsx';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  const sessionStarted = Boolean(sessionStorage.getItem('started'));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log('Login successful!');
        navigate('/protected');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('There was an error during login:', error);
      setErrorMessage('An error while trying to login using an API. Using fallback instead.');

      if (auth.login(username, password)) {
        console.log('login successful!');
        navigate('/protected');
      }
    }
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    sessionStarted ?
      <div>
        <button type="button" onClick={ handleLogout }>Logout</button>
      </div> :
      <div>
        <h2>This is the custom login page. You can define whatever you want here.</h2>

        { errorMessage && <div className="error">{ errorMessage }</div> }

        <form id="loginForm" onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="username">User: *</label>
            <input
              type="text"
              id="username"
              value={ username }
              onChange={ (e) => setUsername(e.target.value) }
              required
            />

            <label htmlFor="password">Password: *</label>
            <input
              type="password"
              id="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              required
            />

            <label htmlFor="_spring_security_remember_me">Remember me:</label>
            <input type="checkbox" id="_spring_security_remember_me"/>

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
  );
};

export default Login;
