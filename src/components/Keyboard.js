import React, { useContext, useCallback, useEffect } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onEnter, onDelete, onSelectLetter, usedLetters } =
    useContext(AppContext);

  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      row1.forEach((k) => {
        if (e.key.toLowerCase() === k.toLowerCase()) {
          onSelectLetter(k);
        }
      });
      row2.forEach((k) => {
        if (e.key.toLowerCase() === k.toLowerCase()) {
          onSelectLetter(k);
        }
      });
      row3.forEach((k) => {
        if (e.key.toLowerCase() === k.toLowerCase()) {
          onSelectLetter(k);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="flex flex-col" onKeyDown={handleKeyboard}>
      <div className="flex flex-row mx-auto">
        {row1.map((letter) => {
          return (
            <div
              className={` ${usedLetters.includes(letter) ? "opacity-20" : ""}`}
            >
              <Key keyValue={letter} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mx-auto">
        {row2.map((letter) => {
          return (
            <div
              className={` ${usedLetters.includes(letter) ? "opacity-20" : ""}`}
            >
              <Key keyValue={letter} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row mx-auto">
        <span className="min-w-[7vh]">
          <Key keyValue={"ENTER"} functionKey />
        </span>
        {row3.map((letter) => {
          return (
            <div
              className={` ${usedLetters.includes(letter) ? "opacity-20" : ""}`}
            >
              <Key keyValue={letter} />
            </div>
          );
        })}
        <span className="min-w-[6vh]">
          <Key keyValue={"DELETE"} functionKey />
        </span>
      </div>
    </div>
  );
}

export default Keyboard;
