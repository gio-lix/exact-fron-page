
import HeaderTop from "@/components/header/headerBody/HeaderTop";
import HeaderMiddle from "@/components/header/headerBody/HeaderMiddle";
import HeaderBottom from "@/components/header/headerBody/HeaderBottom";

export default function Header() {

    return (
        <>
            <div className='max-w-[1920px] h-[56px]   overflow-x-scroll scrollbar-hide h-[56px]  flex items-center justify-between sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] '>
                <HeaderTop />
            </div>
            <div className='max-w-[1920px] h-[260px] relative bg-indigo-200 sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px]'>
                <HeaderMiddle />
            </div>
            <div className='max-w-[1920px] whitespace-nowrap overflow-x-scroll scrollbar-hide h-[56px]  bg-menu flex items-center justify-between sm:px-[20px] md:px-[40px] lg:px-[100px] 2xl:lg:px-[320px] '>
                <HeaderBottom />
            </div>
        </>
    )
}