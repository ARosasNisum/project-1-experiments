import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./approuter.tsx";
import {AuthProvider} from "./security.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    </React.StrictMode>,
)
