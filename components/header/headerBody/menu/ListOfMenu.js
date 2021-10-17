export default function ListOfMenu({item}) {
    return(
        <>
            <li>
                <div className='px-4 h-[56px]  flex justify-center items-center'>
                    <p className=' font-Open_Sans text-white text-sm'>{item.title}</p>
                </div>
            </li>
        </>
    )
}