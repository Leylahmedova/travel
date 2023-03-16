import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import {BsEnvelope,BsTelephoneFill} from "react-icons/bs"
import {MdPlace} from "react-icons/md"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <section className="footer-section">
        <div className="footer-container">
            <div className="footer-col-social">
                 <img src="https://creativelayers.net/themes/gotrip-html/img/general/logo-light.svg" alt="" />
                 <p>"Go Travel" Turizm Agentliyi - turizm sahəsində 5 ildən artıq təcrübəsi olan, turizm istiqamətləri üzrə ixtisaslaşmış, korporativ müştərilərə kompleks xidmətləri göstərən, individual və qrup turların təşkili ilə məşğul olan Azərbaycanın ən tanınmış turizm şirkətlərindən biridir.</p>
                 <div className="social-icons">
                    <div className="social-icon"><FaFacebookF/></div>
                    <div className="social-icon"><FaTwitter/></div>
                    <div className="social-icon"><FaInstagram/></div>
                 </div>
            </div>
            <div className="footer-col-contactUs">
                <h2>Bizimlə əlaqə</h2>
               <p><MdPlace className='footerIcon'/> Manama Tower, Bangladesh</p>
                <p><BsEnvelope className='footerIcon'/> gotrip@gmail.com</p>
                <p><BsTelephoneFill className='footerIcon'/> +088 012121240</p>
            </div>
            <div className="footer-col-links">
                <h2>Sürətli keçid</h2>
                <Link to="/"><p>Ana səhifə</p></Link>
                <Link to="about-us"><p>Haqqımızda</p></Link>
                <Link to="tours"><p>Turlar</p></Link>
                <Link to="blog"><p>Bloqlar</p></Link>
                <Link to="faq" ><p>FAQ</p></Link>
                <Link to="contact"><p>Bizimlə əlaqə</p></Link>
             
               
            </div>
            <div className="footer-col-gallery">
                <h2>Instagram Qaleriyası</h2>
                <div className="fotos">
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/1.png" alt="" /></a>
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/2.png" alt="" /></a>
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/3.png" alt="" /></a>
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/4.png" alt="" /></a>
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/5.png" alt="" /></a>
                   <a href="#"><img className='foto' src="http://zwin.io/react/viaje/assets/img/instagram/6.png" alt="" /></a>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© GoTrip 2023 Müəllif hüquqları qorunur.Leila tərəfindən hazırlanıb.</p>
        </div>
    </section>
    </>
  )
}

export default Footer