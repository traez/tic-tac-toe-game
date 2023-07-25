/* provide an interactive and user-friendly game setup screen where the player can choose their symbol and start a new game against the computer   */
export default function Article({ iconXChosen, handleChoice, startGame }) {
  return (
    <article>
      <header>
        <div id="head-div">
          <img src="./images/logo.svg" alt="" id="head-icon" />
        </div>
      </header>
      <menu>
        <h1>PICK PLAYER'S MARK</h1>
        <div id="menu-icon-div">
          <div
            id="icon-x"
            className={`menu-icon-x-${iconXChosen ? "dark" : "lite"} menu-div`}
            onClick={handleChoice}
          ></div>
          <div
            id="icon-o"
            className={`menu-icon-o-${iconXChosen ? "lite" : "dark"} menu-div`}
            onClick={handleChoice}
          ></div>
        </div>
        <h2>REMEMBER: X GOES FIRST</h2>
      </menu>
      <nav>
        <div className="nav-div" id="nav-cpu" onClick={() => startGame("cpu")}>
          NEW GAME
        </div>
      </nav>
    </article>
  );
}
