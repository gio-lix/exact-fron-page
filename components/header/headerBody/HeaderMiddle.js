import Image from "next/image";

export default function HeaderMiddle() {
    return (
        <>
            <Image src='/Rectangle.png'  layout='fill' className='absolute' alt='rectangle'/>
            <div className='absolute h-full w-full md:w-72 font-sans flex items-center justify-center md:justify-start  '>
                <p className='absolute text-white text-2xl  sm:text-3xl xl:text-5xl font-bold items-center '>
                    About Us
                </p>
            </div>
        </>
    )
}