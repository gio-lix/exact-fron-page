import Image from "next/image";
import {useEffect, useRef} from "react";

export default function ExactProCategory({setExactPro, exactPro,setCompanyCategory}) {
    const menuRefOne = useRef()

    const handlerClick = () => {
        setExactPro(!exactPro)
        setCompanyCategory(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleMenu)
        return () => document.body.removeEventListener('click', handleMenu)
    },[exactPro])
    const handleMenu = (e) => {
        if (!e.path.includes(menuRefOne.current)) setExactPro(false)
    }
    return (
        <>
            <div onClick={handlerClick} ref={menuRefOne} className='relative flex items-center'>
                <div className='px-4  h-[64px]  flex justify-center items-center cursor-pointer'>
                    <p className=' font-Open_Sans  text-sm'>Exactpro</p>
                </div>
                <div className='flex items-center'>
                    <Image src='/star.svg' width={11} height={24} alt='image' className={`${exactPro && 'transform rotate-90 duration-200 ease-in-out'} `}/>
                </div>
                {exactPro && (
                    <div className='absolute z-50 w-52 sm:w-36 h-36 bg-white border border-gray-300 shadow-2xl left-0  top-12'>
                        <p className='text-center'>Exactpro</p>
                    </div>
                )}
            </div>
        </>
    )
}