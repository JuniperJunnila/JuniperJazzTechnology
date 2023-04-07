import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import AllRoutes from "./utils/Routes/Routes.js";

const initialAppState = {
  //GoldenSpiral.js and SilverSpiral.js
  orientation:
    window.screen.availHeight >= window.screen.availWidth
      ? "vertical"
      : "horizontal",
  goldenSpiralElements: [
    <div>
      <p>
        Ut ex metus, iaculis quis volutpat a, fermentum et orci. Maecenas elit
        ipsum, egestas vel metus in, volutpat mattis sem. Vivamus facilisis
        tellus at tristique varius. Nullam sagittis eleifend sollicitudin.
        Curabitur placerat porttitor velit nec porta. Ut eros lectus,
        sollicitudin non hendrerit eget, maximus nec leo. Ut fringilla euismod
        faucibus. Vestibulum et lorem ex. Sed mollis cursus massa et lacinia.
        Maecenas tempor nunc nec mattis egestas.
      </p>
    </div>,
    <div>
      <p>
        Nunc nec enim faucibus, consectetur sem faucibus, ultricies orci.
        Quisque interdum ante est, vitae tempor felis posuere vel. Nulla quis
        urna luctus, molestie est vel, pellentesque orci. Maecenas sit amet
        sapien sed turpis commodo sollicitudin. Aenean quis lobortis magna.
        Maecenas ut ligula nec massa lobortis auctor in pellentesque elit.
        Maecenas efficitur lacinia ex, a semper turpis pulvinar in. Ut odio
        orci, ultricies eget venenatis quis, mollis id elit. Ut mollis nisl
        magna, vel lacinia arcu accumsan eget.
      </p>
    </div>,
    <div>
      <p>
        Donec nec nibh quam. Sed vel ante est. Aliquam rhoncus dui vel velit
        consectetur, at dignissim urna congue. Duis et ligula ac odio rhoncus
        maximus. Sed at lectus molestie, malesuada felis et, semper nisl.
        Vestibulum arcu elit, tempus quis orci vitae, hendrerit efficitur dui.
        Vivamus libero nulla, vulputate quis eros vitae, tempus bibendum eros.
        Sed vitae erat velit. Ut eu fringilla nulla, non interdum sem. Quisque
        non suscipit ipsum.
      </p>
    </div>,
    <div>
      <p>
        Pellentesque vitae eros erat. Aenean vehicula condimentum nisl, ac
        luctus magna. Donec mattis tempus diam, ac ultricies nunc pellentesque
        a. Proin scelerisque diam lectus, pretium facilisis est sagittis in.
        Vivamus sit amet suscipit eros, vel rutrum lectus. In sodales lectus
        nunc, in faucibus enim molestie consectetur. Quisque sollicitudin
        tristique feugiat.
      </p>
    </div>,
  ],
  silverSpiralElements: [
    <div>
      <p>
        Ut ex metus, iaculis quis volutpat a, fermentum et orci. Maecenas elit
        ipsum, egestas vel metus in, volutpat mattis sem. Vivamus facilisis
        tellus at tristique varius. Nullam sagittis eleifend sollicitudin.
        Curabitur placerat porttitor velit nec porta. Ut eros lectus,
        sollicitudin non hendrerit eget, maximus nec leo. Ut fringilla euismod
        faucibus. Vestibulum et lorem ex. Sed mollis cursus massa et lacinia.
        Maecenas tempor nunc nec mattis egestas.
      </p>
    </div>,
    <div>
      <p>
        Nunc nec enim faucibus, consectetur sem faucibus, ultricies orci.
        Quisque interdum ante est, vitae tempor felis posuere vel. Nulla quis
        urna luctus, molestie est vel, pellentesque orci. Maecenas sit amet
        sapien sed turpis commodo sollicitudin. Aenean quis lobortis magna.
        Maecenas ut ligula nec massa lobortis auctor in pellentesque elit.
        Maecenas efficitur lacinia ex, a semper turpis pulvinar in. Ut odio
        orci, ultricies eget venenatis quis, mollis id elit. Ut mollis nisl
        magna, vel lacinia arcu accumsan eget.
      </p>
    </div>,
    <div>
      <p>
        Donec nec nibh quam. Sed vel ante est. Aliquam rhoncus dui vel velit
        consectetur, at dignissim urna congue. Duis et ligula ac odio rhoncus
        maximus. Sed at lectus molestie, malesuada felis et, semper nisl.
        Vestibulum arcu elit, tempus quis orci vitae, hendrerit efficitur dui.
        Vivamus libero nulla, vulputate quis eros vitae, tempus bibendum eros.
        Sed vitae erat velit. Ut eu fringilla nulla, non interdum sem. Quisque
        non suscipit ipsum.
      </p>
    </div>,
    <div>
      <p>
        Pellentesque vitae eros erat. Aenean vehicula condimentum nisl, ac
        luctus magna. Donec mattis tempus diam, ac ultricies nunc pellentesque
        a. Proin scelerisque diam lectus, pretium facilisis est sagittis in.
        Vivamus sit amet suscipit eros, vel rutrum lectus. In sodales lectus
        nunc, in faucibus enim molestie consectetur. Quisque sollicitudin
        tristique feugiat.
      </p>
    </div>,
    <div>
      <p>
        Quisque ex massa, tempor in magna ut, venenatis consectetur dolor. Donec
        congue leo nulla, vitae sollicitudin tellus molestie non. Praesent
        fermentum ultricies bibendum. Pellentesque pulvinar gravida urna nec
        vehicula. Nunc a quam et ipsum commodo porttitor. Praesent id lacinia
        lorem. In commodo auctor urna, ac bibendum neque mattis in. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis dapibus urna magna, ac commodo tortor tincidunt id.
        Vivamus scelerisque nisi at dolor vulputate pretium. Ut id tempus lacus,
        a convallis odio.
      </p>
    </div>,
  ],
};

export default function App() {
  const [appState, setAppState] = useState(initialAppState);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const _updateGoldenSpiral = (target, updatedData) => {
    if (target.toLowerCase() === "elements") {
      setAppState({ ...appState, goldenSpiralElements: updatedData });
    } else if (target.toLowerCase() === "orientation") {
      setAppState({ ...appState, orientation: updatedData });
    } else {
      console.error(`failed to update Golden Spiral component`);
    }
  };

  const _updateSilverSpiral = (target, updatedData) => {
    if (target.toLowerCase() === "elements") {
      setAppState({ ...appState, silverSpiralElements: updatedData });
    } else if (target.toLowerCase() === "orientation") {
      setAppState({ ...appState, orientation: updatedData });
    } else {
      console.error(`failed to update Silver Spiral component`);
    }
  };

  return (
    <div className="page" data-theme={theme}>
      <AllRoutes
        id="page"
        appState={appState}
        updaters={{
          _updateGoldenSpiral,
          _updateSilverSpiral,
        }}
        theme={theme}
        switchTheme={switchTheme}
      />
    </div>
  );
}
