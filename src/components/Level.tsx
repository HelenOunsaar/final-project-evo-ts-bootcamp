import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Bet from './Bet';

interface LevelProps {
  level: number;
}

const Level: React.FC<LevelProps> = ({ level }) => {
  const dispatch = useDispatch();
  const [bet, setBet] = useState<number>(10);
  const [selectedLevel, setSelectedLevel] = useState<number>(level);

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = parseInt(event.target.value);
    setSelectedLevel(newLevel);
    setBet(10 * newLevel);
    dispatch({ type: 'CHANGE_BET', payload: 10 * newLevel });
  };

  return (
    <div className='bet-level-container'>
      <Bet />
      <br />
      <div className='levelstyle'>
        <label htmlFor="level">Level</label>
        <input type="range" id="level" min={1} max={10} value={selectedLevel} onChange={handleLevelChange} />
      </div>
    </div>
  );
};

export default Level;
