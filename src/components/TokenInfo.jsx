import React from 'react'
import Heading from '../common/Heading'
import { TOKEN_INFO } from '../utils/Halpers'

function TokenInfo() {
  return (
        <div className='px-4 bg-[url(./assets/images/token-info-bg.webp)] bg-center bg-cover bg-no-repeat py-[100px] max-lg:py-16 max-md:py-12 max-sm:py-8 -mt-1 relative z-10'>
        <Heading heading="Token Info" spanHeading="$GILD" myClass="text-center"/>
        <div className='flex flex-wrap justify-center gap-[26px] mt-[59px] max-lg:mt-12 max-md:mt-8 max-sm:mt-7'>
            {TOKEN_INFO.map((item, index) => (
                <div className='w-[312px] rounded-xl min-h-[181px] flex flex-col items-center justify-center bg-gradient-to-l from-[#FFFFFF1A] to-[#FFFFFF08] hover:bg-gradient-to-tl hover:from-[#815CC8]  hover:to-[#1BABFE] border-[#FFFFFF33] transition-all ease-in-out duration-300 hover:shadow-[0px_8px_30px_0px_#1BABFE] border backdrop-blur-[40px]' key={index}>
                    <img className='pointer-events-none max-w-[70px] mb-[9px]' src={item.logo} alt="image" />
                    <h3 className='font-josefin text-white text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg font-bold'>{item.heading}</h3>
                    <p className='max-lg:max-w-full leading-[180%] text-white text-lg max-md:text-lg max-sm:text-base max-lg:text-center'>{item.subHeading}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TokenInfo