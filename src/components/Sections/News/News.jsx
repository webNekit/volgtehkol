import Section from '@/components/Layout/Section'
import NewsData from '@/components/NewsData/NewsData'
import H2 from '@/components/UI/Heading/H2'
import Link from 'next/link'
import React from 'react'

const News = () => {
  return (
    <Section>
        <div className="w-full flex flex-col gap-8">
            <H2 title={'Новости колледжа'} />
            <NewsData getData={''} />
            <Link href={''} className='w-full py-2 border border-green-200 rounded-lg text-center text-green-600 font-medium hover:bg-green-600 hover:text-white transition-colors'>Смотреть все</Link>
        </div>
    </Section>
  )
}

export default News
