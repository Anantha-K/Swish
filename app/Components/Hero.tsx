'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles/Hero.css'

// import required modules
import { Pagination } from 'swiper/modules';
import Image from '@/node_modules/next/image';

export default function Hero() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop className='mySwiper'>
        <SwiperSlide>    <Image
                    width={500}
                    height={500}
                    src='https://plus.unsplash.com/premium_photo-1683134073828-2c78e51cee28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className="h-full w-full object-contain lg:h-full lg:w-full"
                  /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>    <Image
                    width={500}
                    height={500}
                    src='https://plus.unsplash.com/premium_photo-1683134073828-2c78e51cee28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className="h-full w-full object-contain lg:h-full lg:w-full"
                  /></SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}