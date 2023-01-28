import React, { useEffect } from "react";
import "./App.css";
import GenPicker from "./components/GenPicker";
import GameBoard from "./components/GameBox";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { defaultBoard, generateWordSet } from "./userboard";
import EndGame from "./components/EndGame";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [attemptNumber, setAttemptNumber] = useState({
    attempt: 0,
    inputPos: 0,
  });
  const [genSelect, setGen] = useState("all");

  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  const [usedLetters, setUsedLetters] = useState([]);
  const [endGame, setEndGame] = useState({
    endGame: false,
    guessedCorrectly: false,
  });

  useEffect(() => {
    generateWordSet(genSelect).then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.currentWord.toUpperCase());
    });
  }, [genSelect]);

  useEffect(() => {
    if (attemptNumber.attempt === 6) return;
    const newBoard = [...board];
    newBoard[attemptNumber.attempt][attemptNumber.inputPos] = "";
    setBoard(newBoard);
  }, [attemptNumber.inputPos]);

  const updateBoard = (newValue) => {
    if (attemptNumber.attempt === 6) return;
    const newBoard = [...board];
    newBoard[attemptNumber.attempt][attemptNumber.inputPos] = newValue;
    setBoard(newBoard);
  };

  const updateAttemptNumber = (newPos) => {
    setAttemptNumber({ ...attemptNumber, inputPos: newPos });
  };

  const onSelectLetter = (keyValue) => {
    if (attemptNumber.inputPos > 5) return;
    if (usedLetters.includes(keyValue)) return;
    updateBoard(keyValue);
    updateAttemptNumber(attemptNumber.inputPos + 1);
  };

  const onDelete = () => {
    if (attemptNumber.inputPos === 0) return;
    updateBoard("");
    updateAttemptNumber(attemptNumber.inputPos - 1);
  };

  const onEnter = () => {
    if (attemptNumber.inputPos !== 6) return;

    let word = "";

    for (let i = 0; i < 6; i++) {
      word += board[attemptNumber.attempt][i];
    }

    if (wordSet.has(word.toLowerCase())) {
      setAttemptNumber({ attempt: attemptNumber.attempt + 1, inputPos: 0 });
    } else {
      alert("Pokémon not in list");
    }

    if (word === correctWord) {
      setEndGame({ endGame: true, guessedCorrectly: true });
      return;
    }

    if (attemptNumber.attempt === 5) {
      setEndGame({ endGame: true, guessedCorrectly: false });
      return;
    }
  };

  return (
    <div className="App font-sans text-white">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          attemptNumber,
          setAttemptNumber,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          setUsedLetters,
          usedLetters,
          setEndGame,
          endGame,
          genSelect,
          setGen,
        }}
      >
        <nav>
          <h1 className="flex-col text-4xl font-bold font-sans text-white my-2 justify-center">
            Squirdle
            <div className="flex justify-center">
              <GenPicker />
            </div>
          </h1>
        </nav>

        <div className="font-sans my-12">
          <GameBoard />
        </div>
        <div className="font-sans text-xl font-bold">
          Generation:{" "}
          <span className="text-violet-400">{genSelect.toUpperCase()}</span>
        </div>
        <div className="my-4 font-sans">
          {endGame.endGame ? <EndGame /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
