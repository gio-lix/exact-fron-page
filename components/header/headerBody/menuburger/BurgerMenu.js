import Image from "next/image";
import {useEffect, useState} from "react";

export default function BurgerMenu() {
    const [burger, setBurger] = useState(false)

    const handleClick = () => {
        setBurger(!burger)


    }
    useEffect(() => {
        window.addEventListener('scroll', nonScroll)
        return () => window.removeEventListener('scroll', nonScroll)
    },[burger])
    const nonScroll = () => {
        if (burger === true) {
            window.scrollTo(0,0)
        }
    }
    return (
        <>
            <li>
                <div onClick={handleClick} className='px-[16px] h-[56px] bg-bar cursor-pointer  flex justify-center items-center group'>
                    <Image src={`/bars.svg`} width={16} height={16} alt='search'/>
                    <p className='ml-[12px] font-Roboto text-white text-xs transform group-hover:scale-102  transition duration-150 ease-in-out'>menu</p>
                </div>

            </li>
            <div className={`${burger && 'fixed left-0 z-75 bg-black opacity-50    w-full h-full  '}`}>

            </div>
            {burger && (
                <div className='fixed z-100  h-screen w-[383px]  right-0 bg-burger '>
                    <div className='flex justify-between h-[60px] items-center px-[30px] pt-[10px] '>
                        <div>
                            <Image src='/logo_white.svg' width={115} height={40} alt='logo'/>
                        </div>
                        <button
                            className='font-bold text-white font-xl'
                            onClick={() => setBurger(false)}>
                            <Image src='/x_icon.svg' width={14} height={18} alt='x' className='font-bold'/>
                        </button>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                            <p className=' text-white text-lg'>Home</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}