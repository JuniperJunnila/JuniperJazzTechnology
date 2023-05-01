import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Home from "../../components/Home/Home.js";
import PageNotImplemented from "../PageNotImplemented.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import About from "../../components/About/About.js";

//SCSS Tag Group: r1
export default function AllRoutes({ updaters, states }) {
  const {
    _updateHeader,
    _updateHome,
    _updateOrientation,
    _updateAbout,
    _updateFooter,
    _alternateTheme,
    _switchTheme,
    _updateInProp,
  } = updaters;

  const { theme, orientation, homeElements, aboutElements } = states;

  return (
    <>
      <BrowserRouter>
        <article id="article">
          <header className="header" id="header">
            <Header
              _updateHeader={_updateHeader}
              _switchTheme={_switchTheme}
              _alternateTheme={_alternateTheme}
              _updateInProp={_updateInProp}
            />
          </header>
          <main id="main" className="main">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    orientation={orientation}
                    homeElements={homeElements}
                    _updateOrientation={_updateOrientation}
                    _updateHome={_updateHome}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    orientation={orientation}
                    aboutElements={aboutElements}
                    _updateOrientation={_updateAbout}
                  />
                }
              />
              <Route path="*" element={<PageNotImplemented />} />
            </Routes>
          </main>
          <footer id="footer" className="footer">
            <Footer _updateFooter={_updateFooter} />
          </footer>
        </article>
      </BrowserRouter>
      <Outlet />
    </>
  );
}
