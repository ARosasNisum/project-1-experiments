import {useAuth} from "./security.tsx";
import React, {useState} from 'react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const auth = useAuth()

    const validate = (): boolean => {
        let valid = true

        if (!username) {
            valid = false
            setErrorMessage('Username is required')
        }

        if (!password) {
            valid = false
            setErrorMessage('Password is required')
        }

        return valid
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (validate()) {
            try {
                const loginSuccess = await auth.login(username, password);
                if (loginSuccess) {
                    console.log('Login successful');
                    // Resetear formulario
                    setUsername('');
                    setPassword('');
                    setErrorMessage('');
                } else {
                    setErrorMessage('Bad credentials');
                }
            } catch (error) {
                console.error('Login failed:', error);
                setErrorMessage('Bad credentials');
            }
        }

    };

    return (
        <div>
            <h2>This is the custom login page.</h2>

            <form id="loginForm" onSubmit={handleSubmit}>
                {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}

                <div>
                    <label htmlFor="j_username">User: *</label>
                    <input
                        type="text"
                        id="j_username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="j_password">Password: *</label>
                    <input
                        type="password"
                        id="j_password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="_spring_security_remember_me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="_spring_security_remember_me">Remember me</label>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;