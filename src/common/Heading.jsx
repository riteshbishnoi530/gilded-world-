import React from 'react'

function Heading({heading, spanHeading, spanTwo, myClass}) {
  return (
    <h2 className={`font-josefin text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl mb-4 font-bold max-lg:text-center ${myClass}`}><span className='font-josefin bg-gradient-to-r from-off-blue to-off-sky bg-clip-text text-transparent'>{spanHeading}</span>{heading} <span className='font-josefin bg-gradient-to-r from-off-blue to-off-sky bg-clip-text text-transparent'>{spanTwo}</span></h2>
  )
}

export default Heading