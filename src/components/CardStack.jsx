import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards,Mousewheel, Pagination  } from 'swiper/modules';

export default function App({children}) {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {children}
      </Swiper>
    </>
  );
}
