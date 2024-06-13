"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SliderButtons = () => {

    const swiper = useSwiper();

  return (
    <ul className="flex items-center gap-4">
        <li className="inline-flex">
            <button onClick={() => swiper.slidePrev()} className="flex items-center justify-center gap-1 group">
                <span className='w-10 h-10 text-sm flex items-center justify-center border border-white transition-all text-white group-hover:bg-white group-hover:text-neutral-950'>
                    <ChevronLeft />
                </span>
                <span className='h-full px-2 text-white border border-white flex items-center'>Предыдущая запись</span>
            </button>
        </li>
        <li className="inline-flex">
            <button onClick={() => swiper.slideNext()} className="flex items-center justify-center gap-1 group">
                <span className='h-full px-2 text-white border border-white flex items-center'>Следующая запись</span>
                <span className='w-10 h-10 text-sm flex items-center justify-center border border-white transition-all text-white group-hover:bg-white group-hover:text-neutral-950'>
                    <ChevronRight />
                </span>
            </button>
        </li>
    </ul>
  )
}

export default SliderButtons;
