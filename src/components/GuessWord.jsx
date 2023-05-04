import { useState, useEffect } from "react"

export const GuessWord = ({guessLetter, setMistakes, setWin}) => {
  const [correctGuess, setCorrectGuess] = useState([])
  const [word, setWord] = useState([])

  const wordArr = [
   'char',
   'converts',
   'creating',
   'each',
   'file',
   'function',
   'implemennt',
   'into',
   'line',
   'path',
   'reader',
   'simple',
   'takes',
   'text',
   'that',
   'trying',
   'working'
  ]

  useEffect(() => {
    setGuessWord()

  },[])

  useEffect(() => {
    if(word.length <= 0){
      return
    }
    if(word.length === correctGuess.length){
      setWin(true)
    }

  }, [correctGuess])


  function setGuessWord(){
    const random = Math.floor(Math.random() * wordArr.length)
    const randomWord = wordArr[random].toUpperCase()
    const randomWordArr = []
    for (let i=0; i<randomWord.length; i++){
      randomWordArr.push(randomWord[i])
    }
    setWord(randomWordArr)
  }

  console.log(word)

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


  if(word.length === 0){
    return "Hakdog"
  }

  return (
    <div className="word-container">
      {word.map((w,i) => (
        <div key={i} className="letter">
          {isSame(w) ? <h1>{w}</h1>: ""}
        </div>
      ))}

    </div>
  )
}
