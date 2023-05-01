import React from "react";
import { Link } from "react-router-dom";
import { Lamp, Palette } from "react-bootstrap-icons";

export default function Header({ _switchTheme, _alternateTheme }) {
  return (
    <>
      <h1 className="site-name">Juniper Jazz Technology</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <button
          className="theme-buttons"
          type="button"
          onClick={_alternateTheme}
        >
          <Palette />
        </button>
        <button className="theme-buttons" type="button" onClick={_switchTheme}>
          <Lamp />
        </button>
      </nav>
    </>
  );
}
