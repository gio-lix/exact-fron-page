import Image from "next/image";
import {useEffect, useRef} from "react";

export default function CompanyCategory({companyCategory, setCompanyCategory, setExactPro}) {
    const companyRef = useRef()

    const handlerClick = () => {
        setCompanyCategory(!companyCategory)
        setExactPro(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleMenu)
        return () => document.body.removeEventListener('click', handleMenu)
    },[companyCategory])
    const handleMenu = (e) => {
        if (!e.path.includes(companyRef.current)) setCompanyCategory(false)
    }
    return (
        <>
            <div onClick={handlerClick}  ref={companyRef} className='relative flex items-center'>
                <div className='px-4  h-[64px]  flex justify-center items-center cursor-pointer'>
                    <p className=' font-Open_Sans  text-sm'>Company</p>
                </div>
                <div className='flex items-center'>
                    <Image src='/star.svg' width={11} height={24} className={`${companyCategory && 'transform rotate-90 duration-200 ease-in-out'}`} alt='image'/>
                </div>
                {companyCategory && (
                    <div className='absolute z-50 w-52 sm:w-36 h-36 bg-white border  border-gray-300 shadow-2xl left-0 top-12'>
                        <p className='text-center'>Company</p>
                    </div>
                )}
            </div>

        </>
    )
}