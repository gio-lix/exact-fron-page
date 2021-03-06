import Image from "next/image";

export default function HomePageInfo() {
    return (
        <>
            <div className='w-full grid sm:grid-cols-5 sm:gap-x-6 sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] group'>
                <div
                    className='  min-h-[158px] md:h-[240px] xl:h-[308px] sm:col-start-1 sm:col-end-3 p-2 lg:p-4 xl:p-6'>
                    <div>
                        <div className='overflow-hidden'>
                            <p className='font-bold '>Our Mission</p>
                            <div className='w-20 h-1 mt-1  transform  -translate-x-10 group-hover:translate-x-0 transition duration-300  ease-in-out bg-green-400'> </div>
                        </div>
                        <div className=''>
                            <p className='text-xs mt-5 md:mt-10'>
                                Exactpro specializes in quality assurance services and related software development with
                                focus on test automation for securities data distribution, trading systems, risk
                                management, market surveillance and post-trade infrastructures.
                            </p>
                            <p  className='text-xs mt-2'>
                                We use bespoke tools and methods for every challenge and do whatever it takes to help
                                our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative border h-[340px] sm:h-[240px] md:h-[300px] lg:h-[380px] xl:h-[480px] sm:col-start-3 sm:col-end-6'>
                    <Image src='/mission.png' layout='fill'  className='absolute' alt='image' />
                </div>
            </div>
        </>
    )
}