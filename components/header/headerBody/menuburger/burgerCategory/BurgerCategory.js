import Image from "next/image";
import {useState} from "react";

export default function BurgerCategory({setBurger, burger}) {
    const [study, setStudy] = useState(false)
    const [solution, setSolution] = useState(false)
    const [ideas, setIdeas] = useState(false)
    const [company, setCompany] = useState(false)
    const [tools, setTools] = useState(false)

    const studyHandler = () => {
        setStudy(!study)
        setSolution(false)
        setIdeas(false)
        setCompany(false)
        setTools(false)
    }
    const solutionHandler = () => {
        setSolution(!solution)
        setStudy(false)
        setIdeas(false)
        setCompany(false)
        setTools(false)
    }
    const ideasHandler = () => {
        setIdeas(!ideas)
        setSolution(false)
        setStudy(false)
        setCompany(false)
        setTools(false)
    }
    const companyHandler = () => {
        setCompany(!company)
        setSolution(false)
        setStudy(false)
        setIdeas(false)
        setTools(false)
    }
    const companyTools = () => {
        setTools(!tools)
        setCompany(false)
        setSolution(false)
        setStudy(false)
        setIdeas(false)
    }
    return (
        <>
            <div
                className={`fixed z-100  h-screen w-full overflow-y-scroll scrollbar-hide sm:w-[383px]  right-0 top-0 bg-burger transform  translate-x-full ${burger && ' transform  translate-x-0 transition duration-500 ease'}    `}>
                <div className='flex justify-between h-[60px] items-center px-[30px] pt-[10px] '>
                    <div>
                        <Image src='/logo_white.svg' width={115} height={40} alt='logo'/>
                    </div>
                    <div className=' font-bold text-white font-xl cursor-pointer'  onClick={() => setBurger(false)}>
                        <Image src='/x_icon.svg' width={14} height={18} alt='x' className='font-bold'/>
                    </div>
                </div>
                {/*home*/}
                <div>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Home</p>
                    </div>
                </div>
                {/*Case Studies*/}
                <div onClick={studyHandler} className=' flex items-center '>
                    <div className='w-full h-[51px] px-[30px]  border-b border-t border-burger hover:bg-burgerHover flex items-center cursor-pointer '>
                        <p className=' text-white h-full flex items-center text-lg tracking-wider'>Case Studies </p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {study && (
                    <div className='w-full '>
                        <p className='p-2 pl-[60px] text-white text-lg text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Trading Systems </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Post Trading Systems </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>DLT Platforms </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Market Surveillance </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Collateral Management </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Risk Management </p>
                    </div>
                )}
                {/*solutions*/}
                <div onClick={solutionHandler} className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider	'>Solutions</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {solution && (
                    <div className='w-full '>
                        <p className='p-2 pl-[60px] text-white text-lg text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Functional testing</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Services</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Environment support</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Non-functional testing</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Test automation</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Onboarding</p>
                    </div>
                )}
                {/*Test Tools*/}
                <div onClick={companyTools} className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider	'>Test Tools</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {tools && (
                    <div className='w-full relative '>
                        <div className='group'>
                            <p className='absolute top-0 left-2 text-lg text-green-700 group-hover:text-green-500 font-bold'>New!</p>
                            <p className=' p-2 pl-[60px] text-white text-lg text-gray-400 group-hover:text-white font-Open_Sans cursor-pointer'>th2</p>
                        </div>

                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Sailfish</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Shsha</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>ClearTH</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Minirobots</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Load injector</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>GitHub</p>
                    </div>
                )}
                {/*Ideas*/}
                <div onClick={ideasHandler} className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg'>Ideas</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {ideas && (
                    <div className='w-full '>
                        <p className='p-2 pl-[60px] text-white text-lg text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>White Papers </p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Research papers</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Videos</p>
                    </div>
                )}
                {/*clients & Partners*/}
                <div  className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>clients & Partners </p>
                    </div>
                </div>
                {/*Company*/}
                <div onClick={companyHandler}  className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Company</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {company && (
                    <div className='w-full '>
                        <p className='p-2 pl-[60px] text-white text-lg text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>About us</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Management team</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Locations</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Pearson VUE</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Test automation</p>
                        <p className='p-2 pl-[60px] text-white text-base text-gray-400 hover:text-white font-Open_Sans cursor-pointer'>Gender pay gap report</p>
                    </div>
                )}
                {/*Careers*/}
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Careers</p>
                    </div>
                </div>
                {/*Events*/}
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Events</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                {/*News*/}
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>News</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}