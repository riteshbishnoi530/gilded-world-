import React from 'react'
import top from "../assets/images/gilded-top-img.webp"
import bottom from "../assets/images/gilded-bottom-img.webp"

function GildedWorld() {
  return (
    <div className='px-4 py-[228px] bg-[url(./assets/images/gildedworld-environment.webp)] bg-center bg-cover bg-no-repeat text-white -mt-1 max-lg:py-40 max-md:py-32 max-sm:py-24'>
        <p className='text-custom-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl leading-[150%] max-w-[940px] mx-auto text-center font-josefin'><span className='relative'>Gilded <img className='absolute -left-26 max-[1123.98px]:left-0 max-md:max-w-20 -top-12 max-[1123.98px]:-top-20 max-md:-top-18' src={top} alt="bottom img" /></span> Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the <span className='relative'>game! <img className='absolute max-md:max-w-20 -right-26 max-lg:right-0 top-2 max-lg:top-6' src={bottom} alt="bottom img" /></span> </p>
    </div>
  )
}

export default GildedWorld