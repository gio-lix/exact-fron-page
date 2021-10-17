import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children}) {
    return (
        <div className=''>
            <Head>
                <title>ExactPro</title>
                <meta name='description' content='exactPro for testing'/>
            </Head>
            <Header />
            <div className='max-w-[1920px] '>
                {children}
            </div>
            <Footer />
        </div>
    )
}
