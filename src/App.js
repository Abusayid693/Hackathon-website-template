import React from "react";

import "./styles.css";

function Button() {
  return (
    <div className="nav_btn">
      <h3>Sign up</h3>
    </div>
  );
}

export default function NAV() {
  return (
    <div>
      <h1>Rehan</h1>
      <div className="nav-rap">
        <h3>Rehan</h3>
        <h3>Rehan</h3>
        <h3>Rehan</h3>
        <Button />
      </div>
    </div>
  );
}
