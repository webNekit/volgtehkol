import React from 'react';
import Slider from '@/components/Slider/Slider';

const Intro = ({ getData }) => {
  return (
    <section className='p-4 w-full h-screen'>
      <div className="w-full h-full flex items-center rounded-xl bg-green-950">
        <div className="container mx-auto">
            <Slider getData={''} />
        </div>
      </div>
    </section>
  )
}

export default Intro
