import { useState, useEffect } from "react"


export const GuessWord = ({guessLetter, setMistakes}) => {
  const [correctGuess, setCorrectGuess] = useState([])
  const [word, setWord] = useState(["H", "A", "K", "D", "O", "G"])
  const [win, setWin] = useState(false)



  useEffect(() => {
    if(guessLetter){
    for (let i in word){
      if(guessLetter === word[i]){
        setCorrectGuess(prev => insert(prev, i, word[i]))
        return
      }
      
    }
    setMistakes(prev => prev+1)

    }

  }, [guessLetter])

  useEffect(() => {
    if(word.length === correctGuess.length){
      setWin(true)
    }

  }, [correctGuess])

  useEffect(() => {
    win ? alert('You Win!'): ""

  }, [win])



  const insert = (arr, index, newItem) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]

  function isSame(word){
    for (let i in correctGuess){
      if(word === correctGuess[i]){
        return "same"
      }
    }
  }


  return (
    <div className="word-container">
      {word.map((w,i) => (
        <div className="letter">
          {isSame(w) ? <h1>{w}</h1>: ""}
        </div>
      ))}

    </div>
  )
}
