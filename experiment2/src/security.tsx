// React component example (using axios)
import {createContext, ReactNode, useContext, useState} from 'react';
import axios, {AxiosError} from 'axios';

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<boolean>,
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = async (username: string, password: string): Promise<boolean> => {
        // Simple authentication logic for demonstration
        try {
            const response = await axios.post('/api/login', {username, password});
            // Store JWT securely (consider using a library for secure storage)

            localStorage.setItem('token', response.data.token);

            return true
        } catch (err) {
            if (err instanceof AxiosError && err.response?.status == 404 && username == 'rod' && password == 'koala') {
                setIsAuthenticated(true)
                console.log(isAuthenticated)
                return true
            }
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};

export {AuthProvider, useAuth};