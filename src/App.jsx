import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";

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
  const [user, setUser] = useState(null);
  const buttonHandler = (play) => {
    setUser(choice[play]);
  };

  return (
    <div>
      <div className="main">
        <Box player="user" card={user} />
        {/* <Box player="computer" card={com} /> */}
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
  );
}

export default App;
