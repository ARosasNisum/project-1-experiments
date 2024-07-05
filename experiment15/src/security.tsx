// React component (simplified)
import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<boolean>,
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<IProps> = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = async (username: string, password: string) => {

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });

            if (response.ok) {
                // Store JWT securely (consider a library like js-cookie)
                localStorage.setItem('token', username);
                setIsAuthenticated(true);
                return true
                // Redirect to protected area
            } else {
                if (response.status === 404 && username == 'rod' && password == 'koala') {
                    setIsAuthenticated(true)
                    return true
                }

                setIsAuthenticated(false)
                return false
            }
        } catch (error) {
            console.error('Login error:', error);
            setIsAuthenticated(false);
            return false
        }
    };

    const logout = () => {
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};