import React from 'react';
import { useSelector } from 'react-redux';

const Bet: React.FC = () => {
  const bet = useSelector((state: any) => state.bet);

  return (
    <div>
      <label htmlFor="bet">Bet:</label>
      <input id="bet" value={bet} readOnly />
    </div>
  );
};

export default Bet;
