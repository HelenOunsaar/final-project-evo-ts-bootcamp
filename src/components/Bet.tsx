import React from 'react';

interface BetProps {
  bet: number;
}

const Bet: React.FC<BetProps> = ({ bet }) => {
  return (
    <div>
      <label htmlFor="bet">Bet:</label>
      <input id="bet" value={bet} readOnly />
    </div>
  );
};

export default Bet;
