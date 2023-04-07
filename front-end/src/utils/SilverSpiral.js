import React from "react";

//number of elements must equal 4

export default function SilverSpiral({ appState, _updateSilverSpiral }) {
  const { orientation } = appState;
  const elements = appState.silverSpiralElements;

  React.useEffect(() => {
    function handleResize() {
      _updateSilverSpiral(
        "orientation",
        window.screen.availHeight >= window.screen.availWidth
          ? "vertical"
          : "horizontal"
      );
    }

    window.addEventListener("resize", handleResize);
  });

  const verticalSilverSpiral = (
    <div className="v-wrapper">
      <div className="silver-rectangle-v">
        <div className="silver-square">{elements[0]}</div>
        <div className="silver-rectangle-h">
          <div className="silver-square">{elements[2]}</div>
          <div className="silver-rectangle-v"></div>
          <div className="silver-square">{elements[3]}</div>
        </div>
        <div className="silver-square">{elements[1]}</div>
      </div>
    </div>
  );
  const horizontalSilverSpiral = (
    <div className="h-wrapper">
      <div className="silver-rectangle-h">
        <div className="silver-square">{elements[0]}</div>
        <div className="silver-rectangle-v">
          <div className="silver-square">{elements[2]}</div>
          <div className="silver-rectangle-h"></div>
          <div className="silver-square">{elements[3]}</div>
        </div>
        <div className="silver-square">{elements[1]}</div>
      </div>
    </div>
  );

  if (orientation === "vertical") {
    return verticalSilverSpiral;
  } else {
    return horizontalSilverSpiral;
  }
}
