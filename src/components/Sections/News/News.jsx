import Section from '@/components/Layout/Section'
import NewsData from '@/components/NewsData/NewsData'
import H2 from '@/components/UI/Heading/H2'
import React from 'react'

const News = () => {
  return (
    <Section>
        <div className="w-full flex flex-col gap-8">
            <H2 title={'Новости колледжа'} />
            <NewsData getData={''} />
        </div>
    </Section>
  )
}

export default News
