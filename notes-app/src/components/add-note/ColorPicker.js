import React from "react";
import "./ColorPicker.css";

let colors = ["#ffb3ba", "	#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];

function ColorPicker({selectedColor, onSelect}) {
  return (
    <div id="color-picker">
      <ul>
        {colors.map((color) => (
          <li onClick={() => {onSelect(color)}} className={selectedColor == color ? "selected" : null} style={{ backgroundColor: color }}> </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
