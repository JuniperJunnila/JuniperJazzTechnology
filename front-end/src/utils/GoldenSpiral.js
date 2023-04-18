import React from "react";

//number of elements must equal 3

export default function GoldenSpiral({
  orientation,
  elements,
  _updateOrientation,
}) {
  React.useEffect(() => {
    function handleResize() {
      _updateOrientation(
        window.screen.availHeight >= window.screen.availWidth
          ? "vertical"
          : "horizontal"
      );
    }

    window.addEventListener("resize", handleResize);
  });

  const verticalGoldenSpiral = (
    <div className="v-wrapper">
      <div className="gold-rectangle-v">
        <div className="gold-square">{elements[0]}</div>
        <div className="gold-rectangle-h">
          <div className="gold-square">{elements[1]}</div>
          <div className="gold-rectangle-v-r">
            <div className="gold-square">{elements[2]}</div>
            <div className="gold-rectangle-h"></div>
          </div>
        </div>
      </div>
    </div>
  );
  const horizontalGoldenSpiral = (
    <div className="h-wrapper">
      <div className="gold-rectangle-h">
        <div className="gold-square">{elements[0]}</div>
        <div className="gold-rectangle-v">
          <div className="gold-square">{elements[1]}</div>
          <div className="gold-rectangle-h-r">
            <div className="gold-square">{elements[2]}</div>
            <div className="gold-rectangle-v"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (orientation === "vertical") {
    return verticalGoldenSpiral;
  } else {
    return horizontalGoldenSpiral;
  }
}
