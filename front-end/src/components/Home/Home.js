import React from "react";
import SilverSpiral from "../../utils/SilverSpiral";

export default function Home({ appState, _updateOrientation, _updateHome }) {
  return (
    <div className="home" id="home">
      <SilverSpiral
        orientation={appState.orientation}
        elements={appState.homeElements}
        _updateOrientation={_updateOrientation}
      />
    </div>
  );
}
