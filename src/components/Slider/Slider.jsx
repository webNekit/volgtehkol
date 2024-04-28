"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ geData, className = null }) => {
    return (
        <Swiper className='w-full'>
            <SwiperSlide>
                <div className="w-full flex items-center flex-col md:flex-row">
                    <div className="w-full md:w-8/12 flex flex-col gap-2">
                        <h2 className="md:text-6xl text-3xl text-white font-medium">Федеральный проект "Профессионалитет"</h2>
                        <p className="text-white/70">На базе ГБПОУ "Волгоградский технический колледж" в рамках ФП «Профессионалитет» будет создан кластер "Транспорт и дорожное хозяйство"</p>
                    </div>
                    <div className="relative w-full md:w-4/12 aspect-square">
                        <Image fill src={'/assets/img/news/1.jpeg'} alt='Изображение' className='w-full h-full object-cover object-center rounded-md' />
                    </div>
                </div>
            </SwiperSlide>
            <ul className="flex items-center">
                <li className="inline-flex">
                    <button className="w-10 h-10 flex items-center justify-center border border-white text-white"><ChevronRight /></button>
                </li>
            </ul>
        </Swiper>
    )
}

export default Slider
