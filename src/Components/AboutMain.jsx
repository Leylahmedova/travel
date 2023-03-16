import Card from "../Components/Card";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const AboutMain = () => {
  useEffect(() => {
    AOS.init({
      duration : 2500
    });
  }, []);
  return (
    <>
     <div className="about__us" data-aos={"fade-up"}>
        <div className="left-about">
          <h3>Haqqımızda</h3>
          <p>Digərlərindən daha yaxşı səyahət paketləri</p>
          <div className="small-div"></div>
          <p>
            "Go Travel" Turizm Agentliyi - turizm sahəsində 5 ildən artıq
            təcrübəsi olan, turizm istiqamətləri üzrə ixtisaslaşmış, korporativ
            müştərilərə kompleks xidmətləri göstərən, dünyanın bir çox
            ölkələrindən xarici turistlərin və nümayəndə heyətlərinin qəbulu,
            individual və qrup turların təşkili ilə məşğul olan Azərbaycanın ən
            tanınmış turizm şirkətlərindən biridir.
          </p>
          <a href="">Macəraya qoşul</a>
        </div>
        <div className="earth-gif" data-aos={"fade-up"}>
          <img
            src="https://dtora.wpengine.com/wp-content/uploads/2019/03/world-img.png"
            alt=""
          />
          <h2>İnanılmaz səyahət</h2>
          <div className="big-world">
            <h1>Dünya</h1>
          </div>
          <p>Ən yaxşı turizm</p>
        </div>
        <div className="about-right" data-aos={"fade-up"}>
          <h3>Ən yaxşı turizm burada</h3>
          <p>
            Bundan əlavə, şirkətimiz mütamadi olaraq Azərbaycanda və Xaricdə
            (Rusiya, Ukrayna, Qazaxıstan, Gürcüstan, Böyük Britaniya, Almaniya,
            Türkiyə, Fransa, Cənubi Koreya, Dubay və s.) beynəlxalq turizm
            sərgilərində iştirak edərək, beynəlxalq şirkətlərlə əlaqələrin
            gücləndirilməsi və təcrübə mübadiləsi ilə məşğuldur.
          </p>
          <div className="awards">
            <ul>
              <li>
                <img
                  src="https://dtora.wpengine.com/wp-content/uploads/2019/03/client-logo-img1.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://dtora.wpengine.com/wp-content/uploads/2019/03/client-logo-img2.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://dtora.wpengine.com/wp-content/uploads/2019/03/client-logo-img3.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="packets">
        <h2>DAHA ÇOX MACƏRA ÜÇÜN BİZİ İZLƏYİN</h2>
        <p>İstədiyiniz hər şey</p>
        <div className="cards">
        <Card  cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/plate-with-spoon.png" cardName="Gözəl nahar" cardParagraf="Egzotik Yemək Menyusu"/>
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/ship.png" cardName="KRUİZ NƏQLİYYATLARI" cardParagraf="Bütün İcma üçün"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/bulk-key.png" cardName="ŞƏXSİ OTELLER" cardParagraf="Əlavə Hovuzlarla"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/boat.png" cardName="SU İDMANlARI" cardParagraf="Premium paketlər üçün"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/umberlla.png" cardName="ÇİMƏRLİK FƏALİYYƏTİ" cardParagraf="Gündüz və Gecə Fəaliyyətləri"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/frame.png" cardName="BALAYI PAKETLƏRİ" cardParagraf="Evlilikdən sonra eşq"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/van.png" cardName="Caravan gəzintiləri" cardParagraf="4 Təkərli və İki Təkərli üçün"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/tend.png" cardName="Düşərgə FƏALİYYƏTİ" cardParagraf="Şəxsi Təlimçilər ilə"/>   
        <Card cardImg="https://dtora.wpengine.com/wp-content/uploads/2019/03/parasuite.png" cardName="MACƏRA FƏALİYYƏTİ" cardParagraf="Premium Planlarda"/>   
      
        </div>
      </div>
    </>
  )
}

export default AboutMain