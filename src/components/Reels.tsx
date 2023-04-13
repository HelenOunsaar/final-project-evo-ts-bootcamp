import React, { useState } from "react";
import appleImage from '../assets/apple.png';
import blueberryImage from '../assets/blueberry.png';
import cherriesImage from '../assets/cherries.png';
import grapesImage from '../assets/grapes.png';
import passionfruitImage from '../assets/passion-fruit.png';
import strawberryImage from '../assets/strawberry.png';
import Reel from "./Reel";
import Button from "./Button";

const symbol = [appleImage, blueberryImage, cherriesImage, grapesImage, passionfruitImage, strawberryImage]

const Reels: React.FC = () => {
  const [reelSymbol, setReelSymbol] = useState<string[]>(getNewReels());

  function getNewReels(): string[] {
    const newReelSymbols: string[] = [];
    const randomSymbols: string[] = [];

    while (randomSymbols.length < 6) {
      const randomIndex: number = Math.floor(Math.random() * symbol.length);
      const randomSymbol: string = symbol[randomIndex];
      if (!randomSymbols.includes(randomSymbol)) {
        randomSymbols.push(randomSymbol);
      }
    };

    for (let i: number = 0; i < 9; i++) {
      const randomIndex: number = Math.floor(Math.random() * randomSymbols.length);
      const randomSymbol: string = randomSymbols[randomIndex];
      newReelSymbols.push(randomSymbol);
    }
    return newReelSymbols;
  }

  const spinReels = () => {
    const newReels = getNewReels();
    setReelSymbol(newReels);
  };

  return (
    <div>
      <div className="reels">
        <div className="row">
          <Reel symbol={reelSymbol[0]} />
          <Reel symbol={reelSymbol[1]} />
          <Reel symbol={reelSymbol[2]} />
        </div>
        <div className="row">
          <Reel symbol={reelSymbol[3]} />
          <Reel symbol={reelSymbol[4]} />
          <Reel symbol={reelSymbol[5]} />
        </div>
        <div className="row">
          <Reel symbol={reelSymbol[6]} />
          <Reel symbol={reelSymbol[7]} />
          <Reel symbol={reelSymbol[8]} />
        </div>
      </div>
      <div className="btncontainer">
        <Button onClick={spinReels} text="Spin the reels" />
      </div>
    </div>
  );
};

export default Reels;
