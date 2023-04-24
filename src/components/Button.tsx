import React from "react";
import spinIcon from "../assets/spin.png"

type ButtonProps = {
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button className="spinBtn" onClick={onClick}>
            <img src={spinIcon} alt="spinIcon" />
        </button>
    )
};

export default Button;