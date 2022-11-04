import { useState } from "react";
import Navbar from "./components/Navbar"
import PlayArea from "./components/PlayArea"
import { Game } from "./interfaces";
import { addNewGameToStorage } from "./utils"

function App() {

  const [isNewGameStarted, setIsNewGameStarted] = useState(false);

  const createNewGame = () => {
    setIsNewGameStarted(true);
  }

  const getWinnerName = () => {
    const winnerName = prompt("Enter the name of the winner");
    return winnerName ?? "Unknown";
  }

  const saveGame = () => {
    setIsNewGameStarted(false);

    const current_date = Date.now().toString();

    const finishedGame: Game = {
      id: current_date,
      name: "Game of" + current_date,
      number_of_players: 5,
      winner: getWinnerName()
    }

    addNewGameToStorage(finishedGame);
  }

  return (
    <div className="App">
      <Navbar onAdd={() => createNewGame()} />
      <div className="px-3 h-max flex justify-center container">
        {isNewGameStarted && <PlayArea onFinish={saveGame} />
        }
      </div>
    </div>
  )
}

export default App
