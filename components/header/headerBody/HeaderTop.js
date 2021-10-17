import Image from "next/image";
import ListOfTopMenu from "@/components/header/headerBody/menu/ListOfTopMenu";

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
                    <li>
                        <div className='px-[16px] h-[56px] bg-bar cursor-pointer  flex justify-center items-center group'>
                            <Image src={`/bars.svg`} width={16} height={16} alt='search'/>
                            <p className='ml-[12px] font-Roboto text-white text-xs transform group-hover:scale-102  transition duration-150 ease-in-out'>menu</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}