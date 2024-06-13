"use client";
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import SliderButtons from '../SliderButtons/SliderButtons';

const Slider = ({ geData, className = null }) => {
    return (
        <Swiper className='w-full'>
            <SwiperSlide>
                <div className="w-full flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-8/12 flex flex-col gap-5">
                        <h2 className="md:text-6xl text-3xl text-white font-medium">Федеральный проект "Профессионалитет"</h2>
                        <p className="text-white/70">На базе ГБПОУ "Волгоградский технический колледж" в рамках ФП «Профессионалитет» будет создан кластер "Транспорт и дорожное хозяйство"</p>
                    </div>
                    <div className="relative w-full md:w-4/12 aspect-square">
                        <Image fill src={'/assets/img/news/1.jpeg'} alt='Изображение' className='w-full h-full object-cover object-center rounded-md' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-8/12 flex flex-col gap-5">
                        <h2 className="md:text-6xl text-3xl text-white font-medium">Федеральный проект "Профессионалитет"</h2>
                        <p className="text-white/70">На базе ГБПОУ "Волгоградский технический колледж" в рамках ФП «Профессионалитет» будет создан кластер "Транспорт и дорожное хозяйство"</p>
                    </div>
                    <div className="relative w-full md:w-4/12 aspect-square">
                        <Image fill src={'/assets/img/news/1.jpeg'} alt='Изображение' className='w-full h-full object-cover object-center rounded-md' />
                    </div>
                </div>
            </SwiperSlide>
            <SliderButtons />
        </Swiper>
    )
}

export default Slider
