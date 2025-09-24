import React from "react";
import "./Buttons.css";
export default function Buttons({ text,onClick, style,}) {

  return (
    <div className="Button" onClick={onClick} style={style}>
      {text}
    </div>
  );
}
