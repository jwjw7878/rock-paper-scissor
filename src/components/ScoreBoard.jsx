import React from "react";
import { RiResetLeftLine } from "react-icons/ri";

export const ScoreBoard = ({ score, resetBtn }) => {
  return (
    <>
      <div className="score-board">
        <div className="score-area">
          <div>
            <p className="score">{score.userScore}</p>
            <p>user</p>
          </div>
          <p>:</p>
          <div>
            <p className="score">{score.comScore}</p>
            <p>com</p>
          </div>
        </div>
        <button
          onClick={() => {
            resetBtn();
          }}
          className="score-reset"
        >
          <p>Reset</p>
          <RiResetLeftLine />
        </button>
      </div>
    </>
  );
};
