import React from "react";

type SymbolProps = {
  symbol: string;
  isWinningSymbol: boolean;
};

// an image tag with the src attribute set to the symbol prop value, and the className attribute set to "winner", if the isWinningSymbol prop is true.
const Symbol: React.FC<SymbolProps> = ({ symbol, isWinningSymbol }) => {
  console.log(`Symbol ${symbol} isWinningSymbol: ${isWinningSymbol}`);
  return (
    <div id={`symbol-${symbol}`}>
      <img
        src={symbol}
        alt="symbol"
        className={isWinningSymbol ? "winner" : ""}
      />
    </div>
  );
};

export default Symbol;
