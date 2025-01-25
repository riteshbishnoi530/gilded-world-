import React from 'react'

function Description({paragraph, myClass}) {
  return (
    <p className={`max-lg:max-w-full leading-[180%] text-white text-xl max-md:text-lg max-sm:text-base opacity-70 max-lg:text-center ${myClass}`}>{paragraph}</p>
  )
}

export default Description