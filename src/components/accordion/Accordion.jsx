import { data } from '../../helper/accordionData.js'
import './accordion.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { MdOutlineArrowDropUp } from 'react-icons/md'
import { useState } from 'react'
function Accordion() {
  const [show, setShow] = useState(null)
  const toggle = (i) => {
    if (show === i) {
      return setShow(null)
    }
    setShow(i)
  }
  return (
    <div className='total'>
      <h1 className='heading'>FAQ help section</h1>
      <div>
        {data &&
          data.map((item, i) => {
            const { question, answer } = item
            return (
              <div className='accordion'>
                <div key={i} className='item'>
                  <div className='question' onClick={() => toggle(i)}>
                    <h2>{question}</h2>
                    <p>
                      {show === i ? (
                        <MdOutlineArrowDropUp />
                      ) : (
                        <MdOutlineArrowDropDown />
                      )}
                    </p>
                  </div>
                  {show === i ? <p className='answer'>{answer}</p> : ''}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Accordion
