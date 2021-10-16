import Image from "next/image";

export default function HomePageNav() {
    return (
        <>
            <div className='max-w-[1920px] h-[64px]   flex items-center px-2 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:lg:px-[320px] '>
                <div  className='flex items-center'>
                    <div className='px-4  h-[64px]  flex justify-center items-center cursor-pointer'>
                        <p className=' font-Open_Sans  text-sm'>Exactpro</p>
                    </div>
                    <div className='flex items-center'>
                        <Image src='/star.svg' width={11} height={24} alt='image'/>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='px-4  h-[64px]  flex justify-center items-center cursor-pointer'>
                        <p className=' font-Open_Sans  text-sm'>Company</p>
                    </div>
                    <div className='flex items-center'>
                        <Image src='/star.svg' width={11} height={24} alt='image'/>
                    </div>
                </div>

                <div className='px-4  h-[64px]  flex justify-center items-center justify-between'>
                    <p className=' font-Open_Sans  text-sm opacity-50'>About Us</p>
                </div>
            </div>
        </>
    )
}