import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { store } from "../store";
import appleImage from '../assets/apple.png';
import blueberryImage from '../assets/blueberry.png';
import cherriesImage from '../assets/cherries.png';
import grapesImage from '../assets/grapes.png';
import passionfruitImage from '../assets/passion-fruit.png';
import strawberryImage from '../assets/strawberry.png';
import Symbol from "./Symbol";
import Button from "./Button";

// Define an array of all the symbols (images) that can appear on the reels
const symbol = [appleImage, blueberryImage, cherriesImage, grapesImage, passionfruitImage, strawberryImage]
// Define the duration of the spin animation (in milliseconds), as well as the number of rows and columns on the reels
const spinDuration = 3000;
const numRows = 3;
const numCols = 3;

// Define an array of all the possible winning combinations of symbols on the reels
const winCombos = [
   // Horizontal wins
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   // Vertical wins
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   // Diagonal wins
   [0, 4, 8],
   [2, 4, 6],
];

const Reels: React.FC = () => {
  // Define state variables for the current symbols on the reels, whether a win has been detected, and which symbols are part of the winning combination (if any)
  const dispatch = useDispatch();
  const [reelSymbol, setReelSymbol] = useState<string[]>(getNewReels());
  const [winDetected, setWinDetected] = useState(false);
  const [winningSymbols, setWinningSymbols] = useState<number[]>([]);

  // Function to generate a new set of random symbols for the reels
  function getNewReels(): string[] {
    const newReelSymbols: string[] = [];
    const randomSymbols: string[] = [];

    // Generate a random set of symbols with no duplicates
    while (randomSymbols.length < symbol.length) {
      const randomIndex: number = Math.floor(Math.random() * symbol.length);
      const randomSymbol: string = symbol[randomIndex];
      if (!randomSymbols.includes(randomSymbol)) {
        randomSymbols.push(randomSymbol);
      }
    };

    // Fill the reels with the random symbols, row by row
    for (let i: number = 0; i < numRows * numCols; i++) {
      const randomIndex: number = Math.floor(Math.random() * randomSymbols.length);
      const randomSymbol: string = randomSymbols[randomIndex];
      newReelSymbols.push(randomSymbol);
    }
    return newReelSymbols;
  }

   // Function to start the spin animation and check for a win afterwards
  const spinReels = () => {
    const newReels = getNewReels();
    const intervalId = setInterval(() => {
      const nextReels = getNewReels();
      setReelSymbol(nextReels);
    }, 50);
    setTimeout(() => {
      clearInterval(intervalId);
      setReelSymbol(newReels);
      checkWin(newReels);
    }, spinDuration);
  };

  // Function to check if the given set of reels contains a winning combination of symbols
  const checkWin = (reels: string[]) => {
    let win = false;
    const winningSymbols: number[] = [];
    winCombos.forEach((combo) => {
      const symbols = combo.map((index) => reels[index]);
      if (symbols.every((symbol) => symbol === symbols[0])) {
        win = true;
        winningSymbols.push(...combo);
      }
    });
    const state = store.getState();
    if (win) {
      console.log('You win!');
      dispatch({ type: 'WIN_BET', payload: state.bet * 2 });
    } else {
      console.log('Better luck next time!');
    }
    setWinDetected(win);
    setWinningSymbols(winningSymbols);
  };

  return (
    <div>
      <div className="reels">
        <div>
          <Symbol symbol={reelSymbol[0]} isWinningSymbol={winningSymbols.includes(0)} />
          <Symbol symbol={reelSymbol[1]} isWinningSymbol={winningSymbols.includes(1)} />
          <Symbol symbol={reelSymbol[2]} isWinningSymbol={winningSymbols.includes(2)} />
        </div>
        <div>
          <Symbol symbol={reelSymbol[3]} isWinningSymbol={winningSymbols.includes(3)} />
          <Symbol symbol={reelSymbol[4]} isWinningSymbol={winningSymbols.includes(4)} />
          <Symbol symbol={reelSymbol[5]} isWinningSymbol={winningSymbols.includes(5)} />
        </div>
        <div>
          <Symbol symbol={reelSymbol[6]} isWinningSymbol={winningSymbols.includes(6)} />
          <Symbol symbol={reelSymbol[7]} isWinningSymbol={winningSymbols.includes(7)} />
          <Symbol symbol={reelSymbol[8]} isWinningSymbol={winningSymbols.includes(8)} />
        </div>
      </div>
      <div className="btncontainer">
        <Button onClick={spinReels} text="Spin the reels" />
      </div>
    </div>
  );
};

export default Reels;
