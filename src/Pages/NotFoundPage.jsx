import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import Kecid from '../Components/Kecid'
import AOS from "aos";
const  NotFoundPage= () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
    <Kecid name="404"/>
      <div className="error-page">
        <div className="error-left"  data-aos={"fade-right"}>
            <img src="https://creativelayers.net/themes/gotrip-html/img/general/404.svg" alt="" />
        </div>
        <div className="error-content"   data-aos={"fade-left"}>
            <h1>40<span>4</span> </h1>
            <h2>Oops!AXTARDIĞINIZ SƏHİFƏ TAPILMADI</h2>
            <p>Axtardığınız səhifə mövcud deyil. Yenidən axtarmağa çalışın və ya keçiddən istifadə edin.</p>
            <Link to="/">Ana səhifəyə qayıt</Link>
        </div>
    </div>
    </>
  
  )
}

export default NotFoundPage