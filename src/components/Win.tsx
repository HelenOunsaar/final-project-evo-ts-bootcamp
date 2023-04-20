import React from "react";
import { connect } from "react-redux";

type Props = {
  wonSum: number;
};

const Win: React.FC<Props> = ({ wonSum }) => {
  return (
    <div className="win-container">
      {wonSum > 0 ? (
        <p>You won {wonSum} coins!</p>
      ) : (
        <p>Better luck next time!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    wonSum: state.bet === 10 ? 0 : state.bet,
  };
};

export default connect(mapStateToProps)(Win);
