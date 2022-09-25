import { Swiper, SwiperSlide } from 'swiper/react';
import"../Slider/slider.scss"
import banner from "../../assets/banner.jpg"
import 'swiper/css';


function Slider() {
    return(
        <div id="slider">
        <Swiper
            slidesPerView={1}
         >
          <SwiperSlide>
               <div className="slider-item">
               <img src={banner} alt="" />
                <div className="sliderOver">
                    
                </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
                   <div className="slider-item">
                   <img src={banner} alt="" />
                   </div>
            </SwiperSlide>
            <SwiperSlide>
                   <div className="slider-item">
                   <img src={banner} alt="" />
                   </div>
            </SwiperSlide>
    
            </Swiper>
             
        </div>
    )
}
export default Slider;