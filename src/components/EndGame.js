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
          : "You didn't guess in enough attempts!"}
      </h3>
      <h1 className="py-2 text-3xl">
        Correct Pokémon:{" "}
        <span className="font-bold text-violet-400">{correctWord}</span>
      </h1>
      {endGame.guessedCorrectly && (
        <h3>
          You guessed in{" "}
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
