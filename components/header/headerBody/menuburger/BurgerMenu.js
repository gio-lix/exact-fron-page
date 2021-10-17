import Image from "next/image";
import {useEffect} from "react";
import BurgerCategory from "@/components/header/headerBody/menuburger/burgerCategory/BurgerCategory";

export default function BurgerMenu({burger,setBurger,handleClick}) {

    useEffect(() => {
        window.addEventListener('scroll', nonScroll)
        return () => window.removeEventListener('scroll', nonScroll)
    }, [burger])
    const nonScroll = () => {
        if (burger === true) {
            window.scrollTo(0, 0)
        }
    }

    return (
        <>
            <li>
                <div>
                    <div onClick={handleClick}
                         className='px-[16px] h-[56px] bg-bar cursor-pointer  flex justify-center items-center hover:bg-barHover'>
                        <Image src={`/bars.svg`} width={16} height={16} alt='search'/>
                        <p className='ml-[12px] font-Roboto text-white text-base '>menu</p>
                    </div>
                    <BurgerCategory setBurger={setBurger} burger={burger}/>
                </div>
            </li>
        </>
    )
}