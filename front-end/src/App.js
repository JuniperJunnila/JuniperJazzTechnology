import React, { useRef, useState } from "react";
import AllRoutes from "./utils/Routes/Routes.js";
import initialAppState from "./utils/initialAppState.js";
import { __switchTheme, __alternateTheme } from "./utils/theme.js";
import { Transition } from "react-transition-group";

export default function App() {
  const [appState, setAppState] = useState(initialAppState);

  const { theme, orientation, homeElements, aboutElements, inProp } = appState;

  console.log(theme.startsWith("gold"));

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const _updateTheme = (updatedData) => {
    setAppState({ ...appState, theme: updatedData });
  };

  const _updateInProp = () => {};

  const _updateHome = (updatedData) => {
    setAppState({ ...appState, homeElements: updatedData });
  };

  const _updateOrientation = (updatedData) => {
    setAppState({ ...appState, orientation: updatedData });
  };

  const _updateAbout = (updatedData) => {
    setAppState({ ...appState, aboutElements: updatedData });
  };

  const _switchTheme = () => {
    __switchTheme(theme, _updateTheme);
  };
  const _alternateTheme = () => {
    __alternateTheme(theme, _updateTheme, _updateInProp);
  };

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const nodeRef = useRef(null);

  return (
    <div className="page" data-theme={theme}>
      <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
        {(state) => (
          <div
            className="bg-img"
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>

      <AllRoutes
        id="page"
        appState={appState}
        states={{
          theme,
          orientation,
          homeElements,
          aboutElements,
        }}
        updaters={{
          _updateOrientation,
          _updateAbout,
          _updateHome,
          _alternateTheme,
          _switchTheme,
          _updateInProp,
        }}
      />
    </div>
  );
}
