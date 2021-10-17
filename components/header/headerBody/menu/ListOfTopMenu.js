import Image from "next/image";

export default function ListOfTopMenu({item}) {
    return (
        <>
            <li>
                <div className='px-[16px] h-[56px] flex justify-center items-center'>
                    <Image src={`/${item.image}`} width={16} height={16} alt='search'/>
                    <p className='ml-[12px] font-Roboto text-xs'>{item.title}</p>
                </div>
            </li>
        </>
    )
}