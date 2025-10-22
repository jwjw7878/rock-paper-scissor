import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import "../App.css";

export const Box = ({ player, card, status }) => {
  return (
    <div className="box">
      <div
        className={`${
          status === "win"
            ? "card win"
            : status === "lose"
            ? "card lose"
            : "card"
        }`}
      >
        <p className="left-top">
          {card && card.name.slice(0, 1).toUpperCase()}
          {card && card.icon[1]}
        </p>
        <div className="middle">
          <p className="status">{status}</p>
          {card ? card.icon[0] : <FaRegQuestionCircle className="ready" />}
          <p className="text">{card ? card.name : "Ready"}</p>
        </div>
        <p className="bottom-right">
          {card && card.name.slice(0, 1).toUpperCase()}
          {card && card.icon[1]}
        </p>
      </div>
      <h2 className="player">{player}</h2>
    </div>
  );
};
