import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, FormControlLabel, Checkbox, Typography } from '@mui/material';
import {useAuth} from "./security.tsx";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useAuth()
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      const response = auth.login(username, password);

      if (response) {
        // Handle successful login (e.g., store tokens, redirect)
        console.log('Login successful:');

        setUsername('')
        setPassword('')
        setErrorMessage('')
        setRememberMe(false)

        navigate('/protected'); // Example redirect
      }

    } catch (error) {
      // Handle login errors (display error message)
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div> {/* You can replace this div with a Grid from @mui/material for better layout*/}
      <Typography variant="h4" gutterBottom>
        This is the custom login page
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You can define whatever you want here.
      </Typography>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div> {/* You can replace this div with a Grid from @mui/material for better layout*/}
          <TextField
            label="User *"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
        <div> {/* You can replace this div with a Grid from @mui/material for better layout*/}
          <TextField
            label="Password *"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
        <div> {/* You can replace this div with a Grid from @mui/material for better layout*/}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember me"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;