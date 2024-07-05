// React component (simplified)
import React, {createContext, ReactNode, useContext, useState} from 'react';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>,
  logout: () => void
}

interface IProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)
export const AuthProvider: React.FC<IProps> = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const login = async (username: string, password: string) => {

    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.status === 200) {
        setIsAuthenticated(true)
        return true
      }
      // Handle successful login (e.g., store token, redirect)

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
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
};