import {Outlet} from "react-router-dom";

const Template = () => {
  return (
    <div id="page"> 
      <header id="header">
        <h1><a href="/home">CustomLoginPage with React</a></h1> 
      </header>
      <main id="container">
        <div id="content">
          <Outlet/>
        </div>
      </main>
      <footer id="footer">
        {/* Footer content can go here */}
      </footer>
    </div>
  );
};

export default Template;