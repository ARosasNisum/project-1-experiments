import {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextType {
    isAuthenticated: boolean
    login: (username: string, password: string) => boolean
    logout: () => void
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username: string, password: string): boolean => {
        // Simple authentication logic for demonstration
        if (username === 'rod' && password === 'koala') {
            setIsAuthenticated(true)
            return true
        }
        return false
    };

    const logout = () => {
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
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