// Template.tsx
import React from 'react';
import {Outlet} from "react-router-dom";


const Template: React.FC = () => {
    return (
        <div id="page">
            <header id="header">
                <h1>
                    <a href="/">CustomLoginPage with React</a> {/* Updated link */}
                </h1>
            </header>
            <main id="container">
                <div id="content"><Outlet/></div>
                {/* Dynamic content area */}
            </main>
            <footer id="footer"></footer>
        </div>
    );
};

export default Template;