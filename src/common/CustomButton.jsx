import React from 'react'

function CustomButton({customBtn, btnImg, customLink, urlLink, myClass}) {
  return (
    <button className={`${myClass} font-josefin py-[14px] px-[34px] cursor-pointer max-md:px-7 max-md:py-2 presale-shadow bg-gradient-to-r from-off-blue to-off-sky text-white font-normal text-2xl flex items-center rounded-full gap-2 hover:scale-110 transition-all ease-in-out duration-300`}><span><img src={btnImg} alt="img" /></span> <span className='font-josefin'><a target="_blank" href={urlLink}>{customLink}</a></span> {customBtn}</button>
  )
}

export default CustomButton