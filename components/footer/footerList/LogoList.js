import Image from "next/image";
import {useRouter} from "next/router";

export default function LogoList() {
    const router = useRouter()
    return (
        <>
            <div className='group'>
                <div className='overflow-hidden'>
                    <p className='text-xl sm:text-3xl text-center lg:text-left text-white font-Open_Sans'>Follow Us</p>
                    <div className='w-10 sm:w-20 h-0.5 sm:h-1 mt-2  transform translate-x-24 sm:translate-x-20 lg:-translate-x-10 lg:group-hover:translate-x-0 transition transition duration-300  bg-green-400'> </div>
                </div>
                <div>
                    <div onClick={() => router.push('https://www.youtube.com')}
                        className='w-[32px] h-[32px] mt-[19px] bg-logo hover:bg-red-400 cursor-pointer flex inline-flex items-center justify-center rounded ' >
                        <Image src='/youtube.svg' width={13} height={16} alt='image'/>
                    </div>
                    <div onClick={() => router.push('https://twitter.com')}
                        className='w-[32px] h-[32px] ml-4 cursor-pointer bg-logo hover:bg-bar flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_twitter.svg' width={20} height={16} alt='image'/>
                    </div>
                    <div  onClick={() => router.push('https://www.linkedin.com')}
                        className='w-[32px] h-[32px] ml-4 cursor-pointer bg-logo hover:bg-green-200 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_linkedin.svg' width={16} height={16} alt='image'/>
                    </div>
                    <div onClick={() => router.push('https://github.com')}
                        className='w-[32px] h-[32px] ml-4 cursor-pointer bg-logo hover:bg-gray-500 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_github.svg' width={16} height={16} alt='image'/>
                    </div>
                    <div onClick={() => router.push('https://www.facebook.com')}
                        className='w-[32px] h-[32px] mb-2 ml-4 cursor-pointer bg-logo hover:bg-blue-400  flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_facebook.svg' width={16} height={16} alt='image'/>
                    </div>
                </div>
            </div>
        </>
    )
}