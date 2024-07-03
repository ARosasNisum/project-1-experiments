import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, TextField, Typography} from '@mui/material';
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

            if (auth.login(username, password)) {
                // Handle successful login (e.g., store token, redirect)
                console.log('Login successful:', auth.isAuthenticated);

                setUsername('')
                setPassword('')
                setRememberMe(false)
                setErrorMessage('')

                navigate('/protected')

            }

        } catch (error) {
            // Handle login errors (e.g., display error message)
            setErrorMessage('Login failed');
        }
    };

    return (
        <div> {/* You might want to wrap this in a Grid or other layout component */}
            <Typography variant="h5" gutterBottom>
                This is the custom login page.
            </Typography>
            <form onSubmit={handleSubmit}>
                <div> {/* Use a Grid or similar for layout here */}
                    <TextField
                        label="User *"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password *"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
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
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>

                {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
            </form>
        </div>
    );
};

export default Login;