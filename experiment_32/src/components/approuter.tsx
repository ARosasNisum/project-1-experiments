import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './template';
import Home from './home';
import Login from './login';
import Protected from './protected';
import { useAuth } from './../hooks/useAuth';

const AppRouter = () => {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Template/> }>
          <Route index element={ <Home/> }/>
          <Route path="/protected" element={ auth.isAuthenticated ? <Protected/> : <Login/> }/>
          <Route path="/login" element={ <Login/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
