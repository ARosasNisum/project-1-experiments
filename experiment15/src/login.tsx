import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from '@mui/material';
import {useAuth} from "./security.tsx";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const auth = useAuth()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await auth.login(username, password);

            if ( response ) {
                // Handle successful login (e.g., store tokens, redirect)
                console.log('Login successful:');
                navigate('/protected'); // Example: Redirect to dashboard
            }
        } catch (error) {
            // Handle login errors (e.g., display error message)
            setErrorMessage('Invalid credentials');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} md={4}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>}
                        label="Remember me"
                    />
                    <Button type="submit" variant="contained" fullWidth>
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default LoginForm;