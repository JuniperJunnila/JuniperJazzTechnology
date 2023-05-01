import React from "react";
import GoldSpiral from "../../utils/GoldenSpiral";

export default function About({ orientation, aboutElements, _updateOrientation }) {
  return (
    <div className="about" id="about">
      <GoldSpiral
        orientation={orientation}
        elements={aboutElements}
        _updateOrientation={_updateOrientation}
      />
    </div>
  );
}
