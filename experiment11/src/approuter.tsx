import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./home";
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
                    <Route index element={<Home/>}/>
                    <Route path="/protected"
                           element={auth.isAuthenticated ? <ProtectedPage/> : <Navigate to={'/login'}/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;