import React from "react";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <svg version="1.1" id="L9" x="0px" y="0px" viewBox="0 0 100 100">
        <rect x="20" y="50" width="4" height="10" fill="#000">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="30" y="50" width="4" height="10" fill="#000">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill="#000">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loading;
