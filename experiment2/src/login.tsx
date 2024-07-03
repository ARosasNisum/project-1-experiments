import React, { useState } from 'react';
import {useAuth} from "./security.tsx";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ username?: string, password?: string }>({});

  const auth = useAuth()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic client-side validation (you can expand this)
    const newErrors: { username?: string, password?: string } = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Perform login logic here (e.g., send credentials to your backend)
      auth.login(username, password).then(() => {
          console.log('Login successful')
          console.log(username, password)
      })
    }
  };

  return (
    <div>
      <h2>This is the custom login page.</h2>

      <form onSubmit={handleSubmit}>
        <div> {/* Consider using a CSS grid system for layout */}
          <label htmlFor="username">User: *</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>

        <div>
          <label htmlFor="password">Password: *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
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