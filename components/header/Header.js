import Image from "next/image";
import HeaderTop from "@/components/header/headerBody/HeaderTop";
import HeaderMiddle from "@/components/header/headerBody/HeaderMiddle";
import HeaderBottom from "@/components/header/headerBody/HeaderBottom";

export default function Header() {

    return (
        <>
            <div className='max-w-[1920px] h-[56px]  flex items-center justify-between px-2 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:px-[320px] '>
                <HeaderTop />
            </div>
            <div className='max-w-[1920px] h-[260px] relative px-2 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:px-[320px]'>
                <HeaderMiddle />
            </div>
            <div className='max-w-[1920px] h-[56px]  bg-menu flex items-center justify-between px-2 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:px-[320px] '>
               <HeaderBottom />
            </div>
        </>
    )
}