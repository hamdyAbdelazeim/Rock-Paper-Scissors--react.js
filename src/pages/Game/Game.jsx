import React, { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti' // Import Confetti component
import './game.css'
import rock from '../../media/rock.png'
import paper from '../../media/paper.png'
import scissors from '../../media/scissors.png'
import celebrationSound from '../../media/get-up-pierrot-atm-notification-94647.mp3' // Add a celebration sound file

function Game() {
  const gameArr = [rock, paper, scissors]
  const [srcPlayer, setSrcPlayer] = useState(rock)
  const [srcComputer, setSrcComputer] = useState(rock)
  const [status, setStatus] = useState('')
  const [playerCounter, setPlayerCounter] = useState(0)
  const [computerCounter, setcComputerCounter] = useState(0)
  const [isShaking, setIsShaking] = useState(false)
  const [isCelebrating, setIsCelebrating] = useState(false) // State for celebration

  const audioRef = useRef(null)
  const celebrationAudioRef = useRef(new Audio(celebrationSound)) // Ref for celebration sound

  const playRound = (playerChoice) => {
    setSrcPlayer(rock)
    setSrcComputer(rock)
    setIsShaking(true)
    setIsCelebrating(false) // Reset celebration state

    // Play the shaking sound
    if (audioRef.current) {
      audioRef.current.play()
    }

    setTimeout(() => {
      let i = Math.floor(Math.random() * 3)
      setSrcComputer(gameArr[i])
      setSrcPlayer(playerChoice)
      setIsShaking(false)

      if (gameArr[i] === playerChoice) {
        setStatus('Tie')
      } else if (
        (playerChoice === rock && gameArr[i] === scissors) ||
        (playerChoice === paper && gameArr[i] === rock) ||
        (playerChoice === scissors && gameArr[i] === paper)
      ) {
        setStatus('You Win')
        setPlayerCounter(playerCounter + 1)
        setIsCelebrating(true) // Trigger celebration
        celebrationAudioRef.current.play() // Play celebration sound
      } else {
        setStatus('Computer Win')
        setcComputerCounter(computerCounter + 1)
      }
    }, 1000)
  }

  const rockBtn = () => playRound(rock)
  const paperBtn = () => playRound(paper)
  const scissorsBtn = () => playRound(scissors)

  return (
    <div className='game'>
      <h1 className={`header ${isCelebrating ? 'celebrate' : ''}`}>
        <strong>{status}</strong>
      </h1>
      <div className='top'>
        <div className='computer'>
          <p>Computer</p>
          <p className='score'>
            <strong className='red'>{computerCounter}</strong>
          </p>
        </div>
        <div className='player'>
          <p>Player</p>
          <p className='score'>
            <strong className='red'>{playerCounter}</strong>
          </p>
        </div>
      </div>
      <div className='middle'>
        <img
          src={srcComputer}
          alt='computer hand'
          className={`reflex hand ${isShaking ? 'shake-computer' : ''}`}
        />
        <img
          src={srcPlayer}
          alt='player hand'
          className={`hand ${isShaking ? 'shake-player' : ''}`}
        />
      </div>
      <div className='bottom'>
        <img
          width='70px'
          className='rock'
          src='https://www.rpsgame.org/assets/img/rock.svg'
          alt='rock'
          onClick={rockBtn}
        />
        <img
          width='70px'
          className='rock'
          src='https://www.rpsgame.org/assets/img/paper.svg'
          alt='paper'
          onClick={paperBtn}
        />
        <img
          width='70px'
          className='rock'
          src='https://www.rpsgame.org/assets/img/scissors.svg'
          alt='scissors'
          onClick={scissorsBtn}
        />
      </div>
      <audio ref={audioRef} src='https://www.example.com/sound.mp3' />
      {isCelebrating && <Confetti />} {/* Add Confetti component */}
    </div>
  )
}

export default Game
