import {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const login = (username: string, password: string) => {
        // Store JWT token securely (e.g., in local storage)

        if (username === 'rod' && password === 'koala') {
            setIsAuthenticated(true)
            return true
        }
        setIsAuthenticated(false)
        return false
    };

    const logout = () => {
        setIsAuthenticated(false)
    };

    return (
        <AuthContext.Provider value={{isAuthenticated,  login, logout}}>
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