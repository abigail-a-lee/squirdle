import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Input({ inputPos, attempt }) {
  const { board, correctWord, attemptNumber, usedLetters, setUsedLetters } =
    useContext(AppContext);
  const input = board[attempt][inputPos];

  const green = correctWord.toUpperCase()[inputPos] === input;
  const yellow = !green && input !== "" && correctWord.includes(input);

  const letterCorrect =
    attemptNumber.attempt > attempt &&
    (green ? "bg-green-500" : yellow ? "bg-yellow-500" : "");

  useEffect(() => {
    if (input !== "" && !green && !yellow) {
      setUsedLetters((prev) => [...prev, input]);
    }
  }, [attemptNumber.attempt]);

  return <div className={`input ${letterCorrect}`}> {input}</div>;
}

export default Input;
