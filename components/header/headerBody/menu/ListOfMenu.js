import {useState} from "react";

export default function ListOfMenu({item}) {



    return(
        <>
            <li>
                <div  className={`px-4 h-[56px] ${item.id === 0 && 'bg-menuList'} cursor-pointer  flex justify-center items-center`}>
                    <p className=' font-Open_Sans text-white text-sm'>{item.title}</p>
                </div>
            </li>
        </>
    )
}