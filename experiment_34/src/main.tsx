import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/approuter.tsx';
import { AuthProvider } from './hooks/useAuth.tsx';
import './assets/screen.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  </React.StrictMode>
);
