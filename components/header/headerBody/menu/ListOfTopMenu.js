import Image from "next/image";

export default function ListOfTopMenu({item}) {
    return (
        <>
            <li>
                <div className='px-[16px] h-[56px] cursor-pointer  flex justify-center items-center hover:bg-gray-100'>
                    <Image src={`/${item.image}`} width={16} height={16} alt='search'/>
                    <p className='hidden  sm:inline-flex ml-[12px] font-Roboto text-base'>{item.title}</p>
                </div>
            </li>
        </>
    )
}