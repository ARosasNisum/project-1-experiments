import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, TextField} from '@mui/material';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const auth = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = auth.login(username, password);

            if (response) {
                // Successful login - redirect or update app state
                setUsername('')
                setPassword('')
                setRememberMe(false)
                navigate('/protected')
            } else {
                // Handle login errors (display error messages, etc.)
                console.error('Login failed:');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>This is the custom login page.</h2>
            <TextField
                label="User *"
                required
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password *"
                type="password"
                required
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                }
                label="Remember me"
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;