import Image from "next/image";

export default function FooterAboutUs( ) {
    return (
        <>
            <div className=' w-[195px] h-56'>
                <p className='text-3xl text-white font-Open_Sans'>Contact Us</p>
                <div className='flex'>
                    <Image src='/fa_envelope.svg' width={20} height={16} alt='logo'/>
                    <p className='font-Open_Sans text-sm text-white ml-3'>info@exactpro.com</p>
                </div>
                <div className='flex mt-[19px]'>
                    <Image src='/fa_phone.svg' width={20} height={16} alt='logo'/>
                    <p className=' text-sm text-white ml-3'>+44 (0) 20 3319 1644</p>
                </div>
                <div className='flex mt-[19px]'>
                    <Image src='/fa_phone.svg' width={20} height={16} alt='logo'/>
                    <p className=' text-sm text-white ml-3'>+44 (0) 20 3319 1644</p>
                </div>
            </div>
        </>
    )
}