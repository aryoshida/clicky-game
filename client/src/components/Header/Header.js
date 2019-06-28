import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    <br></br>
        <div className="instructions">
            Instructions: Click each fruit only once. If you click the same fruit twice you lose and the game starts over. Click all 12 fruits to win!
        </div>
    </div>
);

export default Header;