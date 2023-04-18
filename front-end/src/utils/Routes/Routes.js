import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Home from "../../components/Home/Home.js";
import PageNotImplemented from "../PageNotImplemented.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import About from "../../components/About/About.js";

//SCSS Tag Group: r1
export default function AllRoutes({ appState, updaters, switchTheme }) {
  const {
    _updateHeader,
    _updateHome,
    _updateOrientation,
    _updateAbout,
    _updateFooter,
    _alternateTheme,
  } = updaters;

  return (
    <>
      <BrowserRouter>
        <article id="article">
          <header className="header" id="header">
            <Header
              appState={appState}
              _updateHeader={_updateHeader}
              switchTheme={switchTheme}
              _alternateTheme={_alternateTheme}
            />
          </header>
          <main id="main" className="main">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    appState={appState}
                    _updateOrientation={_updateOrientation}
                    _updateHome={_updateHome}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    appState={appState}
                    _updateOrientation={_updateAbout}
                  />
                }
              />
              <Route path="*" element={<PageNotImplemented />} />
            </Routes>
          </main>
          <footer id="footer" className="footer">
            <Footer appState={appState} _updateFooter={_updateFooter} />
          </footer>
        </article>
      </BrowserRouter>
      <Outlet />
    </>
  );
}
