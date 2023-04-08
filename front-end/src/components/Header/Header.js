import React from "react";
import { Link } from "react-router-dom";
import { Lamp, LampFill } from "react-bootstrap-icons";

export default function Header({ theme, switchTheme }) {
  const switchSwitch = theme === "custom-dark" ? <LampFill /> : <Lamp />;
  return (
    <>
      <h1>Juniper Jazz Technology</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/Linkbout">About</Link> |
        <Link to="/contact">Contact</Link>
        <button className="theme-switch" type="button" onClick={switchTheme}>
          {switchSwitch}
        </button>
      </nav>
    </>
  );
}
