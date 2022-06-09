import React, { useState, useEffect } from "react";
import "./Play.css";
import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import triangle from "./../../assets/images/bg-triangle.svg";

const Play = () => {
  const [start, setStart] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerWin, setPlayerWin] = useState(false);
  const [houseWin, setHouseWin] = useState(false);
  const [gameDraw, setGameDraw] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleClicked = (value) => {
    setPlayerChoice(value);
    console.log(playerChoice, "player choice");
    setStart(true);
    setHouseChoice(null);
    houseGeneratedChoice();
  };

  const houseGeneratedChoice = () => {
    const randomHouseChoice =
      choices[Math.floor(Math.random() * choices.length)];
    console.log(randomHouseChoice, "house choice");
    setHouseChoice(randomHouseChoice);
  };

  const playAgain = () => {
    setStart(false);
  };
  const outcome = () => {
    if (playerChoice === "rock" && houseChoice === "scissors") {
      setPlayerWin(true);
      setHouseWin(false);
      setGameDraw(false);
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "paper" && houseChoice === "rock") {
      setPlayerWin(true);
      setHouseWin(false);
      setGameDraw(false);
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "scissors" && houseChoice === "paper") {
      setPlayerWin(true);
      setHouseWin(false);
      setGameDraw(false);
      setPlayerScore(playerScore + 1);
    } else if (houseChoice === "paper" && houseChoice === "scissors") {
      setPlayerWin(false);
      setHouseWin(true);
      setGameDraw(false);
      setPlayerScore(playerScore - 1);
    } else if (playerChoice === "scissors" && houseChoice === "rock") {
      setPlayerWin(false);
      setHouseWin(true);
      setGameDraw(false);
      setPlayerScore(playerScore - 1);
    } else if (playerChoice === "rock" && houseChoice === "paper") {
      setPlayerWin(false);
      setHouseWin(true);
      setGameDraw(false);
      setPlayerScore(playerScore - 1);
    } else if (playerChoice === "rock" && houseChoice === "rock") {
      setGameDraw(true);
      setPlayerWin(false);
      setHouseWin(false);
      setPlayerScore(playerScore + 0);
    } else if (playerChoice === "paper" && houseChoice === "paper") {
      setGameDraw(true);
      setPlayerWin(false);
      setHouseWin(false);
      setPlayerScore(playerScore + 0);
    } else if (playerChoice === "scissors" && houseChoice === "scissors") {
      setGameDraw(true);
      setPlayerWin(false);
      setHouseWin(false);
      setPlayerScore(playerScore + 0);
    }
  };
  useEffect(() => {
    outcome();
  }, [houseChoice, playerChoice]);
  return (
    <div>
      <div className="my-8 flex justify-between md:w-1/2 sm:72 md:mx-auto mx-10 border rounded-lg border-slate-500 border-2">
        <div className=" text-xl p-3 md:p-6 md:text-3xl">
          <h6 className="">
            ROCK <br />
            PAPER <br />
            SCISSORS
          </h6>
        </div>
        <div className="p-3 md:p-6">
          <div className="flex flex-col items-center bg-white px-8 py-2 md:px-10 md:py-4 rounded-md">
            <p className="text-blue-800 tracking-widest text-sm">SCORE</p>
            <h6 className="text-gray-500 text-5xl">{playerScore}</h6>
          </div>
        </div>
      </div>

      {!start ? (
        <div className="">
          <div className="choice-section w-3/4 mx-auto text-center">
            <img className="triangle" src={triangle} alt="" />
            <div className="flex justify-center">
              <div className="paper-choice icon mx-auto">
                <img
                  onClick={() => handleClicked("paper")}
                  src={paper}
                  className="m-auto mt-5"
                  alt=""
                />
              </div>
              <div className="scissors-choice icon mx-auto">
                <img
                  onClick={() => handleClicked("scissors")}
                  src={scissors}
                  className="m-auto mt-5"
                  alt=""
                />
              </div>
            </div>
            <div className="rock-choice icon mx-auto">
              <img
                onClick={() => handleClicked("rock")}
                src={rock}
                className="m-auto mt-7"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          <div className="flex justify-around items-center md:mx-32">
            <div className="items-center justify-center text-center sm:mx-5 md:mx-auto">
              <p className="tracking-widest my-10 hidden sm:block">
                YOU PICKED
              </p>
              {playerChoice === "rock" ? (
                <div className={`rock-choice ${playerWin ? "winner" : ""}`}>
                  <img src={rock} className="m-auto mt-5" alt="" />
                </div>
              ) : null}
              {playerChoice === "paper" ? (
                <div className={`paper-choice ${playerWin ? "winner" : ""}`}>
                  <img src={paper} className="m-auto mt-5" alt="" />
                </div>
              ) : null}
              {playerChoice === "scissors" ? (
                <div className={`scissors-choice ${playerWin ? "winner" : ""}`}>
                  <img src={scissors} className="m-auto mt-5" alt="" />
                </div>
              ) : null}
              <p className="tracking-widest my-10 lg:hidden md:hidden text-xs">
                YOU PICKED
              </p>
            </div>
            <div>
              <div className="items-center hidden sm:block">
                {playerWin ? (
                  <div className="text-center mt-16">
                    <h2 className="text-4xl">YOU WIN</h2>
                    <button
                      className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-3 font-bold tracking-widest"
                      onClick={() => playAgain()}
                    >
                      PLAY AGAIN
                    </button>
                  </div>
                ) : null}
                {houseWin ? (
                  <div className=" text-center">
                    <h2 className="text-4xl">YOU LOST</h2>
                    <button
                      className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-3 font-bold tracking-widest hover:text-red-600"
                      onClick={() => playAgain()}
                    >
                      PLAY AGAIN
                    </button>
                  </div>
                ) : null}
                {gameDraw ? (
                  <div className=" text-center">
                    <h2 className="text-4xl">YOU DREW</h2>
                    <button
                      className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-3 font-bold tracking-widest"
                      onClick={() => playAgain()}
                    >
                      PLAY AGAIN
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="text-center md:mx-32">
              <div className="items-center justify-center text-center sm:mr-5">
                <p className="tracking-widest my-10 hidden sm:block">
                  THE HOUSE PICKED
                </p>
                {houseChoice === "rock" ? (
                  <div className={`rock-choice ${houseWin ? "winner" : ""}`}>
                    <img src={rock} className="m-auto mt-5" alt="" />
                  </div>
                ) : null}
                {houseChoice === "paper" ? (
                  <div className={`paper-choice ${houseWin ? "winner" : ""}`}>
                    <img src={paper} className="m-auto mt-5" alt="" />
                  </div>
                ) : null}
                {houseChoice === "scissors" ? (
                  <div
                    className={`scissors-choice ${houseWin ? "winner" : ""}`}
                  >
                    <img src={scissors} className="m-auto mt-5" alt="" />
                  </div>
                ) : null}
                <p className="tracking-widest my-10 md:hidden lg:hidden text-xs">
                  THE HOUSE PICKED
                </p>
              </div>
            </div>
          </div>
          <div className="items-center lg:hidden md:hidden">
            {playerWin ? (
              <div className="text-center mb-16">
                <h2 className="text-5xl">YOU WIN</h2>
                <button
                  className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-5 font-bold tracking-widest w-52 h-10"
                  onClick={() => playAgain()}
                >
                  PLAY AGAIN
                </button>
              </div>
            ) : null}
            {houseWin ? (
              <div className=" text-center">
                <h2 className="text-5xl">YOU LOST</h2>
                <button
                  className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-5 font-bold tracking-widest hover:text-red-600 w-52 h-10"
                  onClick={() => playAgain()}
                >
                  PLAY AGAIN
                </button>
              </div>
            ) : null}
            {gameDraw ? (
              <div className=" text-center">
                <h2 className="text-5xl">YOU DREW</h2>
                <button
                  className="bg-white text-xs text-blue-800 px-8 py-2 rounded mt-5 font-bold tracking-widest w-52 h-10"
                  onClick={() => playAgain()}
                >
                  PLAY AGAIN
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
