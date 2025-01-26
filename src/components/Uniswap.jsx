import React from 'react'
import { UNISWAP_LIST } from '../utils/Halpers'
import gold from '../assets/images/gold.webp'
import Heading from '../common/Heading'
import CustomButton from '../common/CustomButton'
import uniswapIcon from '../assets/images/uniswap-icon.webp'


const Uniswap = () => {
    return (
        <div className='bg-[url("./assets/images/uniswap-bg.webp")] bg-cover bg-no-repeat pt-[300px] pb-[220px] max-lg:py-16 max-md:py-10 max-sm:py-6 relative'>
            <div className='absolute h-[539px] rounded-tl-full rounded-bl-full max-lg:hidden bg-white/10 w-[50%] right-0 top-[25%]'></div>
            <div className='max-w-[1352px] mx-auto px-4 flex items-center justify-between max-sm:flex-wrap gap-10 max-sm:gap-14'>
                <div className='w-full'>
                    <Heading myClass="!text-left" heading="Buy On" spanTwo="Uniswap" />
                    <ul className='list-disc pl-6 pt-1'>
                        {UNISWAP_LIST.map(function (item, i) {
                            return <li key={i} className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>{item}</li>
                        })}
                    </ul>
                    <CustomButton myClass="mt-10" btnImg={uniswapIcon} customBtn="Buy Now"/>
                </div>
                <img src={gold} alt="gold-box" className='h-[365px] max-lg:h-72 max-md:h-60 object-cover pointer-events-none mr-[188px] max-xl:mr-0 max-sm:mx-auto' />
            </div>
        </div>
    )
}

export default Uniswap