import Image from "next/image";
import ListOfTopMenu from "@/components/header/headerBody/menu/ListOfTopMenu";
import BurgerMenu from "@/components/header/headerBody/menuburger/BurgerMenu";

export default function HeaderTop() {
    const topMenu = [
        {title: 'Search', image: 'fa_search.svg'},
        {title: 'Subscribe', image: 'Vector.svg'},
        {title: 'email', image: 'email.svg'},

    ]

    return (
        <>
            <div className='w-[169px] h-full relative hidden sm:inline-flex'>
                <Image src='/Exactpro.png' layout='fill' className='absolute' alt='Exactpro' />
            </div>
            <nav>
                <ul className='flex'>
                    {topMenu.map((item, i) => (
                        <ListOfTopMenu item={item} key={i}/>
                    ))}
                    <BurgerMenu />
                </ul>
            </nav>
        </>
    )
}