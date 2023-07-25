"use client";
import { useState, useEffect } from "react";
import Article from "./components/Article";
import Section from "./components/Section";

export default function Home() {
  const [iconXChosen, setIconXChosen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [turnOfX, setTurnOfX] = useState(true);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [gameOutcome, setGameOutcome] = useState("");
  const [gameActiveStatus, setGameActiveStatus] = useState([false, ""]);
  const [isSettings, setIsSettings] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isVsCpu, setIsVsCpu] = useState(true);
  const [scores, setScores] = useState({
    playerWin: 0,
    draw: 0,
    computerWin: 0,
    player1Win: 0,
    player2Win: 0,
  });

  /*
  console.log(gameActiveStatus);
  */ 

  function handleChoice() {
    setIconXChosen((prevIconXChosen) => !prevIconXChosen);
  }

  function toggleXTurn() {
    setTurnOfX((prevTurnOfX) => !prevTurnOfX);
  }

  function startGame(gameType) {
    setGameBoard(Array(9).fill(null));
    setTurnOfX(true);
    setGameOutcome("");
    setGameActiveStatus((prevGameActiveStatus) => [
      !prevGameActiveStatus[0],
      gameType,
    ]);
    setIsOpen(false);
    setScores();
    setIsSettings(true);
  }

  function startRound(){
    setGameBoard(Array(9).fill(null));
    setTurnOfX(true);
    setGameOutcome("");
    setIsOpen(false);
    setIsActive(true)
  }

  function toggleModal() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  function checkWin() {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    const isWin = winCombos.some((combo) => {
      const [a, b, c] = combo;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[b] === gameBoard[c]
      ) {
        setGameOutcome("Win");
        return true;
      }
      return false;
    });

    return isWin;
  }

  function checkDraw() {
    const isDraw = gameBoard.every((cell) => cell !== null);
    if (isDraw) {
      setGameOutcome("Draw");
    }
    return isDraw;
  }

  /* If the value of gameBoard[index] is falsy (e.g., null, undefined, ! makes conditional it opposite of true) AND the game is currently active (gameActiveStatus[0] is true) (recall startGame() earlier sets gameActiveStatus to true), then the condition evaluates to true. */
  function handleCellClick(index) {
    if (!gameBoard[index] && gameActiveStatus[0]) {
      const newGameBoard = [...gameBoard];
      newGameBoard[index] = turnOfX ? "X" : "O";
      setGameBoard(newGameBoard);
      toggleXTurn();
    }
  }

  useEffect(() => {
    if (checkWin()) {
      if (gameActiveStatus[1] === "cpu") {
        if (turnOfX) {
          setScores((prevScores) => ({
            ...prevScores,
            playerWin: prevScores.playerWin + 1,
          }));
        } else {
          setScores((prevScores) => ({
            ...prevScores,
            computerWin: prevScores.computerWin + 1,
          }));
        }
      } else if (gameActiveStatus[1] === "play") {
        if (!turnOfX) {
          setScores((prevScores) => ({
            ...prevScores,
            player1Win: prevScores.player1Win + 1,
          }));
        } else {
          setScores((prevScores) => ({
            ...prevScores,
            player2Win: prevScores.player2Win + 1,
          }));
        }
      }
      toggleModal();
    } else if (checkDraw()) {
      // Update draw scores for both game types
      setScores((prevScores) => ({
        ...prevScores,
        draw: prevScores.draw + 1,
      }));
      toggleModal();
    }
  }, [gameBoard]);

  return gameActiveStatus[0] ? (
    <Section
      gameActiveStatus={gameActiveStatus}
      startGame={startGame}
      isOpen={isOpen}
      turnOfX={turnOfX}
      toggleXTurn={toggleXTurn}
      gameBoard={gameBoard}
      handleCellClick={handleCellClick}
      gameOutcome={gameOutcome}
      scores={scores}
    />
  ) : (
    <Article
      iconXChosen={iconXChosen}
      handleChoice={handleChoice}
      startGame={startGame}
    />
  );
}

/* 
<Article 
*/
