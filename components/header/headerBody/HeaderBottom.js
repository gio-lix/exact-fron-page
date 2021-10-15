import ListOfMenu from "@/components/header/headerBody/menu/ListOfMenu";

export default function HeaderBottom() {
    const menu = [
        {title: 'About Us' },
        {title: 'Management Team' },
        {title: 'Locations' },
        {title: 'Gender pay gap report' },
    ]
    return (
        <>
            <ul className='flex'>
                {menu.map((item, i) => (
                    <ListOfMenu item={item} key={i}/>
                ))}
            </ul>
        </>
    )
}