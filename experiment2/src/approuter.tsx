import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./home";
import Login from "./login";
import ProtectedPage from "./protected";
import Template from "./template";

import './assets/screen.css'
import {useAuth} from "./security.tsx";

const AppRouter = () => {
    const auth = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/protected" element={auth.isAuthenticated ? <ProtectedPage/> : <Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;