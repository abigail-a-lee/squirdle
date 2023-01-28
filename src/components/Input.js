import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";

function Input({ inputPos, attempt }) {
  const { board, correctWord, attemptNumber, usedLetters, setUsedLetters } =
    useContext(AppContext);
  const input = board[attempt][inputPos];
  const box = useRef(null);
  if (input.length > 0 && box.current !== null) {
    box.current.classList.add("gelatine");
    box.current.classList.add("ring-1");
  }
  if (input.length === 0 && box.current !== null) {
    box.current.classList.remove("gelatine");
    box.current.classList.remove("ring-1");
  }

  const green = correctWord.toUpperCase()[inputPos] === input;
  const yellow = !green && input !== "" && correctWord.includes(input);

  const letterCorrect =
    attemptNumber.attempt > attempt &&
    (green ? "bg-green-500 flip" : yellow ? "bg-yellow-500" : "bg-neutral-800");

  useEffect(() => {
    if (input !== "" && !green && !yellow) {
      setUsedLetters((prev) => [...prev, input]);
    }
  }, [attemptNumber.attempt]);

  return (
    <div className={`input ${letterCorrect}`} ref={box}>
      {" "}
      {input}
    </div>
  );
}

export default Input;
