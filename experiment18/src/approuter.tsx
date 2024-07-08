import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./home";
import LoginForm from "./login";
import Protected from "./protected";
import Template from "./template";

import './assets/screen.css'
import {useAuth} from "./security.tsx";

const AppRouter = () => {
    const auth = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/protected"
                           element={auth.isAuthenticated ? <Protected/> : <Navigate to={'/login'} replace/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;