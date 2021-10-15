import Image from "next/image";

export default function LogoList() {

    return (
        <>
            <div>
                <p className='text-3xl text-white font-Open_Sans'>Follow Us</p>
                <div>
                    <div className='w-[32px] h-[32px] bg-indigo-400 cursor-pointer flex inline-flex items-center justify-center rounded ' >
                        <Image src='/youtube.svg' width={13} height={16} alt='image'/>
                    </div>
                    <div className='w-[32px] h-[32px] ml-4 cursor-pointer bg-indigo-400 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_twitter.svg' width={20} height={16} alt='image'/>
                    </div>
                    <div className='w-[32px] h-[32px] ml-4 cursor-pointer bg-indigo-400 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_linkedin.svg' width={16} height={16} alt='image'/>
                    </div>
                    <div className='w-[32px] h-[32px] ml-4 cursor-pointer bg-indigo-400 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_github.svg' width={16} height={16} alt='image'/>
                    </div>
                    <div className='w-[32px] h-[32px] ml-4 cursor-pointer bg-indigo-400 flex inline-flex items-center justify-center rounded ' >
                        <Image src='/fa_facebook.svg' width={16} height={16} alt='image'/>
                    </div>
                </div>
            </div>
        </>
    )
}