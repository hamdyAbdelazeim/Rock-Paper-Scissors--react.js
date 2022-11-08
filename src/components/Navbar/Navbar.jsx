import React, { useState } from 'react'
import './navbar.css'
import { CiLight, CiDark } from 'react-icons/ci'
import { GoGrabber } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import image from '../../media/Rock-paper-scissors.svg.png'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../App/ThemeSlice'
import { Link } from 'react-router-dom'

function Navbar() {
  // const [isdark, setIsDark] = useState(false)
  const [open, setOpen] = useState(true)
  let dark = useSelector((state) => state.theme.isdark)
  const dispatch = useDispatch()
  console.log(dark)
  return (
    <div>
      <div className='Navbar'>
        <img src={image} alt='' width={45} />
        <ul className='midlle'>
          <li className='link'>
            <Link
              to='/'
              className='press'
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '25px',
              }}
            >
              Home
            </Link>
          </li>
          <Link
            to='/game'
            className='press'
            style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}
          >
            Game
          </Link>
          <Link
            to='/help'
            className='press'
            style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}
          >
            Help
          </Link>{' '}
        </ul>
        <div className='right'>
          {dark ? (
            <CiLight onClick={() => dispatch(changeTheme())} />
          ) : (
            <CiDark onClick={() => dispatch(changeTheme())} />
          )}
          {open ? (
            <GoGrabber
              style={{ fontSize: '50px' }}
              className='open'
              onClick={() => setOpen(!open)}
            />
          ) : (
            <AiOutlineClose className='open' onClick={() => setOpen(!open)} />
          )}
        </div>
      </div>
      <ul className={`sideBar  ${open ? 'hide' : ''}`}>
        <li className='link'>
          <Link
            to='/'
            className='press'
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '25px',
            }}
          >
            Home
          </Link>
        </li>
        <Link
          to='/game'
          className='press'
          style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}
        >
          Game
        </Link>
        <Link
          to='/help'
          className='press'
          style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}
        >
          Help
        </Link>{' '}
      </ul>
    </div>
  )
}

export default Navbar
