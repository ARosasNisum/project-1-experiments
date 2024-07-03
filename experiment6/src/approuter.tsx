import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./home";
import Login from "./login";
import ProtectedPage from "./protected";
import Template from "./template";
import {AuthProvider, useAuth} from "./security";

import './assets/screen.css'

const AppRouter = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Template/>}>
                        <Route index path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route
                            path="/protected"
                            element={
                                <PrivateRoute>
                                    <ProtectedPage/>
                                </PrivateRoute>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

const PrivateRoute = ({children}: { children: JSX.Element }) => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default AppRouter;