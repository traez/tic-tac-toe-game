/* import necessary dependencies and custom components  */
"use client";
import { useState, useEffect } from "react";
import Article from "./components/Article";
import Modal from "./components/Modal";
import PlayerComputer from "./components/PlayerComputer";
import PlayerPlayer from "./components/PlayerPlayer";

/* set up the initial state and state management   */
export default function Home() {
  const [iconXChosen, setIconXChosen] = useState(true);
  const [playerSymbol, setPlayerSymbol] = useState("X");
  const [computerSymbol, setComputerSymbol] = useState("O");
  const [currentTurn, setCurrentTurn] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [gameOutcome, setGameOutcome] = useState("");
  const [winningSymbol, setWinningSymbol] = useState("");
  const [winningTurn, setWinningTurn] = useState("");
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameType, setGameType] = useState("");
  const [scores, setScores] = useState({
    playerWin: 0,
    draw: 0,
    computerWin: 0,
    player1Win: 0,
    player2Win: 0,
  });

  /* provide a user-friendly way for the player to choose their desired icon and update the state accordingly  */
  function handleChoice() {
    setIconXChosen((prevIconXChosen) => !prevIconXChosen);
  }

  /* maintain consistency between the player's chosen symbol, the computer's symbol, and the game state when the player switches between "X" and "O" icons.  */
  useEffect(() => {
    const newPlayerSymbol = iconXChosen ? "X" : "O";
    setPlayerSymbol(newPlayerSymbol);
    setComputerSymbol(newPlayerSymbol === "X" ? "O" : "X");
  }, [iconXChosen]);

  /* maintain the state of the current turn in the Tic-Tac-Toe game.  */
  useEffect(() => {
    setCurrentTurn(playerSymbol === "X" ? "Player" : "Computer");
  }, [playerSymbol]);

  /* ensure that the computer makes its move whenever it is the computer's turn during an active game and there is no determined game outcome yet  */
  useEffect(() => {
    if (isGameActive && currentTurn === "Computer" && !gameOutcome) {
      handleComputerMove();
    }
  }, [isGameActive, currentTurn, gameOutcome]);

  /* implement the logic for the computer's move in the Tic-Tac-Toe game  */
  function handleComputerMove() {
    setTimeout(() => {
      const availableCells = gameBoard.reduce((acc, cell, index) => {
        if (!cell) acc.push(index);
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * availableCells.length);
      const chosenCellIndex = availableCells[randomIndex];

      const newGameBoard = [...gameBoard];
      newGameBoard[chosenCellIndex] = playerSymbol === "X" ? "O" : "X";
      setGameBoard(newGameBoard);
      if (!checkWinOrDraw(newGameBoard)) {
        setCurrentTurn("Player");
      }
    }, 2000);
  }

  /*  implement the logic for the player's move in the Tic-Tac-Toe game.  */
  function handlePlayerMove(index) {
    if (!gameBoard[index] && isGameActive && currentTurn === "Player") {
      const newGameBoard = [...gameBoard];
      newGameBoard[index] = playerSymbol;
      setGameBoard(newGameBoard);
      if (!checkWinOrDraw(newGameBoard)) {
        setCurrentTurn("Computer");
      }
    }
  }

  /* ignore function. idea for a Player vs Player version of game scrapped before production  */
  function startPlayerPlayerGame() {
    console.log("Trae");
  }

  /* reset the game state and initiate a new game in "Player vs. Computer" mode.  */
  function startPlayerComputerGame() {
    setGameBoard(Array(9).fill(null));
    setGameOutcome("");
    setIsOpen(false);
    setIsGameActive(true);
    setGameType("cpu");
    setScores({
      playerWin: 0,
      draw: 0,
      computerWin: 0,
      player1Win: 0,
      player2Win: 0,
    });
  }

  /* reset the game state and prepare the application for a new game session in the "Player vs. Computer" mode.  */
  function reStartPlayerComputerGame() {
    setGameBoard(Array(9).fill(null));
    setGameOutcome("");
    setIsOpen(false);
    setIsGameActive(false);
    setGameType("");
    setIconXChosen(true);
    setPlayerSymbol("X");
    setCurrentTurn(playerSymbol === "X" ? "Player" : "Computer");
    setScores({
      playerWin: 0,
      draw: 0,
      computerWin: 0,
      player1Win: 0,
      player2Win: 0,
    });
  }

  /* reset the state and prepare the application for a new round within the "Player vs. Computer" mode.  */
  function startPlayerComputerRound() {
    setGameBoard(Array(9).fill(null));
    setGameOutcome("");
    setIsOpen(false);
    setCurrentTurn(playerSymbol === "X" ? "Player" : "Computer");
  }

  /* provide a centralized function to start different game modes based on the gameType provided as an argument. Player vs Player game mode idea later scrapped  */
  function startGame(gameType) {
    if (gameType === "cpu") {
      startPlayerComputerGame();
    } else if (gameType === "play") {
      startPlayerPlayerGame();
    }
  }

  /* provide a mechanism for showing or hiding the modal in response to specific events in the game  */
  function toggleModal() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  /* provide the game logic to check if a game has resulted in a win or draw  */
  function checkWinOrDraw(board) {
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
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinningSymbol(board[a]);
        setWinningTurn(currentTurn);
        setGameOutcome("Win");
        if (currentTurn === "Player") {
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
        toggleModal();
        return true;
      }
      return false;
    });

    const isDraw = board.every((cell) => cell !== null);
    if (isDraw && !isWin) {
      setGameOutcome("Draw");
      setScores((prevScores) => ({
        ...prevScores,
        draw: prevScores.draw + 1,
      }));
      toggleModal();
      return true;
    }

    return false;
  }

/* provide a dynamic rendering of the game components and modal based on the game state and game mode. */
  return (
    <>
      {isGameActive ? (
        <>
          {gameType === "cpu" ? (
            <PlayerComputer
              gameBoard={gameBoard}
              playerSymbol={playerSymbol}
              computerSymbol={computerSymbol}
              currentTurn={currentTurn}
              handlePlayerMove={handlePlayerMove}
              scores={scores}
              reStartPlayerComputerGame={reStartPlayerComputerGame}
            />
          ) : gameType === "play" ? (
            <PlayerPlayer gameBoard={gameBoard} />
          ) : null}
          <Modal
            isOpen={isOpen}
            gameOutcome={gameOutcome}
            winningSymbol={winningSymbol}
            winningTurn={winningTurn}
            startPlayerComputerRound={startPlayerComputerRound}
            reStartPlayerComputerGame={reStartPlayerComputerGame}
          />
        </>
      ) : (
        <Article
          iconXChosen={iconXChosen}
          handleChoice={handleChoice}
          startGame={startGame}
        />
      )}
    </>
  );
}
