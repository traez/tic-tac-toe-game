export default function PlayerPlayer({ gameBoard }) {
  return (
    <>
      <section id="sec">
        <div id="sec-turn">
          <div id="sec-logodiv">
            <img src="./images/logo.svg" alt="" id="sec-logo" />
          </div>
          <div id="sec-divb">
            <div className="sec-imgb-o" id="sec-imgb"></div>
            <b>TURN</b>
          </div>
          <div id="sec-resdiv">
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
              ></div>
            );
          })}
        </div>
        <div id="sec-scores">
          <div id="sec-cpu" className="sec-score3">
            <div>
              <span id="span-player1">X</span> (PLAYER 1)
            </div>
            <div>0</div>
          </div>
          <div id="sec-ties" className="sec-score3">
            <div>TIES</div>
            <div>0</div>
          </div>
          <div id="sec-play" className="sec-score3">
            <div>
              <span id="span-player2">O</span> (PLAYER 2)
            </div>
            <div>0</div>
          </div>
        </div>
      </section>
    </>
  );
}

/* 
Barbie
*/
