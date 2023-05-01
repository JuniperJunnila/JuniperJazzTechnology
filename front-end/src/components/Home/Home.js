import React from "react";
import SilverSpiral from "../../utils/SilverSpiral";
import GoldenSpiral from "../../utils/GoldenSpiral";

export default function Home({
  orientation,
  homeElements,
  _updateOrientation,
  _updateHome,
  theme,
}) {
  const goldThemes = ["gold", "greyscale"];
  const themeSelector = goldThemes.includes(theme.split("-")[0]) ? (
    <GoldenSpiral
      orientation={orientation}
      elements={homeElements}
      _updateOrientation={_updateOrientation}
    />
  ) : (
    <SilverSpiral
      orientation={orientation}
      elements={homeElements}
      _updateOrientation={_updateOrientation}
    />
  );

  return (
    <div className="home" id="home">
      {themeSelector}
    </div>
  );
}
