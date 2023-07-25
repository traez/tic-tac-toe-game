/* provide a smooth and intuitive way to give feedback to the player at the end of each round in the "Player vs. Computer" game mode.    */
export default function Modal({
  isOpen,
  gameOutcome,
  winningSymbol,
  winningTurn,
  startPlayerComputerRound,
  reStartPlayerComputerGame,
}) {
  return (
    <>
      {isOpen && (
        <div className="backdrop">
          <div className="modal">
            {gameOutcome === "Draw" ? (
              <aside>
                <strong>ROUND TIED</strong>
              </aside>
            ) : (
              <aside>
                <strong>
                  <span>{winningSymbol}</span> takes the round;{" "}
                  <span>{winningTurn}</span> won
                </strong>
              </aside>
            )}
            <ul>
              <li id="li-quit" onClick={reStartPlayerComputerGame}>QUIT</li>
              <li id="li-next" onClick={startPlayerComputerRound}>NEXT ROUND</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
