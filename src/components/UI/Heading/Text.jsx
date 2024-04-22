import React from 'react'

const Text = ({ content, className = null }) => {
  return (
    <p className={className + " text-base md:text-lg text-neutral-500 font-medium"}>{content}</p>
  )
}

export default Text
