import React, {useState} from 'react';
import {useAuth} from "./security.tsx";
import {useNavigate} from "react-router-dom"; // Import CSS for styling

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = auth.login(username, password);

            if (response) {
                // Successful login - handle redirect or state updates
                console.log('Login successful!');

                setUsername('')
                setPassword('')
                setRememberMe(false)
                setErrors([])

                navigate('/protected')
            } else {
                setErrors(['Invalid username or password']);
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrors(['An error occurred during login.']);
        }
    };

    return (
        <div className="login-container">
            <h2>This is the custom login page</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">User: *</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {/* Error message for username */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: *</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {/* Error message for password */}
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit">Login</button>

                {/* Display errors if any */}
                {errors.length > 0 && (
                    <ul className="errors">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default LoginForm;