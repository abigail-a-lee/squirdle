import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, functionKey, used }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
  const inputLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      className="mt-2 text-xs font-sans font-bold select-none text-center py-4 text-neutral-300 ring-2 ring-sky-700 rounded-md bg-gradient-to-bl from-orange-500 via-sky-500 to-sky-400 m-1 min-h-[6vh] min-w-[3.5vh] cursor-pointer"
      onClick={inputLetter}
    >
      {keyValue === "DELETE" ? "⌫" : keyValue}
    </div>
  );
}

export default Key;
