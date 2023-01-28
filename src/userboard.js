import all from "./assets/wordlist.txt";
import gen1 from "./assets/wordlistgen1.txt";
import gen2 from "./assets/wordlistgen2.txt";
import gen3 from "./assets/wordlistgen3.txt";
import gen4 from "./assets/wordlistgen4.txt";
import gen5 from "./assets/wordlistgen5.txt";
import gen6 from "./assets/wordlistgen6.txt";
import gen7 from "./assets/wordlistgen7.txt";
import gen8 from "./assets/wordlistgen8.txt";

import React, { useContext } from "react";
import { AppContext } from "./App";

export const defaultBoard = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const generateWordSet = async (gen) => {
  let wordSet;
  let currentWord;
  let fetchUrl;

  switch (gen) {
    case "all":
      fetchUrl = all;
      break;
    case "gen1":
      fetchUrl = gen1;
      break;
    case "gen2":
      fetchUrl = gen2;
      break;
    case "gen3":
      fetchUrl = gen3;
      break;
    case "gen4":
      fetchUrl = gen4;
      break;
    case "gen5":
      fetchUrl = gen5;
      break;
    case "gen6":
      fetchUrl = gen6;
      break;
    case "gen7":
      fetchUrl = gen7;
      break;
    case "gen8":
      fetchUrl = gen8;
      break;
    default:
      fetchUrl = all;
  }

  await fetch(fetchUrl)
    .then((res) => res.text())
    .then((res) => {
      const wordArr = res.split("\n");
      currentWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });

  return { wordSet, currentWord };
};
