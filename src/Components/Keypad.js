import React, { useState } from "react";
import "./Keypad.css";

const buttons = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["00", "0", "X"],
  [".", "Cancel"]
];

export default function Keypad() {
  const [value, setValue] = useState(200);

  const handleButtonClick = (button) => {
    if (button === "X") {
      // Delete the last digit
      setValue(Math.floor(value / 10));
    } else if (button === "Cancel") {
      // Reset the value
      setValue(0);
    } else {
      // Append the button to the value
      setValue(value * 10 + Number(button));
    }
  };

  return (
    <div className="Appy">
      <div className="keypad">
        <div className="display">Ksh: {value.toFixed(2)}</div>
        {buttons.map((row, i) => (
          <div className="row" key={i}>
            {row.map((button, j) => (
              <div
                className={`button ${button === "X" || button === "Cancel" ? "red" : ""}`}
                key={j}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
