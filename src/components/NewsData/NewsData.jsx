import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsData = ({ getData }) => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {[1, 2, 3].map((item, index) => {
        return (
          <article key={index} className="w-full h-full flex flex-col gap-4">
            <div className="w-full h-[280px] relative">
              <Image fill loading='lazy' src={'/assets/img/news/1.jpeg'} alt='Изображение новости' className='w-full h-full object-cover object-center rounded-lg' />
            </div>
            <Link href={''} className='inline-flex group'>
              <h3 className="text-neutral-800 text-xl font-semibold group-hover:text-green-600">Отчетно-выборное профсоюзное собрание.</h3>
            </Link>
            <span className='text-neutral-500 text-sm mt-auto'>19.04.2024</span>
          </article>
        );
      })}
    </div>
  )
}

export default NewsData
