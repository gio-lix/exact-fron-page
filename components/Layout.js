import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children}) {
    return (
        <>
            <Head>
                <title>ExactPro</title>
                <meta name='description' content='exactPro for testing'/>
            </Head>
            <Header />
            <div className='sm:px-[50px] md:px-[100px] lg:px-[200px] 2xl:lg:px-[320px] '>
                {children}
            </div>
            <Footer />
        </>
    )
}
