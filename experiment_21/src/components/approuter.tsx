import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth.tsx';

const components: {[key: string]: React.ComponentType<any>} = {
  Home: React.lazy(() => import('./home')),
  Login: React.lazy(() => import('./login')),
  Protected: React.lazy(() => import('./protected')),
  Template: React.lazy(() => import('./template'))
};


const AppRouter: React.FC = () => {
  const auth = useAuth();
  console.log('isAuthenticated', auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home"/> }/>
        <Route
          path="/home"
          element={
            <React.Suspense fallback={ <div>Loading...</div> }>
              <components.Home/>
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={ <div>Loading...</div> }>
              <components.Login/>
            </React.Suspense>
          }
        />
        <Route
          path="/protected"
          element={
            auth.isAuthenticated
              ?
              <React.Suspense fallback={ <div>Loading...</div> }>
                <components.Protected/>
              </React.Suspense>
              :
              <React.Suspense fallback={ <div>Loading...</div> }>
                <components.Login/>
              </React.Suspense>
          }
        />
        <Route
          path="/template"
          element={
            <React.Suspense fallback={ <div>Loading...</div> }>
              <components.Template/>
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
