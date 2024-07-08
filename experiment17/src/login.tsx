import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "./security.tsx"; // Import your CSS file

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
            const response = auth.login(username, password);

            if (response) {
                // Handle successful login (e.g., store tokens, redirect)
                console.log('Login successful:', response);
                navigate('/protected'); // Example redirection
            } else {
                console.log('Login failed:', response);
                setErrorMessage('Invalid password or username');
            }

        } catch (error) {
            // Handle login errors (e.g., display error messages)
            setErrorMessage('Login failed');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
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
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;