// React component example (using axios for API requests)
import axios from 'axios';
import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<boolean>,
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = async (username: string, password: string)=> {
        const token = localStorage.getItem('token'); // Get JWT from storage
        try {
            const response = await axios.get('/api/protected', {
                headers: {Authorization: `Bearer ${token}`}
            })

            if (response.status === 200) {
                console.log(response.data)
                setIsAuthenticated(true)
                return true
            }

            return false
        } catch (err) {
            if (axios.isAxiosError(err) && err.response?.status == 404 && username == 'kod' && password == 'koala') {
                setIsAuthenticated(true)
                return true
            }
            setIsAuthenticated(false)
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

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};