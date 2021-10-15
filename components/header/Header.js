import Image from "next/image";
import HeaderTop from "@/components/header/headerBody/HeaderTop";

export default function Header() {
    return (
        <>
            <div className='max-w-[1920px] h-[56px]  flex items-center justify-between px-[320px]'>
                <HeaderTop />
            </div>
            <div className='w-[1920px] h-[260px] bg-indigo-200'>

            </div>
        </>
    )
}