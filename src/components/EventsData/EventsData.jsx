"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const EventsData = () => {
  return (
    <div className="w-full pt-10">
        <Swiper spaceBetween={20} autoplay={{ delay: 3000 }} breakpoints={{ 640: {slidesPerView: 1}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3} }}>
            {[1,2,3,4,5,6,7,8].map(( item, index ) => {
                return (
                    <SwiperSlide key={index} className='w-full'>
                        <Link href={'/'} className='w-full h-full hover:scale-125'>
                            <div className="relative w-full rounded-md overflow-hidden">
                                <div className="relative w-full h-[400px]">
                                    <Image fill src={'/assets/img/news/1.jpeg'} alt='Изображение' className='w-full h-full object-cover object-center' />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full p-5 bg-gradient-to-t from-green-700 flex items-end">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-white font-semibold">Международная конференция «Актуальные проблемы физической культуры, спорта и туризма»</h3>
                                        <div className="bg-white rounded-md flex flex-col items-center justify-center p-2">
                                            <span className='text-2xl font-bold'>23</span>
                                            <span>май</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default EventsData
