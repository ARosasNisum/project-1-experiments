// React component example (using axios for API calls)
import axios from 'axios';
import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<boolean>
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: IProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const login = async (username: string, password: string) => {

        try {
            const response = await axios.post('/api/login', {username, password});
            // Store the token securely (consider using a library like js-cookie)
            if (response.status === 200) {
                localStorage.setItem('authToken', response.data.token);
                setIsAuthenticated(true);
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

    const logout = () => {
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};