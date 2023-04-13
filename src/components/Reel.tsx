import React from "react";

type ReelProps = {
  symbol: string;
};

const Reel: React.FC<ReelProps> = ({ symbol }) => {
  return (
    <div className="reel">
      <img src={symbol} alt="reel" />
    </div>
  );
};

export default Reel;
