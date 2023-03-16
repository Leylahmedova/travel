
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import Post from "../Components/Posts"
import "swiper/css";
import AOS from "aos";
import 'aos/dist/aos.css';
const Tour = () => {
    useEffect(() => {
      AOS.init({
        duration : 2500
      });
    });
  return (
    <>
     <div className="posts-content" data-aos={"fade-up"}>
        <h1>Xüsusi təkliflər & Endirimlər</h1>
        <p>
          İlin ən möhtəşəm endirimlərindən sizdə yararlanın
        </p>
      </div>
      <div className="posts">
        <div className="first"></div>
        <div className="posts-container">
          <Swiper
           
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction:true,
            }}
            breakpoints={{
              320:{
                 slidesPerView:1,
                 spaceBetween:20,
              },
           
             785:{
              slidesPerView:2,
              spaceBetween:40,
           },
           1100:{
            slidesPerView:3,
            spaceBetween:30,
         }
            }}
            modules={[Autoplay]}
      
            className="mySwiper"
          >
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/1.png" cityName="Yunanistan" postDate="18avq" postDays="5 gün" postRating="4.1" postDiscount="450$" postPrice="600$"/>
            </SwiperSlide>
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/2.png" cityName="Italiya" postDate="8okt" postDays="4 gün" postRating="4.3" postDiscount="420$" postPrice="600$"/>
            </SwiperSlide>
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/3.png" cityName="Kanada" postDate="10noy" postDays="3 gün" postRating="4.7" postDiscount="480$" postPrice="620$"/>
            </SwiperSlide>
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/1.png" cityName="Yunanistan" postDate="18avq" postDays="5 gün" postRating="4.1" postDiscount="450$" postPrice="600$"/>
            </SwiperSlide>
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/2.png" cityName="Italiya" postDate="8okt" postDays="4 gün" postRating="4.3" postDiscount="420$" postPrice="600$"/>
            </SwiperSlide>
            <SwiperSlide>
              <Post postImg="http://zwin.io/react/viaje/assets/img/destination-list/3.png" cityName="Kanada" postDate="10noy" postDays="3 gün" postRating="4.7" postDiscount="480$" postPrice="620$"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </>
  )
}

export default Tour