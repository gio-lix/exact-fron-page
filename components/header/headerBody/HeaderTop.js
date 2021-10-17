import Image from "next/image";
import ListOfTopMenu from "@/components/header/headerBody/menu/ListOfTopMenu";
import BurgerMenu from "@/components/header/headerBody/menuburger/BurgerMenu";
import {useEffect, useRef, useState} from "react";

export default function HeaderTop() {
    const [burger, setBurger] = useState(false)
    const bodyRef = useRef()
    const topMenu = [
        {title: 'Search', image: 'fa_search.svg'},
        {title: 'Subscribe', image: 'Vector.svg'},
        {title: 'Contact Us', image: 'email.svg'},

    ]
    const handleClick = () => {
        setBurger(!burger)
    }
    useEffect(() => {
        document.body.addEventListener('click', handleShowLogin)
        return () => document.body.removeEventListener('click', handleShowLogin)
    }, [burger])
    const handleShowLogin = (e) => {
        if (!e.path.includes(bodyRef.current)) setBurger(false)
    }

    return (
        <>
            <div className='w-[169px] h-full relative '>
                <Image src='/Exactpro.png' layout='fill' className='absolute' alt='Exactpro' />
            </div>
            <nav>
                <ul className='flex'>
                    {topMenu.map((item, i) => (
                        <ListOfTopMenu item={item} key={i}/>
                    ))}
                    <div ref={bodyRef}>
                        <BurgerMenu setBurger={setBurger} burger={burger} handleClick={handleClick}/>
                    </div>
                    <div className={`${burger && 'fixed left-0 top-0 z-75 bg-black opacity-50 w-full h-full'}`}></div>
                </ul>
            </nav>
        </>
    )
}