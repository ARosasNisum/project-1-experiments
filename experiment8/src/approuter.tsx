import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./home";
import Login from "./login";
import ProtectedPage from "./protected";
import App from "./template";
import {useAuth} from "./security.tsx";

import './assets/screen.css'

const AppRouter = () => {
    const auth = useAuth()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/protected"
                           element={auth.isAuthenticated ? <ProtectedPage/> : <Navigate to={'/login'}/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;