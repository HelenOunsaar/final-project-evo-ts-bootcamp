import React from 'react';
import { useSelector } from 'react-redux';

const Bet: React.FC = () => {
  //get the current value of the bet and sumWon property from the Redux store.
  const bet = useSelector((state: any) => state.bet);
  const sumWon = useSelector((state: any) => state.sumWon);

  return (
    <div className='betcontainer'>
      <label htmlFor="bet">Bet</label>
      <input id="bet" value={bet} readOnly />
      <br />
      <label htmlFor="sumWon">Wins</label>
      <input id="sumWon" value={sumWon} readOnly />
    </div>
  );
};

export default Bet;
