import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../../components/Home/Home.js";
import PageNotImplemented from "../PageNotImplemented/PageNotImplemented.js";
import Footer from "../../components/Footer/Footer.js";

//SCSS Tag Group: r1
export default function AllRoutes({ appState, updaters }) {
  const { Header } = appState;
  const { _updateHeader, _updateHome, _updateFooter } = updaters;
  return (
    <div className="all-routes" id="all-routes">
      <BrowserRouter>
        <article id="article">
          <header className="header" id="header">
            <Header appState={appState} _updateHeader={_updateHeader} />
          </header>
          <main id="main">
            <Routes>
              <Route
                path=""
                element={<Home appState={appState} _updateHome={_updateHome} />}
              />

              <Route
                path="/our-philosophy"
                element={<PageNotImplemented pageName={"Our Philosophy"} />}
              />
            </Routes>
          </main>
          <footer id="footer">
            <Footer appState={appState} _updateFooter={_updateFooter} />
          </footer>
        </article>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}
