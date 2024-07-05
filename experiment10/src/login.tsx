// LoginForm.tsx
import React, { useState } from 'react';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      const response = auth.login(username, password);

      if (!response) {
        setErrorMessage('Login failed'); // Customize error handling
      } else {
        // Successful login - redirect or update app state

        console.log('Login successful');
        setUsername('')
        setPassword('')
        setErrorMessage('')
        setRememberMe(false)

        navigate('/protected')
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h2>This is the custom login page.</h2>
      {errorMessage && <div className="error">{errorMessage}</div>} 
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;