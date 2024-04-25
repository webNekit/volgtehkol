import React from 'react';

const H2 = ({ title, className = null }) => {
  return (
    <h2 className={className + ' text-left md:text-left text-neutral-950 text-4xl font-semibold'}>{title}</h2>
  )
}

export default H2
