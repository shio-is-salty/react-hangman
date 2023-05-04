import { useState, useEffect } from "react"
import './App.css'
import { GuessWord } from "./components/GuessWord.jsx"
import { Keyboard } from "./components/Keyboard"
import { IsWinModal } from "./components/IsWinModal.jsx"

// Hangman Images
import hangman0 from "./assets/hangman/hangman-0.png"
import hangman1 from "./assets/hangman/hangman-1.png"
import hangman2 from "./assets/hangman/hangman-2.png"
import hangman3 from "./assets/hangman/hangman-3.png"
import hangman4 from "./assets/hangman/hangman-4.png"
import hangman5 from "./assets/hangman/hangman-5.png"
import hangman6 from "./assets/hangman/hangman-6.png"


function App() {
  const [guessLetter, setGuessLetter] = useState("")
  const [mistakes, setMistakes] = useState(0)
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  function playAgain(){
    setWin(false)
    setLose(false)
    setMistakes(0)
    setGuessLetter("")
    location.reload()
  }





  return (
    <div className="App">

      { mistakes===6 && <IsWinModal isWin={false} playAgain={playAgain} />}
      { win && <IsWinModal isWin={true} playAgain={playAgain}/>}
      <div className="header">
        <h1 className="title">HANGMAN</h1>
        <div className="mistakes">Mistakes: {mistakes}/6</div>
      </div>
      <div className="main">
        <GuessWord
        guessLetter={guessLetter}
        setMistakes={setMistakes}
        setWin={setWin}/>

        <div className="mari">
          {mistakes === 0 && <img src={hangman0} alt="" />}
          {mistakes === 1 && <img src={hangman1} alt="" />}
          {mistakes === 2 && <img src={hangman2} alt="" />}
          {mistakes === 3 && <img src={hangman3} alt="" />}
          {mistakes === 4 && <img src={hangman4} alt="" />}
          {mistakes === 5 && <img src={hangman5} alt="" />}
          {mistakes === 6 && <img src={hangman6} alt="" />}
        </div>
      </div>
      <Keyboard setGuessLetter={setGuessLetter}/>
    </div>
  )
}

export default App
