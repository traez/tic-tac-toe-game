/* provide an interactive and user-friendly interface for the "Player vs. Computer" game mode.   */
export default function PlayerComputer({
  gameBoard,
  playerSymbol,
  computerSymbol,
  currentTurn,
  handlePlayerMove,
  scores,
  reStartPlayerComputerGame,
}) {
  const cpuSymbol = playerSymbol === "X" ? "O" : "X";

  return (
    <>
      <section id="sec">
        <div id="sec-turn">
          <div id="sec-logodiv">
            <img src="./images/logo.svg" alt="" id="sec-logo" />
          </div>
          <div id="sec-divb">
            <div
              className={`sec-imgb-${
                currentTurn === "Player"
                  ? playerSymbol.toLowerCase()
                  : computerSymbol.toLowerCase()
              }`}
              id="sec-imgb"
            ></div>
            <b>TURN</b>
          </div>
          <div id="sec-resdiv" onClick={reStartPlayerComputerGame}>
            <img src="./images/icon-restart.svg" alt="" id="sec-res" />
          </div>
        </div>
        <div id="sec-boxes">
          {gameBoard.map((value, index) => {
            const boxClass =
              value === "X" ? "icon-x" : value === "O" ? "icon-o" : "";
            return (
              <div
                key={index}
                className={`sec-box ${boxClass}`}
                onClick={() => handlePlayerMove(index)}
              ></div>
            );
          })}
        </div>
        <div id="sec-scores">
          <div id="sec-cpu" className="sec-score3">
            <div>
              <span id="span-cpu">{cpuSymbol}</span> (CPU)
            </div>
            <div id="div-cpu">{scores.computerWin}</div>
          </div>
          <div id="sec-ties" className="sec-score3">
            <div>TIES</div>
            <div id="div-ties">{scores.draw}</div>
          </div>
          <div id="sec-play" className="sec-score3">
            <div>
              <span id="span-player">{playerSymbol}</span> (PLAYER)
            </div>
            <div id="div-player">{scores.playerWin}</div>
          </div>
        </div>
      </section>
    </>
  );
}


