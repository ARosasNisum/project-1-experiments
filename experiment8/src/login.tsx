import React, { useState } from 'react';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useAuth()
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {

      const response = await auth.login(username, password);

      if (response) {
        // Successful login - redirect or update app state
        console.log('Login successful!');
        navigate('/protected')
        setUsername('')
        setPassword('')
        setRememberMe(false)
        setErrorMessage('')
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('Network error occurred.');
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>This is the custom login page.</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div>
          <label htmlFor="j_username">User: *</label>
          <input
            type="text"
            id="j_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="j_password">Password: *</label>
          <input
            type="password"
            id="j_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="_spring_security_remember_me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="_spring_security_remember_me">Remember me:</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;