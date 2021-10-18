import Image from "next/image";
import ListOfTopMenu from "@/components/header/headerBody/menu/ListOfTopMenu";
import BurgerMenu from "@/components/header/headerBody/menuburger/BurgerMenu";
import {useEffect, useRef, useState} from "react";


const topMenu = [
    {id: 0, title: 'Search', image: 'fa_search.svg'},
    {id: 1, title: 'Subscribe', image: 'Vector.svg'},
    {id: 2, title: 'Contact Us', image: 'email.svg'},
]

export default function HeaderTop() {
    const [burger, setBurger] = useState(false)
    const [search, setSearch] = useState(false)
    const [subscribe, setSubscribe] = useState(false)

    const menuRef = useRef()
    const bodyRef = useRef()


    //burger ref
    useEffect(() => {
        document.body.addEventListener('click', handleShowLogin)
        return () => document.body.removeEventListener('click', handleShowLogin)
    }, [burger])
    const handleShowLogin = (e) => {
        if (!e.path.includes(bodyRef.current)) setBurger(false)
    }

    //search ref
    useEffect(() => {
        document.body.addEventListener('click', handleShowSearch)
        return () => document.body.removeEventListener('click', handleShowSearch)
    }, [search, subscribe])
    const handleShowSearch = (e) => {
        if (!e.path.includes(menuRef.current)) {
            setSearch(false)
            setSubscribe(false)
        }
    }

    return (
        <>
            <div className='w-[169px] h-full relative '>
                <Image src='/Exactpro.png' layout='fill' className='absolute' alt='Exactpro' />
            </div>
            <nav>
                <ul className='flex'>
                    <span  className='inline-flex'>
                        {topMenu.map((item, i) => (
                            <div key={i} ref={menuRef}>
                                <ListOfTopMenu item={item}
                                               search={search}
                                               setSearch={setSearch}
                                               setSubscribe={setSubscribe}
                                               subscribe={subscribe}
                                />
                            </div>
                        ))}

                        <div className={`${(search || subscribe) && 'fixed left-0  z-75 top-0 bg-black opacity-50 w-full h-full'}`}> </div>
                    </span>




                    {/*burger menu*/}
                    <span >
                        <div ref={bodyRef}>
                            <BurgerMenu setBurger={setBurger} burger={burger} />
                        </div>
                        <div className={`${burger && 'fixed left-0 top-0 z-75 bg-black opacity-50 w-full h-full'}`}> </div>
                    </span>

                </ul>
            </nav>
        </>
    )
}