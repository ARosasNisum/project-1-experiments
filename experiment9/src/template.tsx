import {Outlet} from "react-router-dom"; // Assuming you have a corresponding CSS file

const Template = () => {
    return (
        <div id="page">
            <div id="header">
                <h1>
                    <a href="/">CustomLoginPage with React</a> {/* Updated link text */}
                </h1>
            </div>
            <div id="container">
                <div id="content"><Outlet/></div>
                {/* Dynamic content will go here */}
            </div>
            <div id="footer"></div>
        </div>
    );
};

export default Template;