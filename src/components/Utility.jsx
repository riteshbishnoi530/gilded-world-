import React from 'react'
import utility from "../assets/images/utility-img.webp"
import Heading from '../common/Heading'
import Description from '../common/Description'

function Utility() {
  return (
    <div className='bg-[url(./assets/images/utility-bg.webp)] bg-center bg-cover bg-no-repeat pt-[105px] pb-[194px] max-lg:py-16 max-md:py-12 max-sm:py-8 -mt-1'>
        <div className="container flex justify-between items-center max-lg:gap-5 max-lg:flex-col">
            <div>
              <Heading spanHeading="NFT " heading="Utility"/>
              <Description paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis." />
            </div>
            <div className='xl:pr-[114px]'>
                <img className='pointer-events-none max-w-[370px] max-lg:max-w-[300px]' src={utility} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Utility