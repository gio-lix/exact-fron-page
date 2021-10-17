import ListOfMenu from "@/components/header/headerBody/menu/ListOfMenu";
const menu = [
    {id: 0, title: 'About Us' },
    {id: 1, title: 'Management Team' },
    {id: 2, title: 'Locations' },
    {id: 3, title: 'Gender pay gap report' },
]

export default function HeaderBottom() {




    return (
        <>
            <ul className='flex'>
                {menu.map((item) => (
                    <ListOfMenu item={item}   key={item.id}/>
                ))}
            </ul>
        </>
    )
}