import React, { useContext } from "react";
import { AppContext } from "../App";

function EndGame() {
  const { endGame, attemptNumber, setEndGame, correctWord } =
    useContext(AppContext);
  return (
    <div className="text-2xl">
      <h3>
        {endGame.guessedCorrectly
          ? "You guessed the Pokémon!"
          : "You failed to guess the Pokémon..."}
      </h3>
      <h1 className="py-2 text-2xl">
        It was:{" "}
        <span className="font-bold flex-col text-3xl text-violet-400">
          {correctWord}
        </span>
        <span>!</span>
      </h1>
      {endGame.guessedCorrectly && (
        <h3>
          It took you{" "}
          <span className="font-bold text-green-400">
            {attemptNumber.attempt}
          </span>
          {`${attemptNumber.attempt !== 1 ? " attempts" : " attempt"}`}
        </h3>
      )}
    </div>
  );
}

export default EndGame;
