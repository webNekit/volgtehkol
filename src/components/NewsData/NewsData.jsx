import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsData = ({ getData }) => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <article key={index} className="w-full h-full flex flex-col gap-4 border border-green-200 p-2 rounded-lg">
            <div className="w-full h-[280px] relative">
              <Image fill loading='lazy' src={'/assets/img/news/1.jpeg'} alt='Изображение новости' className='w-full h-full object-cover object-center rounded-lg' />
            </div>
            <Link href={''} className='inline-flex group px-2'>
              <h3 className="text-neutral-800 text-lg font-semibold group-hover:text-green-600">Отчетно-выборное профсоюзное собрание.</h3>
            </Link>
            <span className='text-neutral-500 text-sm mt-auto px-2'>19.04.2024</span>
          </article>
        );
      })}
    </div>
  )
}

export default NewsData
