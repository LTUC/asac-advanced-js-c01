import React, { Component } from "react";

class GradientSVG extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="idCSS">
            <stop offset="0%" stop-color="#4158d0" />
            <stop offset="43%" stop-color="#c850c0" />
            <stop offset="80%" stop-color="#ffcc70" />
          </linearGradient>
        </defs>
        <circle cx="35" cy="35" r="33" stroke-linecap="round" />
      </svg>
    );
  }
}

export default GradientSVG;
