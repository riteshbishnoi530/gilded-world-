import React from 'react'
import Heading from '../common/Heading'
import { POWERED_LIST } from '../utils/helper'

const PoweredBy = () => {
  return (
    <div id='nodes' className='pt-[58px] pb-10 max-lg:pt-0'>
      <div className='max-w-[1349px] mx-auto px-4 mt-[58px]'>
        <Heading myClass="text-center" heading=" By:" spanHeading="Powered" />
        <div className='flex flex-wrap -mx-3 justify-center mt-5'>
          {POWERED_LIST.map((item, i) => (
             <div key={i} className='w-1/4 max-xl:w-1/3 max-md:!w-1/2 max-sm:!w-full px-[10.5px] max-2xl:pt-[21px] max-sm:pt-4'>
                <div className='border border-white/10 bg-gradient-to-r px-5 from-white/10 to-white/3 min-h-[214px] hover:bg-gradient-to-br cursor-pointer hover:from-off-blue hover:to-off-sky flex items-center justify-center rounded-[13px] hover:shadow-[0px_8px_30px_0px] hover:shadow-off-sky transition-all ease-in-out duration-300'>
                  <img src={item.image} alt={item.imageAlt} className={`${i === 0 ? "h-20 max-lg:h-14" : i === 1 ? "h-24 max-lg:h-16" : i === 2 ? "h-[65px] max-lg:h-12" : "h-11 max-lg:h-9"} object-cover pointer-events-none`} />
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PoweredBy