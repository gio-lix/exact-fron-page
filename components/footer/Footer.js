import Image from 'next/image'
import LogoList from "@/components/footer/footerList/LogoList";
import FooterAboutUs from "@/components/footer/footerList/FooterAboutUs";

export default function Footer() {
    return (
        <>
            <div
                className='max-w-[1920px] h-[444px] bg-footer grid grid-cols-3 sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:lg:px-[320px]'>
                <div className='pt-10 '>
                    <Image src='/logo_white.svg' width={250} height={90} alt='logo'/>
                    <div>
                        <p className='font-Open_Sans text-white'>Build Software To Test Software</p>
                    </div>
                </div>
                <div className=' flex justify-center pt-10 '>
                   <FooterAboutUs />
                </div>
                <div className='pt-10'>
                    <LogoList/>
                </div>
                <div className='col-start-1 col-end-4   border-t border-opacity-30 pt-6 '>
                    <p className='text-center text-white text-xs '>Copyright © 2009 - 2021 Exactpro. All Rights Reserved. Exactpro refers to Exactpro Systems
                        Limited, registered in England and Wales, and/or one of its subsidiaries, each of which is a
                        separate legal entity, registered in the relevant jurisdictions.
                        Terms and Conditions Privacy policy Cookies policy
                    </p>
                </div>
            </div>
        </>
    )
}