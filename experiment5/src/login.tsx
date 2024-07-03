// LoginForm.tsx
import React, {useState} from 'react';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const auth = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Basic client-side validation (you can expand this)
        const validationErrors: Record<string, string> = {};
        if (!username.trim()) {
            validationErrors.username = 'Username is required';
        }
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Replace with your actual authentication logic

            if (auth.login(username, password)) {
                setUsername('')
                setPassword('')
                setRememberMe(false)
                setErrors({})

                navigate('/protected')
            } else {
                console.error('Login failed:', errors);
                setErrors({general: 'Invalid username or password'});
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrors({general: 'An error occurred during login'});
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
                    />
                    {errors.username && <span style={{color: 'red'}}>{errors.username}</span>}
                </div>

                <div>
                    <label htmlFor="password">Password: *</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
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
                {errors.general && <div style={{color: 'red'}}>{errors.general}</div>}
            </form>
        </div>
    );
};

export default LoginForm;