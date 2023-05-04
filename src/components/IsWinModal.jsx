import winSound from "../assets/sounds/win.mp3"
import loseSound from "../assets/sounds/lose.mp3"
export const IsWinModal = ({isWin, playAgain}) => {

  function playSound(){
    let soundURL = ""
    isWin ? soundURL = winSound : soundURL = loseSound
    let audio = new Audio(soundURL)
    audio.play()
  }

  playSound()
  return (

    <div className="modal">
      <h1>{isWin ? "You Win!": "You Lose!"}</h1>
      <button onClick={playAgain}>Play Again?</button>
    </div>
  )
}
