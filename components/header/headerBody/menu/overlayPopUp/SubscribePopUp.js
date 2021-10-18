import Image from "next/image";
import {useRouter} from "next/router";

export default function SubscribePopUp({setSubscribe, subscribe}) {
    const router = useRouter()
    return (
        <>
            <div className='fixed left-0 top-0   z-100  transition -translate-y-full  w-full h-4  flex justify-center'>
                <div
                    className={`lg:w-3/5 md:w-3/5 w-11/12 h-[500px] top-0  duration-200  bg-white  ${subscribe ? ' translate-y-10 md:translate-y-24' : '-translate-y-full'}`}>
                    <div className='w-full h-[60px] bg-subscribe flex items-center justify-center'>
                        <div className='h-[70px] w-full   flex items-center justify-between px-5'>
                            <p className='text-2xl font-bold text-white'>Subscribe</p>
                            <button className='ml-10 hidden md:inline-flex ' onClick={() => setSubscribe(false)}>
                                <Image src='/x_icon.svg' width={17} height={17} alt='logo'/>
                            </button>
                        </div>
                    </div>
                    <div className='p-5 h-[273px]'>
                        <div className=' w-full h-52  p-5'>
                            <div className=' w-full h-[55px] mb-[20px] '>
                                <p className='w-full h-[26px] opacity-50 text-sm'>Your email address</p>
                                <input type="text" className='w-full h-[30px] border-b focus:outline-none'/>
                            </div>
                            <div className='mt-8'>
                                <p className='font-sans  text-gray-600 text-sm' >
                                    By pressing the Subscribe button, you indicate that you wish to subscribe to
                                    Exactpro marketing communications and that you agree with Exactpro <span className='underline'>Privacy policy</span>
                                </p>
                            </div>
                            <div className='mb-20 mt-10 flex items-center'>
                                <p className='font-sans  text-gray-600'>Follow Exactpro on LinkedIn</p>
                                <div  onClick={() => router.push('https://www.linkedin.com')}
                                      className='w-[35px] h-[35px] ml-1.5 cursor-pointer bg-logo border-b-2 border-black hover:bg-blue-200 flex inline-flex items-center justify-center  ' >
                                    <Image src='/fa_linkedin.svg' width={20} height={20} alt='image'/>
                                </div>
                            </div>

                            <div className='w-full flex justify-center'>
                                <button
                                    className='w-[122px] h-[34px] border-2 border-subscribeHover  flex justify-center items-center group hover:bg-subscribeHover'>
                                    <p className='group-hover:text-white text-sm'>Subscribe</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

