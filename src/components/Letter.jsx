
import { useState } from "react"
export const Letter = ({letter, onChange}) => {
  const [isClicked, setIsClicked] = useState(false)

  function click(){
    if(isClicked){
      return
    }

    setIsClicked(true)
    onChange(letter)
    console.log(letter+" clicked")
  }
  return (
    <div className={`letter ${isClicked ? 'clicked': ''}`} onClick={click}>
      {letter}
    </div>
  )
}
