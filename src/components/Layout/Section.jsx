import React from 'react'

const Section = ({ children }) => {
  return (
    <section className='w-full py-8'>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default Section;
