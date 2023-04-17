import React from "react";

type SymbolProps = {
  symbol: string;
};

const Symbol: React.FC<SymbolProps> = ({ symbol }) => {
  return (
    <div>
      <img src={symbol} alt="symbol" />
    </div>
  );
};

export default Symbol;
