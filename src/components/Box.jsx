import React from "react";
import "../App.css";

export const Box = ({ player, card }) => {
  return (
    <div className="box">
      <h2 className="player">{player}</h2>
      <div className="card">
        <p className="left-top">
          {card && card.name.slice(0, 1).toUpperCase()}
          {card && card.icon[1]}
        </p>
        <div className="middle">
          {card && card.icon[0]}
          <p className="text">{card && card.name}</p>
        </div>
        <p className="bottom-right">
          {card && card.name.slice(0, 1).toUpperCase()}
          {card && card.icon[1]}
        </p>
      </div>
    </div>
  );
};
