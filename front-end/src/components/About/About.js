import React from "react";
import GoldSpiral from "../../utils/GoldenSpiral";

export default function About({ appState, _updateOrientation, _updateAbout }) {
  return (
    <div className="about" id="about">
      <GoldSpiral
        orientation={appState.orientation}
        elements={appState.aboutElements}
        _updateOrientation={_updateOrientation}
      />
    </div>
  );
}
