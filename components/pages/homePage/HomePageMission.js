import Image from "next/image";

export default function HomePageMission() {
    return (
        <>
            <div className='w-full bg-bgList mt-7 sm:mt-10 lg:mt-20 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:px-[320px]'>
                <div className='w-full '>
                    <p className='text-center text-3xl	'>Our Mission</p>
                </div>
                <div className=' bg-list flex sm:justify-between mt-5 lg:mt-10 flex-wrap '>
                    <div className='bg-bgList border border-gray-300 w-full h-[160px] md:w-[308px] border flex items-center justify-around'>
                        <div className='relative h-[119px] w-[119px]  '>
                            <Image src='/logo.svg' layout='fill' className='absolute'  alt='img'/>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>case</p>
                            <p className='font-Open_Sans text-xl'>Studies</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300 w-full h-[160px] md:w-[308px] border flex items-center justify-around '>
                        <div className='relative h-[92px] w-[92px]  '>
                            <Image src='/Group-9.svg' layout='fill' className='absolute'  alt='img'/>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>Solution</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300 w-full h-[160px] md:w-[308px] border flex items-center justify-around '>
                        <div className='relative h-[92px] w-[92px]  '>
                            <Image src='/Group-10.svg' layout='fill' className='absolute'  alt='img'/>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>Exactpro</p>
                            <p className='font-Open_Sans text-xl'>Overview</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300 w-full h-[160px] md:w-[308px] border flex items-center justify-around'>
                        <div className='relative h-[92px] w-[92px]  '>
                            <Image src='/Group-11.svg' layout='fill' className='absolute'  alt='img'/>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>Clients &</p>
                            <p className='font-Open_Sans text-xl'>Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}