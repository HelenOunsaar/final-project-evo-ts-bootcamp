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
    const [reelImages, setReelImages] = useState<string[]>([]);
  
    const spinReels = () => {
      const randomIndices: number[] = [];
      while (randomIndices.length < 3) {
        const randomIndex = Math.floor(Math.random() * 6);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      const newReelImages = randomIndices.map(index => image[index]);
      setReelImages(newReelImages);
    };
  
    return (
      <div>
        <div className="reels">
          {reelImages.map((image, index) => (
            <img key={index} src={image} alt={`Reel ${index + 1}`} />
          ))}
        </div>
        <Button onClick={spinReels} text="Spin the reels" />
      </div>
    );
  };
  
  export default Reels;