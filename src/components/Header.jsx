import React, { useState, useEffect } from "react";
import { HEADER_LIST } from "../utils/Halpers";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1025) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }
        };
        handleOverflow();
        window.addEventListener('resize', handleOverflow);

        return () => {
            window.removeEventListener('resize', handleOverflow);
        };
    }, [open]);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div className="max-w-[1440px] mx-auto relative z-10">
            <nav className="flex justify-between items-center">
                <a href="/">
                    <img className="max-w-[268px] max-xl:max-w-[200px]" src="/src/assets/images/logo.webp" alt="logo" />
                </a>
                <div className="flex gap-7 absolute right-0">
                    <div
                        className={`flex gap-10 max-xl:gap-8 items-center max-lg:px-0 max-sm:gap-5 max-lg:fixed max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-gray-800 max-lg:duration-300 max-lg:justify-center max-lg:items-center z-10 max-lg:text-white ${open ? 'max-lg:top-0' : 'max-lg:top-full'}`}
                    >
                        {HEADER_LIST.map((item, index) => (
                            <div key={index} className="relative">
                                <a onClick={toggleSidebar} className="text-white font-josefin text-custom-xl max-xl:text-lg" href="#">{item}</a>
                            </div>
                        ))}
                        <a target="_blank" href="https://discord.com" className="py-[14px] px-[34px] presale-shadow bg-gradient-to-r from-[#815CC8] to-[#1BABFE] text-white font-normal text-2xl flex items-center rounded-full gap-2 hover:scale-110 transition-all ease-in-out duration-300"><img src="src/assets/images/discord.webp" alt="discord" /> Discord
                        </a>
                    </div>
                    
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-3 lg:hidden flex cursor-pointer'>
                    <span className={`${open ? 'w-[31px] h-0.5 bg-white rotate-[-45deg] translate-y-[12.5px] duration-300 ease-linear rounded' : 'w-[31px] h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-[31px] h-0.5 bg-white rotate-[45deg] -translate-y-[2px] duration-300 ease-linear rounded' : 'w-[31px] h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </nav>
        </div>
    );
};
export default Header;