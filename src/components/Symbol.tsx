import React from "react";

type SymbolProps = {
  symbol: string;
  winDetected: boolean;
};

const Symbol: React.FC<SymbolProps> = ({ symbol, winDetected }) => {
  return (
    <div id={`symbol-${symbol}`}>
      <img src={symbol} alt="symbol" className={winDetected ? 'winner' : ''} />
    </div>
  );
};

export default Symbol;
