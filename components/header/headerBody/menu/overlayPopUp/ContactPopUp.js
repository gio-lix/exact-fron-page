import Image from "next/image";
import {useRouter} from "next/router";

export default function ContactPopUp({setEmail, email}) {
    const router = useRouter()
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='fixed left-0 top-0   z-100  transition -translate-y-full  w-full h-4  flex justify-center'>
                <div className={`lg:w-4/5 md:w-3/5 w-11/12 h-[500px] top-0  duration-200  bg-red-500 ${email ? ' translate-y-10 md:translate-y-24' : '-translate-y-full'}`}>
                    <div className='w-full h-[60px] bg-subscribe flex items-center justify-center'>
                        <p className='text-white font-bold text-2xl'>Contact Us</p>
                        <button onClick={() => setEmail(false)} className='absolute right-5 '>
                            <Image src='/x_icon.svg' width={17} height={17} alt='logo'/>
                        </button>
                    </div>
                    <div className='w-full h-[440px] p-[15px] bg-white grid sm:grid-cols-2 overflow-scroll scrollbar-hide'>
                        {/*form for contact*/}
                        <form onSubmit={handleFormSubmit} className='flex flex-col pr-[7.5px]'>
                            <div >
                                <div className=' w-full h-16 flex flex-col justify-end'>
                                    <p className='text-xs opacity-50 font-Open_Sans'>Your full name</p>
                                    <input type="text" className='border-b outline-none w-full'/>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className=' w-full h-16 flex flex-col justify-end '>
                                    <p className='text-xs opacity-50 font-Open_Sans'>Your email address</p>
                                    <input type="text" className='border-b outline-none w-full'/>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className=' w-full h-16 flex flex-col justify-end'>
                                    <p className='text-xs opacity-50 font-Open_Sans'>Subject</p>
                                    <input type="text" className='border-b outline-none w-full'/>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className=' w-full h-16 flex flex-col justify-end'>
                                    <p className='text-xs opacity-50 font-Open_Sans'>Message</p>
                                    <textarea className='w-full h-20 border-b resize-none outline-none'> </textarea>
                                </div>
                            </div>
                            <div className='mt-4 h-16 flex flex-col justify-end'>
                                <p className='text-xs opacity-50 font-Open_Sans'>
                                    By pressing the button, you indicate that you agree with Exactpro <span
                                    className='underline'>Privacy policy</span>
                                </p>
                            </div>
                            <div className='mt-4 w-full  flex justify-center'>
                                <button className='w-[154px] h-[34px] border-2 border-black flex items-center justify-center' type='submit'>
                                    <p>Send Message</p>
                                </button>
                            </div>
                        </form>

                        <div className=' hidden sm:inline-flex flex flex-col  pl-[14px]'>
                            <div>
                                <p className='font-Open_Sans text-2xl font-bold '>Contacts</p>
                                <div className='w-8 border border-black bg-black mt-[15px]'> </div>
                            </div>
                            {/*info phones and email*/}
                            <div>
                                <div className='flex mt-[12px]'>
                                    <Image src='/email.svg' width={18} height={16} alt='logo'/>
                                    <p className='f  ml-3'>info@exactpro.com</p>
                                </div>
                                <div className='flex mt-[12px]'>
                                    <Image src='/phone_icon.svg' width={18} height={16} alt='logo'/>
                                    <p className='  ml-3'>+44 (0) 20 3319 1644</p>
                                </div>
                                <div className='flex mt-[12px]'>
                                    <Image src='/phone_icon.svg' width={18} height={16} alt='logo'/>
                                    <p className='   ml-3'>+44 (0) 20 3319 1644</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className='text-xl underline cursor-pointer hover:text-blue-400'>Locations</p>
                            </div>
                            <div className='mt-7'>
                                <p className='font-Open_Sans text-2xl font-bold '>Join Exactpro Team</p>
                                <div className='w-8 border border-black bg-black mt-[15px]'> </div>
                            </div>
                            <div className='flex mt-[12px]'>
                                <Image src='/email.svg' width={18} height={16} alt='logo'/>
                                <p className='   ml-3'>cv@exactpro.com</p>
                            </div>
                            <div className='mt-4'>
                                <p className='underline text-xl cursor-pointer hover:text-blue-400'>Career</p>
                            </div>
                            <div className='mt-7'>
                                <p className='font-Open_Sans text-2xl font-bold '>Follow Us</p>
                                <div className='w-8 border border-black bg-black mt-[15px]'> </div>
                            </div>
                            <div className='mt-2'>
                                <div>
                                    <div onClick={() => router.push('https://github.com')}
                                         className='w-[40px] h-[40px] ml-1.5 cursor-pointer bg-subscribeGit  hover:bg-black flex inline-flex items-center justify-center rounded ' >
                                        <Image src='/fa_github.svg' width={20} height={20} alt='image'/>
                                    </div>
                                    <div onClick={() => router.push('https://www.facebook.com')}
                                         className='w-[40px] h-[40px] mb-2 ml-1.5 cursor-pointer bg-subscribeFace hover:bg-blue-400   flex inline-flex items-center justify-center rounded ' >
                                        <Image src='/fa_facebook.svg' width={20} height={20} alt='image'/>
                                    </div>
                                    <div onClick={() => router.push('https://twitter.com')}
                                         className='w-[40px] h-[40px] ml-1.5 cursor-pointer bg-subscribeTwitter hover:bg-bar  flex inline-flex items-center justify-center rounded ' >
                                        <Image src='/fa_twitter.svg' width={20} height={18} alt='image'/>
                                    </div>
                                    <div  onClick={() => router.push('https://www.linkedin.com')}
                                          className='w-[40px] h-[40px] ml-1.5 cursor-pointer bg-logo hover:bg-green-300 flex inline-flex items-center justify-center rounded ' >
                                        <Image src='/fa_linkedin.svg' width={20} height={20} alt='image'/>
                                    </div>
                                    <div onClick={() => router.push('https://www.youtube.com')}
                                         className='w-[40px] h-[40px]   ml-1.5 bg-subscribeFace hover:bg-red-400 cursor-pointer flex inline-flex items-center justify-center rounded ' >
                                        <Image src='/youtube.svg' width={20} height={20} alt='image'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}