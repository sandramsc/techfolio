import React, { Component } from "react";

export class plusIcon extends Component {
  render() {
    return (
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1V9"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 5H9"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default plusIcon;
