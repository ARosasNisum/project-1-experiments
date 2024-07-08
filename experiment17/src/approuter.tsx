import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./home";
import LoginForm from "./login";
import Protected from "./protected";
import App from "./template";

import './assets/screen.css'
import {useAuth} from "./security.tsx";

const AppRouter = () => {
    const auth = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/protected" element={auth.isAuthenticated ? <Protected/> : <Navigate to={'/login'}/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;