import React, { useState } from 'react';
import {useAuth} from "./security.tsx";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useAuth()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Implement your login logic here
      if (auth.login(username, password)) {
        setUsername('')
        setPassword('')
        setRememberMe(false);
        setErrorMessage('')
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login.');
      console.error('Login error:', error);
    }
  };

  return (
    <div> 
      <h2>This is the custom login page.</h2> 

      <form onSubmit={handleSubmit}>
        <div> 
          <label htmlFor="username">User: *</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password: *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;