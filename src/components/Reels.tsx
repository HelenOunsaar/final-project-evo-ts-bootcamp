import React, { useState } from "react";
import appleImage from '../assets/apple.png';
import blueberryImage from '../assets/blueberry.png';
import cherriesImage from '../assets/cherries.png';
import grapesImage from '../assets/grapes.png';
import passionfruitImage from '../assets/passion-fruit.png';
import strawberryImage from '../assets/strawberry.png';
import Button from "./Button";

const image = [appleImage, blueberryImage, cherriesImage, grapesImage, passionfruitImage, strawberryImage]

const Reels: React.FC = () => {
  const [reelImages, setReelImages] = useState<string[]>(getNewReels());

  function getNewReels() {
    const randomIndices: number[] = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * 6);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const newReelImages = randomIndices.map(index => image[index]);
    return newReelImages;
  };

  const spinReels = () => {
    const newReels = getNewReels();
    setReelImages(newReels);
  };

  return (
    <div>
      <div className="reels">
        {reelImages.map((image, index) => (
          <img key={index} src={image} alt={`Reel ${index + 1}`} />
        ))}
      </div>
      <div className="btncontainer">
        <Button onClick={spinReels} text="Spin the reels" />
      </div>
    </div>
  );
};

export default Reels;
