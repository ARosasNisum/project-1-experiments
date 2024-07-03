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
      const response = await fetch('/api/login', { // Replace with your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, rememberMe }),
      });

      if (response.status == 404) {
        if (auth.login(username, password)) {
          console.log('login successful!')
        }
      }

      if (response.ok) {
        // Successful login - redirect or update app state
        console.log('Login successful!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login.');
      console.error('Login error:', error);
    }
  };

  return (
    <div> 
      <h2>Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>} 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: *</label>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;