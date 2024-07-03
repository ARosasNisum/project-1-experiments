import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedPage from "./protected";
import {useAuth} from "./security.tsx";
import Template from "./template.tsx";
import Home from "./home.tsx";
import LoginForm from "./login.tsx";

import './assets/screen.css'

const AppRouter = () => {
    const auth = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Template/>}>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route
                        path="/protected"
                        element={
                            auth.isAuthenticated ? (
                                <ProtectedPage/>
                            ) : (
                                <Navigate to="/login" replace/> // Redirect to login if not authenticated
                            )
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;