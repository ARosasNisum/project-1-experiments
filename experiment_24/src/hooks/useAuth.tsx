import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

interface IProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: IProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(sessionStorage.getItem('started')));

  const login = (username: string, password: string): boolean => {
    // Simple authentication logic for demonstration
    if (username === 'rod' && password === 'koala') {
      setIsAuthenticated(true);
      sessionStorage.setItem('started', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('started');
  };

  return (
    <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
      { children }
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
