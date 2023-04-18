import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import AllRoutes from "./utils/Routes/Routes.js";
import initialAppState from "./utils/initialAppState.js";

export default function App() {
  const [appState, setAppState] = useState(initialAppState);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark === "dark" ? "default-dark" : "default-light"
  );

  const switchTheme = () => {
    let newTheme;

    switch (theme) {
      case "default-dark":
        newTheme = "default-light";
        break;
      case "default-light":
        newTheme = "default-dark";
        break;

      case "gold-dark":
        newTheme = "gold-light";
        break;
      case "gold-light":
        newTheme = "gold-dark";
        break;

      case "green-dark":
        newTheme = "green-light";
        break;
      case "green-light":
        newTheme = "green-dark";
        break;

      case "greyscale-dark":
        newTheme = "greyscale-light";
        break;
      case "greyscale-light":
        newTheme = "greyscale-dark";
        break;

      default:
        newTheme = "default-dark";
        break;
    }

    setTheme(newTheme);
  };

  const _alternateTheme = () => {
    if (theme.startsWith("d")) {
      if (theme.endsWith("dark")) {
        setTheme("gold-dark");
      } else {
        setTheme("gold-light");
      }
    } else if (theme.startsWith("gold")) {
      if (theme.endsWith("dark")) {
        setTheme("green-dark");
      } else {
        setTheme("green-light");
      }
    } else if (theme.startsWith("green")) {
      if (theme.endsWith("dark")) {
        setTheme("greyscale-dark");
      } else {
        setTheme("greyscale-light");
      }
    } else if (theme.startsWith("grey")) {
      if (theme.endsWith("dark")) {
        setTheme("default-dark");
      } else {
        setTheme("default-light");
      }
    }
  };

  const _updateHome = (updatedData) => {
    setAppState({ ...appState, homeElements: updatedData });
  };

  const _updateOrientation = (updatedData) => {
    setAppState({ ...appState, orientation: updatedData });
  };

  const _updateAbout = (updatedData) => {
    setAppState({ ...appState, aboutElements: updatedData });
  };

  return (
    <div className="page" data-theme={theme}>
      <AllRoutes
        id="page"
        appState={appState}
        updaters={{
          _updateOrientation,
          _updateAbout,
          _updateHome,
          _alternateTheme,
        }}
        theme={theme}
        switchTheme={switchTheme}
      />
    </div>
  );
}
