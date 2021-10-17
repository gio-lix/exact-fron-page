import Image from "next/image";

export default function HomePageMission() {
    return (
        <>
            <div className='w-full bg-list mt-7 sm:mt-10 lg:mt-20 sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] group '>
                <div className='w-full flex flex-cols justify-center  '>
                    <div className=' w-[192px]  overflow-hidden '>
                        <p className=' text-3xl'>Our Mission</p>
                        <div className='w-20 h-1 mt-1  transform  -translate-x-10 group-hover:translate-x-0 transition transition duration-300  bg-green-400'> </div>
                    </div>

                </div>
                <div className=' bg-list flex justify-center lg:justify-between mt-5 lg:mt-10 flex-wrap '>
                    <div className='bg-bgList group hover:bg-white  border border-gray-300 cursor-pointer w-full h-[160px] md:w-[308px] border flex items-center justify-around'>
                        <div className='relative h-[119px] w-[119px]  '>
                            <Image src='/Vector-(5).svg' width={50} height={50} className='absolute transition transform translate-y-2 group-hover:translate-y-0 duration-300 '
                                   alt='img'/>
                            <Image src='/Group-12.svg' layout='fill' className='absolute'  alt='img'
                            />
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>case</p>
                            <p className='font-Open_Sans text-xl'>Studies</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300   hover:bg-white cursor-pointer w-full h-[160px] md:w-[308px] border flex items-center justify-around '>
                        <div className='relative h-[119px] w-[119px]   '>
                            <Image src='/Group-(13).svg' layout='fill' className='absolute z-50 '  alt='img'/>
                            <div  className='relative w-20 h-20   transition transform translate-y-16 translate-x-20'>
                                <Image src='/Vector-(6).svg' width={50} height={50}
                                       className='absolute transition transform -translate-x-3.5 translate-y-0 group-hover:-translate-x-2 duration-300 delay-100 '
                                       alt='img'
                                />
                            </div>

                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>Solution</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300  hover:bg-white cursor-pointer w-full h-[160px] md:w-[308px] border flex items-center justify-around '>
                        <div className='relative h-[119px] w-[119px]  '>
                            <Image src='/Group 14.svg' layout='fill' className='absolute z-50 '  alt='img'/>
                            <div  className='relative w-20 h-20   transition transform translate-y-16 translate-x-20'>
                                <Image src='/Vector-(7).svg' width={50} height={50}
                                       className='absolute transition transform -translate-x-3.5 translate-y-0 group-hover:-translate-x-2 duration-300 delay-150 '
                                       alt='img'
                                />
                            </div>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl'>Exactpro</p>
                            <p className='font-Open_Sans text-xl'>Overview</p>
                        </div>
                    </div>
                    <div className='bg-bgList border border-gray-300  hover:bg-white cursor-pointer w-full h-[160px] md:w-[308px] border flex items-center justify-around'>
                        <div className='relative h-[119px] w-[119px]  '>
                            <Image src='/Group-15.svg' layout='fill' className='absolute z-50 '  alt='img'/>
                            <div  className='relative w-20 h-20   transition transform translate-y-9 -translate-x-2'>
                                <Image src='/Vector-(8).svg' width={50} height={50}
                                       className='absolute transition transform -translate-x-3 translate-y-0 group-hover:-translate-x-4 duration-300 delay-200 '
                                       alt='img'
                                />
                            </div>
                        </div>
                        <div>
                            <p className='font-Open_Sans text-xl hover:text-bar'>Clients &</p>
                            <p className='font-Open_Sans text-xl'>Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}