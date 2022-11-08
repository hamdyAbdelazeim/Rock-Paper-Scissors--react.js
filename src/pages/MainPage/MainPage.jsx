import './mainPage.css'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className='main'>
      <div className='header'>
        <img src='https://www.rpsgame.org/assets/img/rock.svg' alt='rock' />
        <img src='https://www.rpsgame.org/assets/img/paper.svg' alt='paper' />
        <img
          src='https://www.rpsgame.org/assets/img/scissors.svg'
          alt='scissors'
        />
      </div>
      <div className='center'>
        <h1> Rock Paper Scissors </h1>
        <h2> Play online</h2>
      </div>
      <div className='buttom'>
        <button>
          {' '}
          <Link
            to='/game'
            className='press'
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '20px',
            }}
          >
            start play
          </Link>{' '}
        </button>
      </div>
    </div>
  )
}

export default MainPage
