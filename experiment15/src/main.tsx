import React from 'react'
import ReactDOM from 'react-dom/client'
import {AuthProvider} from "./security.tsx";
import AppRouter from "./approuter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </React.StrictMode>,
)
