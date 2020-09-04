import React from "react";
import Goo from "gooey-react";

function GooeyReact() {
  return (
    <div intensity="strong">
      <Goo style={{ animation: "floating  8s linear infinite", marginTop: "5em" }}>
        <svg width="192" height="192">
          <circle
            cx="37%"
            cy="37%"
            fill="mediumspringgreen"
            r="46"
          />
          <circle cx="63%" cy="63%" fill="lightseagreen" r="40" />
          <circle cx="23%" cy="83%" fill="mediumaquamarine" r="20" />

        </svg>
      </Goo>
    </div>
  );
}

export default GooeyReact;
