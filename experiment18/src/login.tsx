import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, TextField} from '@mui/material';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const auth = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await auth.login(username, password);

            // Handle successful login (e.g., redirect, store tokens)
            if (response) {
                console.log('Login successful:', response);

                navigate('/protected')
            } else {
                console.log('Login failed:', response);
            }
        } catch (error) {
            // Handle login errors (e.g., display error messages)
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    label="User *"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label="Password *"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
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
            <Button type="submit" variant="contained">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;