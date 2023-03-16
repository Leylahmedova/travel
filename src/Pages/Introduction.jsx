import MovingComponent from "react-moving-text";
import React, { useEffect } from "react";
import AOS from "aos";
import video from "../videos/video2.webm";
const Introduction = () => {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  
  return (
    <>
      <section className="introduction-section">
        <div className="intro-video">
          <video id="introVideo" muted autoPlay loop src={video}></video>
        </div>

        <div className="intro-text" >
          <div data-aos={"fade-right"}>
            <h1 >Səyahət</h1>
            </div>
            <div
            className="intro-divs">
            <div  data-aos={"fade-right"}>
              <h2>500 dan başlayan qiymətlər</h2>
              <h3>7 günlük turlar</h3>
              </div>
              <div  data-aos={"fade-right"} >
              <h2>5 ulduzlu hotellər</h2>
              <h3>Seçiminə bağlı</h3>
              </div>
              <div  data-aos={"fade-right"} >
              <h2>10 maydan etibarən</h2>
              <h3>Başlayan uçuşlar</h3>
              </div>

              </div>
               <div data-aos={"fade-right"} className="intro-btns">
                <a href="">Macəra</a>
                <a href="">Turlar</a>
               </div>
            </div>
                
      </section>

      {/* <div className='whereFlying'>
        <h3>Hara uçursan?</h3>
        <div className="flying-inputs">
          <form action="">
            <fieldset>
            <legend>Haradan-Haraya</legend>
            <input type="text"  placeholder='Lahore - Karachi'/>
            
            </fieldset>
            <fieldset>
              <legend>Səyahət</legend>
              <select name="" id="">
                <option value="">Qayıtmaq</option>
              </select>
            </fieldset>

            <fieldset>
            <legend>Gediş- Gəliş</legend>
            <input type="text"  placeholder='07 Noy 22 - 13 Noy 22'/>
        
            </fieldset>

            <fieldset>
            <legend>Sərnişin sayı</legend>
            <input type="text"  placeholder='1 Passenger, Economy'/>
        
            </fieldset>
           
        
          </form>
        </div>
        <div className="flying-btns">
          <button>Promokod Əlavə Et</button>
          <button>Uçuşları göstər</button>
        </div>
    </div> */}
    
    </>
  );
};

export default Introduction;
