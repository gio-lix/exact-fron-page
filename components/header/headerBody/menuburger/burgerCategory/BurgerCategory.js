import Image from "next/image";

export default function BurgerCategory({setBurger, burger}) {
    return (
        <>
            <div
                className={`fixed z-100  h-screen w-full sm:w-[383px]  right-0 top-0 bg-burger transform  translate-x-full ${burger && ' transform  translate-x-0 transition duration-500 ease'}    `}>
                <div className='flex justify-between h-[60px] items-center px-[30px] pt-[10px] '>
                    <div>
                        <Image src='/logo_white.svg' width={115} height={40} alt='logo'/>
                    </div>
                    <div className=' font-bold text-white font-xl'  onClick={() => setBurger(false)}>
                        <Image src='/x_icon.svg' width={14} height={18} alt='x' className='font-bold'/>
                    </div>
                </div>
                <div>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Home</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <div className='w-full h-[51px] px-[30px]  border-b border-t border-burger hover:bg-burgerHover flex items-center cursor-pointer '>
                        <p className=' text-white h-full flex items-center text-lg tracking-wider'>Case Studies </p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider	'>Solutions</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider	'>Test Tools</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div  className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg'>Ideas</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div  className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>clients & Partners </p>
                    </div>
                </div>
                <div  className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Company</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Careers</p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>Events</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div
                        className='w-full h-[51px]  border-b border-t border-burger hover:bg-burgerHover flex items-center px-[30px]'>
                        <p className=' text-white text-lg tracking-wider'>News</p>
                        <div className='h-full flex items-center '>
                            <Image src='/arrow_down_icon1.svg' className=' transform translate-y-0.5' width={22} height={22} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}