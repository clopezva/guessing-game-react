import { useState } from 'react'
import './App.css'



function App() {

  function getARandomNumber(){
    return Math.floor((Math.random() * 101))
  }


  const [randomNumber, setRandomNumber] = useState(getARandomNumber())
  console.log(randomNumber)
  const [userGuess, setUserGuess] = useState("")
  const [previousGuesses, setPreviousGuesses] = useState([])
  const [attempts, setAttempts] = useState(10)
  const [message, setMessage] = useState('')

  function handleClick(){
    setAttempts(attempts - 1)
    checkNumber(userGuess)
    setPreviousGuesses([...previousGuesses, userGuess])
    setUserGuess('')
  }

  function checkNumber(){
    if (userGuess >= randomNumber){
      setMessage('To high! Try again 🥵')
    } if (userGuess < randomNumber){
      setMessage('To low! Try again 🥶')
    }
    //(userGuess >= randomNumber) ? setMessage('To high! Try again') : setMessage('Too low! Try Again')
  }

  if (attempts === 0){
    endGame()
  }

  function endGame(){
    return 
    
  }

  return (
    <>
      <h1>Number guessing game</h1>
      <p>{randomNumber}</p>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have {attempts} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">Guess a number</label>
        <input type="number" min={0} max={100} id="guessField" className="guessField" value={userGuess} onChange={e => setUserGuess(e.target.value)}/>
        <button className="guessSubmit" onClick={handleClick}>Submit a Guess</button>

        <div className="resultParas">
          <p>Previous Guesses: <span className="guesses">{previousGuesses.join(' / ')}</span></p>
          <p>Guesses Remaining: <span className="lastResult">{attempts}</span></p>
          <p className="lowOrHi">{message}</p>
        </div>
      </div>
    </>
  )
}

export default App;
