import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Kecid from "../Components/Kecid";


import "swiper/css/navigation";
import "swiper/css";
import { BsSuitHeartFill} from "react-icons/bs";

const Galery = () => {

  return (
    <>
   <Kecid name="Qaleriya"/>
    <div className="galeries">
       
        <h1>Tour Gallery</h1>
        <div className="galery-imgs">
    <Swiper
      direction= 'horizontal'
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction:false,
      }}
   
    breakpoints={{
      375:{
         slidesPerView:1,
         spaceBetween:20,
      },
      500:{
        slidesPerView:1,
        spaceBetween:30,
     },
     780:{
      slidesPerView:2,
      spaceBetween:40,
   },
   1200:{
    slidesPerView:3,
    spaceBetween:50,
 }
    }}
    modules={[Autoplay]}

    className="mySwiper"
  >
          <SwiperSlide>
           <div className="galery-div">
            <div className="img big">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl4.png" alt="" /></div>
       
           <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-11.png" alt="" /></div>
      
           </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className="galery-div">
           <div className="img big">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl1.png" alt="" /></div>

           <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-12.png" alt="" /></div>
           </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className="galery-div">
           <div className="img big">
            <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl2.png" alt="" /></div>
            <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-13.png" alt="" /></div>
           </div>
           </SwiperSlide>
       
           <SwiperSlide>
           <div className="galery-div">
           <div className="img big">
            <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl4.png" alt="" /></div>

            <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-15.png" alt="" /></div>
    
           </div>
          
           </SwiperSlide>
           <SwiperSlide>
           <div className="galery-div">
           <div className="img big">
            <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl3.png" alt="" /></div>
  
            <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-14.png" alt="" /></div>
          
           </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className="galery-div">
            <div className="img big">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl4.png" alt="" /></div>
       
           <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-11.png" alt="" /></div>
      
           </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className="galery-div">
           <div className="img big">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-xl1.png" alt="" /></div>

           <div className="img little">
           <img src="http://tourxpro-react.b-cdn.net/images/gallary/g-12.png" alt="" /></div>
           </div>
           </SwiperSlide>
          
 
       </Swiper>
       </div>
  
     
   
  
    
    </div>
    
    </>
  )
}

export default Galery