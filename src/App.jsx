import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";

import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";
import { ScoreBoard } from "./components/ScoreBoard";

function App() {
  const choice = {
    rock: {
      name: "rock",
      icon: [
        <FaHandRock className="choice" />,
        <FaHandRock className="choice small" />,
      ],
    },
    paper: {
      name: "paper",
      icon: [
        <FaHandPaper className="choice" />,
        <FaHandPaper className="choice small" />,
      ],
    },
    scissor: {
      name: "scissor",
      icon: [
        <FaHandScissors className="choice" />,
        <FaHandScissors className="choice small" />,
      ],
    },
  };
  // user state
  const [user, setUser] = useState(null);
  // com state
  const [com, setCom] = useState(null);
  // resultData State
  const [resultData, setResultData] = useState({
    user: "",
    com: "",
    userScore: 0,
    comScore: 0,
  });
  // 기위바위보 게임 버튼
  const buttonHandler = (play) => {
    const comArr = selectRandom();
    setUser(choice[play]);
    setCom(choice[comArr]);
    gameResult(choice[play], choice[comArr]);
  };
  // com 랜덤 결과 도출
  const selectRandom = () => {
    const choiceArr = Object.keys(choice);
    const random = Math.floor(Math.random() * choiceArr.length);
    return choiceArr[random];
  };

  // 게임 결과 도출
  const gameResult = (userRes, comRes) => {
    if (userRes.name === comRes.name) {
      return setResultData((prev) => ({ ...prev, user: "tie", com: "tie" }));
    } else if (userRes.name === "rock") {
      return comRes.name === "scissor"
        ? setResultData((prev) => ({
            ...prev,
            user: "win",
            com: "lose",
            userScore: prev.userScore + 1,
          }))
        : setResultData((prev) => ({
            ...prev,
            user: "lose",
            com: "win",
            comScore: prev.comScore + 1,
          }));
    } else if (userRes.name == "paper") {
      return comRes.name === "rock"
        ? setResultData((prev) => ({
            ...prev,
            user: "win",
            com: "lose",
            userScore: prev.userScore + 1,
          }))
        : setResultData((prev) => ({
            ...prev,
            user: "lose",
            com: "win",
            comScore: prev.comScore + 1,
          }));
    } else if (userRes.name === "scissor") {
      return comRes.name === "paper"
        ? setResultData((prev) => ({
            ...prev,
            user: "win",
            com: "lose",
            userScore: prev.userScore + 1,
          }))
        : setResultData((prev) => ({
            ...prev,
            user: "lose",
            com: "win",
            comScore: prev.comScore + 1,
          }));
    }
  };
  // reset버튼으로 스코어 및 결과 초기화
  const resetBtn = () => {
    setResultData({ user: "", com: "", userScore: 0, comScore: 0 });
    setUser(null);
    setCom(null);
  };

  return (
    <div>
      <div className="main">
        {/* 스코어보드 컴포넌트 */}
        <ScoreBoard score={resultData} resetBtn={resetBtn} />
        <div className="box-area">
          <Box player="user" card={user} status={resultData.user} />
          <Box player="computer" card={com} status={resultData.com} />
        </div>
        <div className="button-area">
          <button
            onClick={() => {
              buttonHandler("scissor");
            }}
          >
            <FaHandScissors className="user-btn" />
          </button>
          <button
            onClick={() => {
              buttonHandler("rock");
            }}
          >
            <FaHandRock className="user-btn" />
          </button>
          <button
            onClick={() => {
              buttonHandler("paper");
            }}
          >
            <FaHandPaper className="user-btn" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
