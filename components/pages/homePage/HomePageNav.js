
import {useState} from "react";
import ExactProCategory from "@/components/pages/homePage/homePageCategory/ExactProCategory";
import CompanyCategory from "@/components/pages/homePage/homePageCategory/CompanyCategory";


export default function HomePageNav() {
    const [exactPro , setExactPro] = useState(false)
    const [companyCategory, setCompanyCategory] = useState(false)


    return (
        <>
            <div className='max-w-[1920px] h-[64px]  relative  flex items-center px-2 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:lg:px-[320px] '>
                <ExactProCategory
                    setCompanyCategory={setCompanyCategory}
                    setExactPro={setExactPro}
                    exactPro={exactPro}
                />
                <CompanyCategory
                    setCompanyCategory={setCompanyCategory}
                    setExactPro={setExactPro}
                    companyCategory={companyCategory}
                />
                <div className='px-4  h-[64px]  flex justify-center items-center justify-between'>
                    <p className=' font-Open_Sans  text-sm opacity-50'>About Us</p>
                </div>
            </div>
        </>
    )
}