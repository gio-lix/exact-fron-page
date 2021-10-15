import Image from "next/image";

export default function HeaderTop() {
    return (
        <>
            <div className='w-[169px] h-full relative '>
                <Image src='/Exactpro.png' layout='fill' className='absolute' alt='Exactpro' />
            </div>
            <nav>
                <ul className='flex'>
                    <li>
                        <div className='w-[110px]  h-[56px] flex justify-center items-center'>
                            <Image src='/fa_search.svg' width={16} height={16} alt='search'/>
                            <p className='ml-[12px] font-Roboto text-xs'>Search</p>
                        </div>
                    </li>
                    <li>
                        <div className='w-[110px] h-[56px] flex justify-center items-center'>
                            <Image src='/Vector.svg' width={16} height={16} alt='vector'/>
                            <p className='ml-[12px] font-Roboto text-xs'>Subscribe</p>
                        </div>
                    </li>
                    <li>
                        <div className='w-[110px]  h-[56px] flex justify-center items-center'>
                            <Image src='/email.svg' width={16} height={16} alt='email'/>
                            <p className='ml-[12px] font-Roboto text-xs'>Contact us</p>
                        </div>
                    </li>
                    <li>
                        <div className='w-[110px]  h-[56px] flex justify-center bg-bar items-center'>
                            <Image src='/bars.svg' width={16} height={16} alt='email'/>
                            <p className='ml-[12px] font-Roboto text-xs'>Contact us</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}