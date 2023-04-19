import React, { useState } from 'react';
import Bet from './Bet';

interface LevelProps {
  level: number;
}

const Level: React.FC<LevelProps> = ({ level }) => {
  const [bet, setBet] = useState<number>(10);
  const [selectedLevel, setSelectedLevel] = useState<number>(level);

  const handleBetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = parseInt(event.target.value);
    setSelectedLevel(newLevel);
    setBet(10 * newLevel);
  };

  return (
    <div>
      <Bet bet={bet} />
      <br />
      <label htmlFor="level">Level:</label>
      <input type="range" id="level" min={1} max={10} value={selectedLevel} onChange={handleBetChange} />
    </div>
  );
};

export default Level;
