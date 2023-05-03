import { Letter } from "./Letter"
export const Keyboard = ({setGuessLetter}) => {
  const upperKeyboard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const middleKeyboard = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const bottomKeyboard = ["Z", "X", "C", "V", "B", "N", "M"]
  return (
      <div className="keyboard-container">
        <div>
          {upperKeyboard.map(k => (
            <Letter key={k} letter={k} onChange={setGuessLetter} />
          ))}
        </div>

        <div>
          {middleKeyboard.map(k => (
            <Letter key={k} letter={k} onChange={setGuessLetter} />
          ))}
        </div>

        <div>
          {bottomKeyboard.map(k => (
            <Letter key={k} letter={k} onChange={setGuessLetter} />
          ))}
        </div>
      </div>
  )
}
