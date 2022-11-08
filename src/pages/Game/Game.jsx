import React, { useState } from 'react'
import './game.css'
import rock from '../../media/rock.png'
import paper from '../../media/paper.png'
import scissors from '../../media/scissors.png'
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa'
function Game() {
  const gameArr = [rock, paper, scissors]
  // console.log(rock.title)
  // console.log(gameArr)
  const [srcPlayer, setSrcPlayer] = useState(rock)
  const [srcComputer, setSrcComputer] = useState(rock)
  const [status, setStatus] = useState('')
  const [playerCounter, setPlayerCounter] = useState(0)
  const [computerCounter, setcComputerCounter] = useState(0)
  const rockBtn = () => {
    setSrcPlayer(rock)
    let i = Math.floor(Math.random() * 3)
    setSrcComputer(gameArr[i])
    if (gameArr[i] === rock) {
      setStatus('tie')
    }
    if (gameArr[i] === paper) {
      setStatus('computer win')
      setcComputerCounter(computerCounter + 1)
    }
    if (gameArr[i] === scissors) {
      setStatus('You win')
      setPlayerCounter(playerCounter + 1)
    }
  }
  const paperBtn = () => {
    setSrcPlayer(paper)
    let i = Math.floor(Math.random() * 3)
    setSrcComputer(gameArr[i])
    if (gameArr[i] === rock) {
      setStatus('You Win ')
      setPlayerCounter(playerCounter + 1)
    }
    if (gameArr[i] === paper) {
      setStatus('Tie')
    }
    if (gameArr[i] === scissors) {
      setStatus('Computer Win')
      setcComputerCounter(computerCounter + 1)
    }
  }
  const scissorsBtn = () => {
    setSrcPlayer(scissors)
    let i = Math.floor(Math.random() * 3)
    setSrcComputer(gameArr[i])
    if (gameArr[i] === rock) {
      setStatus('Computer Win ')
      setcComputerCounter(computerCounter + 1)
    }
    if (gameArr[i] === paper) {
      setStatus('You Win')
      setPlayerCounter(playerCounter + 1)
    }
    if (gameArr[i] === scissors) {
      setStatus('Tie')
    }
  }

  return (
    <div className='game'>
      <h1 class='header'>
        {' '}
        <strong>{status}</strong>{' '}
      </h1>
      <div className='top'>
        <div className='computer'>
          <p>computer</p>
          <p className='score'>
            <strong className='red'>{computerCounter}</strong>
          </p>
        </div>
        <div className='player'>
          <p>player</p>
          <p className='score'>
            <strong className='red'> {playerCounter}</strong>
          </p>
        </div>
      </div>
      <div className='middle'>
        <img src={srcComputer} alt='rock' className={`reflex hand `} />
        <img src={srcPlayer} alt='rock' className={`hand  `} />
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
          alt='rock'
          onClick={paperBtn}
        />
        <img
          width='70px'
          className='rock'
          src='https://www.rpsgame.org/assets/img/scissors.svg'
          alt='rock'
          onClick={scissorsBtn}
        />
      </div>
    </div>
  )
}

export default Game
