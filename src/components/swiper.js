import "../styles/swipercard.css"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

export const SwiperCard = () =>{
    return(
        <>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img alt="sustainibility-volunteer" src="https://images.unsplash.com/photo-1641320201668-1b2bedb4a066?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="sustainibility-volunteer" src="https://plus.unsplash.com/premium_photo-1681140559027-ebda062237e6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="sustainibility-volunteer" src="https://plus.unsplash.com/premium_photo-1678656090963-c2f1d6874b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJib2xlcyUyMHBsYW50YXJ8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="sustainibility-volunteer" src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="sustainibility-volunteer" src="https://images.unsplash.com/photo-1625758475456-1f26727c0f99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" />
          </SwiperSlide>
        </Swiper>
      </>
    )
}