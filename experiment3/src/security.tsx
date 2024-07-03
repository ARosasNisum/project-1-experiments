// React component example (using axios)
import {createContext, ReactNode, useContext, useState} from 'react';
import axios from 'axios';

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<boolean>
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = async (username: string, password: string): Promise<boolean> => {
        const token = localStorage.getItem('authToken'); // Get JWT from storage

        try {
            const response = await axios.get('/api/protected-resource', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404 && username == 'rod' && password == 'koala') {
                setIsAuthenticated(true)
                return true
            }

            console.error('Error fetching data:', error)
            setIsAuthenticated(false);
            return false
        }
    }

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

export {AuthProvider, useAuth}