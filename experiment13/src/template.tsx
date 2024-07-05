// Layout.tsx
import React from 'react';
import {Outlet} from "react-router-dom"; // Example using CSS Modules

const Layout: React.FC = () => {
    return (
        <div id="page">
            <header id="header">
                <h1><a href="/">CustomLoginPage with Spring-Security and JSF</a></h1>
            </header>
            <main id="container">
                <section id={"content"}>
                    <Outlet/>
                </section>
            </main>
            <footer id="footer">
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Layout;