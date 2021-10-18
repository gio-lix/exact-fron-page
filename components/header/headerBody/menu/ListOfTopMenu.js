import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export default function ListOfTopMenu({item, search, setSearch, setSubscribe, subscribe}) {

    const [input, setInput] = useState(7)

    const handleClick = () => {
        if (item.title === 'Search') setSearch(!search)
        if (item.title === 'Subscribe') setSubscribe(!subscribe)
    }
    useEffect(() => {
        window.addEventListener('scroll', nonScroll)
        return () => window.removeEventListener('scroll', nonScroll)
    }, [search, subscribe])
    const nonScroll = () => {
        if (search === true || subscribe === true) window.scrollTo(0, 0)
    }


    return (
        <>
            <li onClick={handleClick}>
                <div className='px-[16px] h-[56px]  cursor-pointer  flex justify-center items-center hover:bg-gray-100'>
                    <Image src={`/${item.image}`} width={16} height={16} alt='logo'/>
                    <p className='hidden  md:inline-flex ml-[12px] font-Roboto text-base'>{item.title}</p>
                </div>
            </li>
            {search && (
                <div
                    className='fixed top-0 z-100 w-full left-0 h-[60px] bg-white px-4 sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] flex justify-center  items-center'>
                    <div className='w-full  px-[15px] flex items-center'>
                        <div className='flex w-full md:w-[540px] lg:w-[760px] items-center'>
                            <div className='w-full flex items-center  border-b-2  border-green-400 h-[35px]'>
                                <p className=''>about</p>
                                <input type="text" className='w-full h-full pl-1 outline-none'/>
                            </div>
                            <div
                                className='w-[130px] h-[34px] flex items-center justify-center bg-bar transition -translate-y-0.5 -translate-x-2'>
                                <div className='flex items-center'>
                                    <Image src='/fa_search-white.svg' width={16} height={16} alt='logo'/>
                                    <p className='text-white ml-2 font-Open_Sans'>Search</p>
                                </div>
                            </div>
                        </div>
                        <button className='ml-10 hidden md:inline-flex' onClick={() => setSearch(false)}>
                            <Image src='/x_icon_black.svg' width={12} height={12} alt='logo'/>
                        </button>
                    </div>
                </div>
            )}

            {subscribe && (
                <div className='fixed z-100 left-0 w-full  bg-red-500  flex justify-center  items-center'>
                    <div className='w-11/12 sm:w-3/4 md:w-2/4 fixed bg-white top-20 h-[423px] flex flex-col'>
                        <div className='h-[70px] w-full bg-subscribe flex items-center justify-between px-5'>
                            <p className='text-2xl font-bold text-white'>Subscribe</p>
                            <button className='ml-10 hidden md:inline-flex ' onClick={() => setSubscribe(false)}>
                                <Image src='/x_icon.svg' width={17} height={17} alt='logo'/>
                            </button>
                        </div>
                        <div className='p-5 h-[273px]'>
                            <div className=' w-full h-52  p-5'>
                                <div className=' w-full h-[55px] mb-[20px] '>
                                    <p className='w-full h-[26px] opacity-50'>Your email address</p>
                                    <input type="text" className='w-full h-[30px] border-b focus:outline-none'/>
                                </div>
                                {/*<div className='mb-8'>*/}
                                {/*    <p className=' font-sans text-gray-600'>*/}
                                {/*        By pressing the Subscribe button, you indicate that you wish to subscribe to Exactpro*/}
                                {/*    </p>*/}
                                {/*    <p  className=' font-sans  text-gray-600'>*/}
                                {/*        marketing communications and that you agree with Exactpro Privacy policy*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                                <div className='mb-8'>
                                    <p className='font-sans  text-gray-600'>Follow Exactpro on LinkedIn</p>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <button className='w-[122px] h-[34px] border-2 border-subscribeHover  flex justify-center items-center group hover:bg-subscribeHover'>
                                        <p className='group-hover:text-white'>Subscribe</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}