import Image from "next/image";

export default function HeaderMiddle() {
    return (
        <>
            <Image src='/Rectangle.png'  layout='fill' className='absolute' alt='rectangle'/>
            <div className='absolute h-full w-72 font-sans flex items-center'>
                <p className='absolute text-white text-5xl font-bold items-center '>
                    About Us
                </p>
            </div>
        </>
    )
}