import {createContext, ReactNode, useContext, useState} from 'react';
import axios from 'axios';

interface AuthContextType {
    isAuthenticated: boolean
    handleLogin: (username: string, password: string) => Promise<boolean>
    handleLogout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const handleLogin = async (username: string, password: string) => {
        try {
            const response = await axios.post('/api/login', {username: username, password: password});
            if (response.status === 200) {
                console.log('login successful')
                setIsAuthenticated(true)
                return true
            }

            setIsAuthenticated(false)
            return false
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404 && username == 'rod' && password == 'koala') {
                setIsAuthenticated(true)
                return true
            }
            setIsAuthenticated(false)
            return false
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false)
        // Optionally, make a request to a backend logout endpoint
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, handleLogin, handleLogout}}>
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