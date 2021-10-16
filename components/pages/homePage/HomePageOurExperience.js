import Image from "next/image";

export default function HomePageOurExperience() {
    return (
        <>
            <div className='max-w-[1920px] min-h-[230px] md:h-[268px] lg:h-[329px] xl:h-[429px] relative'>
                <Image src='/size_p_5_0.png' layout='fill' className='absolute' alt='image'/>
                <div
                    className='absolute w-full h-full absolute sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:px-[320px]'>
                    <div className='w-72 sm:w-[336px] xl:w-[536px] h-full mt-1 sm:mt-2 xl:mt-[44px]'>
                        <div>
                            <p className='text-2xl font-Open_Sans text-white'>Our Experience</p>
                        </div>
                        <div className='mt-1 sm:mt-2 xl:mt-[52px]'>
                            <p className='text-xs text-white'>
                                Our team has in-depth understanding of the technologies and business logic behind
                                matching
                                engines, smart order routing, algorithmic trading, order management, market data
                                dissemination, straight-through processing, clearing and settlement for equities, fixed
                                income, FX, listed and OTC derivatives.
                            </p>
                            <p className='text-xs text-white'>
                                We have considerable experience working with ultra-low latency systems and FIX-based
                                solutions. In addition to functional and non-functional testing, we also verify that our
                                customers' systems are compliant with regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}