import Image from "next/image";
import ListOfTopMenu from "@/components/header/headerBody/menu/ListOfTopMenu";

export default function HeaderTop() {
    const topMenu = [
        {title: 'Search', image: 'fa_search.svg'},
        {title: 'Subscribe', image: 'Vector.svg'},
        {title: 'email', image: 'Vector.svg'},
        {title: 'menu', image: 'bars.svg'},
    ]

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
                </ul>
            </nav>
        </>
    )
}