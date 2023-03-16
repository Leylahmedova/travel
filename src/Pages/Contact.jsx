import React, { useRef } from 'react';
import { CgNotes} from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill,BsTelephoneFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import Kecid from '../Components/Kecid';



const Contact = () => {
    const form = useRef();
   
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9vuy5f9', 'template_dkllo7f', form.current, 'LS8AYvSxg88lAkK5c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
    }
  return (
    <>
    <Kecid name="Bizimlə əlaqə"/>
      {/* https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/ */}
        <div className="contact-page">
        <h2>Bizimlə əlaqə</h2>
        <div>
         <form id='create-course-form' ref={form} onSubmit={sendEmail}>
        <div>
    

 
            <input   ref={form} type="text" pattern='[a-z]*' min={5} max={14} name='name' placeholder='Ad'/>
            <BsFillPersonFill className='inputIcon'/></div>
            <div>
            <input required ref={form}   type="email" name="email" id="" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder='Email' minlength="3" maxlength="64"/>
            <BsTelephoneFill className='inputIcon'/></div>
            <div>
            <input required ref={form}   type="number" placeholder='Nömrə' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}'/>
            <FaEnvelope className='inputIcon'/>
            </div>
            <div>
            <textarea   name="message" id="" cols="30" rows="10" placeholder='Mesaj'></textarea>
            <CgNotes className='inputIcon'/>
            </div>
            <button onClick={cancelCourse} type='submit'>Mesaj Göndər</button>
        </form>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.551385951889!2d49.83689461789479!3d40.369497728059635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8a558211f3%3A0xff6ebdea0308cfc5!2sBaku%20Life%20Travel!5e0!3m2!1saz!2saz!4v1678479117251!5m2!1saz!2saz" width="50%" height="500" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>

  )
}

export default Contact