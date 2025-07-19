import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";

import style from "./Contact.module.css";

export default function Contact() {

    let [userName, setUserName] = useState('');
    let [userAge, setUserAge] = useState('');
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');

    useEffect(() => {
        document.title = "Contact";
      },[]);

  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center">
        <Heading title="Contact Section" textColor="text-second" bgColor="bg-second" />
      <div className="container">
        <div className="form w-75 m-auto">
                <label htmlFor="userName" className={`${style.formLabel}  form-label  text-main position-relative top-0 ${!userName && style.labelTop}`}>userName:</label>
                <input className={`${style.input} form-control border-0 border-bottom py-3 position-relative`} id="userName" type="text" placeholder="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor="userAge" className={`${style.formLabel}  form-label text-main position-relative top-0 ${!userAge && style.labelTop}`}>userAge:</label>
                <input className={`${style.input} form-control border-0 border-bottom py-3 position-relative`} id="userAge" type="text" placeholder="userAge" value={userAge} onChange={(e) => setUserAge(e.target.value)}/>
                <label htmlFor="userEmail" className={`${style.formLabel}  form-label text-main position-relative top-0 ${!userEmail && style.labelTop}`}>userEmail:</label>
                <input className={`${style.input} form-control border-0 border-bottom py-3 position-relative`} id="userEmail" type="text" placeholder="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                <label htmlFor="userPassword" className={`${style.formLabel}  form-label text-main position-relative top-0 ${!userPassword && style.labelTop}`}>userPassword:</label>
                <input className={`${style.input} form-control border-0 border-bottom py-3 position-relative`} id="userPassword" type="text" placeholder="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                <button className={`btn ${style.submit} bg-main text-white mt-3`}>Send Message</button>
        </div>
      </div>
    </div>
    
    </>
  )
}
