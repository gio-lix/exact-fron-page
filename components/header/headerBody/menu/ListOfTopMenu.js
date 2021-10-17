import Image from "next/image";

export default function ListOfTopMenu({item}) {
    return (
        <>
            <li>
                <div className='px-[16px] h-[56px] cursor-pointer  flex justify-center items-center group'>
                    <Image src={`/${item.image}`} width={16} height={16} alt='search'/>
                    <p className='ml-[12px] font-Roboto text-xs transform group-hover:scale-102  transition duration-150 ease-in-out'>{item.title}</p>
                </div>
            </li>
        </>
    )
}