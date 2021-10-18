import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export default function ListOfTopMenu({item ,search, setSearch}) {

    const handleClick = () => {
        if (item.title === 'Search')  setSearch(!search)
    }
    useEffect(() => {
        window.addEventListener('scroll', nonScroll)
        return () => window.removeEventListener('scroll', nonScroll)
    }, [search])
    const nonScroll = () => {
        if (search === true) window.scrollTo(0, 0)
    }



    return (
        <>
            <li onClick={handleClick}>
                <div className='px-[16px] h-[56px] fill-hover cursor-pointer  flex justify-center items-center hover:bg-gray-100'>
                    <Image src={`/${item.image}`} width={16} height={16} alt='logo' />
                    <p className='hidden  sm:inline-flex ml-[12px] font-Roboto text-base'>{item.title}</p>
                </div>

            </li>
            {search && (
                <div  className='fixed top-0 z-100 w-full left-0 h-[60px] bg-white px-4 sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] flex justify-center  items-center'>
                    <div className='w-full  px-[15px] flex items-center'>
                        <div className='flex w-full md:w-[540px] lg:w-[760px] items-center'>
                            <div className='w-full flex items-center  border-b-2  border-green-400 h-[35px]'>
                                <p className=''>about</p>
                                <input type="text"  className='w-full h-full pl-1 outline-none'/>
                            </div>
                            <div className='w-[130px] h-[34px] flex items-center justify-center bg-bar transition -translate-y-0.5 -translate-x-2'>
                                <div className='flex items-center'>
                                    <Image src='/fa_search-white.svg' width={16} height={16} alt='logo' />
                                    <p className='text-white ml-2 font-Open_Sans'>Search</p>
                                </div>
                            </div>
                        </div>
                        <button className='ml-10 hidden md:inline-flex'  onClick={() => setSearch(false)}>
                            <Image src='/x_icon_black.svg' width={12} height={12} alt='logo' />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}