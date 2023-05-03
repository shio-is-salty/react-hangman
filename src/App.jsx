import { useState, useEffect } from "react"
import './App.css'
import { GuessWord } from "./components/GuessWord.jsx"
import { Keyboard } from "./components/Keyboard"
function App() {
  const [guessLetter, setGuessLetter] = useState("")
  const [mistakes, setMistakes] = useState(0)

  useEffect(() => {
    if(mistakes === 5){
      alert('You Lose!')
    }

  }, [mistakes])

  return (
    <>
      <div className="header">
        <h1 className="title">HANGMAN</h1>
        <div className="mistakes">Mistakes: {mistakes}/5</div>
      </div>
      <GuessWord guessLetter={guessLetter} setMistakes={setMistakes}/>
      <Keyboard setGuessLetter={setGuessLetter}/>
    </>
  )
}

export default App
