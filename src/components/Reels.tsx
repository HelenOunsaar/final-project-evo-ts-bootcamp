import React, { useState } from "react";
import appleImage from '../assets/apple.png';
import blueberryImage from '../assets/blueberry.png';
import cherriesImage from '../assets/cherries.png';
import grapesImage from '../assets/grapes.png';
import passionfruitImage from '../assets/passion-fruit.png';
import strawberryImage from '../assets/strawberry.png';
import Symbol from "./Symbol";
import Button from "./Button";

const symbol = [appleImage, blueberryImage, cherriesImage, grapesImage, passionfruitImage, strawberryImage]
const spinDuration = 3000;
const numRows = 3;
const numCols = 3;
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
  const [reelSymbol, setReelSymbol] = useState<string[]>(getNewReels());

  function getNewReels(): string[] {
    const newReelSymbols: string[] = [];
    const randomSymbols: string[] = [];

    while (randomSymbols.length < symbol.length) {
      const randomIndex: number = Math.floor(Math.random() * symbol.length);
      const randomSymbol: string = symbol[randomIndex];
      if (!randomSymbols.includes(randomSymbol)) {
        randomSymbols.push(randomSymbol);
      }
    };

    for (let i: number = 0; i < numRows * numCols; i++) {
      const randomIndex: number = Math.floor(Math.random() * randomSymbols.length);
      const randomSymbol: string = randomSymbols[randomIndex];
      newReelSymbols.push(randomSymbol);
    }
    return newReelSymbols;
  }

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

  const checkWin = (reels: string[]) => {
    let win = false;
    winCombos.forEach((combo) => {
      const symbols = combo.map((index) => reels[index]);
      if (symbols.every((symbol) => symbol === symbols[0])) {
        win = true;
      }
    });
    if (win) {
      console.log('You win!');
    } else {
      console.log('Better luck next time!');
    }
  }

  return (
    <div>
      <div className="reels">
        <div>
          <Symbol symbol={reelSymbol[0]} />
          <Symbol symbol={reelSymbol[1]} />
          <Symbol symbol={reelSymbol[2]} />
        </div>
        <div>
          <Symbol symbol={reelSymbol[3]} />
          <Symbol symbol={reelSymbol[4]} />
          <Symbol symbol={reelSymbol[5]} />
        </div>
        <div>
          <Symbol symbol={reelSymbol[6]} />
          <Symbol symbol={reelSymbol[7]} />
          <Symbol symbol={reelSymbol[8]} />
        </div>
      </div>
      <div className="btncontainer">
        <Button onClick={spinReels} text="Spin the reels" />
      </div>
    </div>
  );
};

export default Reels;
