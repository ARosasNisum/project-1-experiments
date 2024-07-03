import {Outlet} from "react-router-dom";

const Template= () => {
  return (
      <div id={"page"}>
          <header id={"header"}>
              <h1><a href="">CustomLoginPage with Spring-Security and JSF</a></h1>
          </header>
          <section id={"container"}>
              <section id={"content"}>
                  <Outlet/>
              </section>
          </section>
          <footer id={"footer"}></footer>
      </div>
  );
};

export default Template;