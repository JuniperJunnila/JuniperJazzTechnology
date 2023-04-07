import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Home from "../../components/Home/Home.js";
import PageNotImplemented from "../PageNotImplemented.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

//SCSS Tag Group: r1
export default function AllRoutes({ appState, updaters, theme, switchTheme }) {
  const { _updateHeader, _updateHome, _updateFooter } = updaters;
  return (
    <>
      <BrowserRouter>
        <article id="article">
          <header className="header" id="header">
            <Header
              appState={appState}
              _updateHeader={_updateHeader}
              theme={theme}
              switchTheme={switchTheme}
            />
          </header>
          <main id="main">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home appState={appState} _updateHome={_updateHome} />}
              />
              <Route path="*" element={<PageNotImplemented />} />
            </Routes>
          </main>
          <footer id="footer">
            <Footer appState={appState} _updateFooter={_updateFooter} />
          </footer>
        </article>
      </BrowserRouter>
      <Outlet />
    </>
  );
}
