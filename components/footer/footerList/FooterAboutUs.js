import Image from "next/image";

export default function FooterAboutUs( ) {
    return (
        <>
            <div className=' w-[195px]  max-h-56 group'>
                <div className='overflow-hidden'>
                    <p className='text-xl sm:text-3xl text-white font-Open_Sans text-center lg:text-left'>Contact Us</p>
                    <div className='w-10 sm:w-20 h-0.5 sm:h-1 mt-2  transform translate-x-20 sm:translate-x-14 lg:-translate-x-10 lg:group-hover:translate-x-0 transition transition duration-300  bg-green-400'> </div>
                </div>

                <div className='flex mt-[19px] flex lg:justify-start justify-center'>
                    <Image src='/fa_envelope.svg' width={20} height={16} alt='logo'/>
                    <p className='font-Open_Sans text-xs sm:text-sm text-white ml-3'>info@exactpro.com</p>
                </div>
                <div className='flex mt-[10px] sm:mt-[19px] flex lg:justify-start justify-center'>
                    <Image src='/fa_phone.svg' width={20} height={16} alt='logo'/>
                    <p className='text-xs sm:text-sm text-white ml-3'>+44 (0) 20 3319 1644</p>
                </div>
                <div className='flex mt-[10px] sm:mt-[19px] flex lg:justify-start justify-center'>
                    <Image src='/fa_phone.svg' width={20} height={16} alt='logo'/>
                    <p className='text-xs sm:text-sm text-white ml-3'>+44 (0) 20 3319 1644</p>
                </div>
            </div>
        </>
    )
}