import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./home";
import LoginForm from "./login";
import ProtectedPage from "./protected";
import Template from "./template.tsx";
import {useAuth} from "./security.tsx";

import './assets/screen.css'

const AppRouter = () => {
    const auth = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/protected"
                           element={auth.isAuthenticated ? <ProtectedPage/> : <Navigate to={'/login'}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;