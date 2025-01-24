import React from 'react'

function Utility() {
  return (
    <div className='bg-utility bg-center bg-cover bg-no-repeat pt-[105px] pb-[194px] max-lg:py-16 max-md:py-12 max-sm:py-8 -mt-1'>
        <div className="container flex justify-between items-center max-lg:gap-5 max-lg:flex-col">
            <div>
                <h2 className='text-white text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl mb-4 font-bold max-lg:text-center'><span className='text-[#7664CD]'>NFT</span> Utility</h2>
                <p className='max-w-[649px] max-lg:max-w-full text-white text-xl opacity-70 max-lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
            </div>
            <div className='xl:pr-[114px]'>
                <img className='max-w-[370px] max-lg:max-w-[300px]' src="src/assets/images/utility-img.webp" alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Utility