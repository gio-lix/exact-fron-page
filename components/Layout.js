import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Layout({ children, title, keywords, description}) {
    return (
        <div className=''>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <Header />
            <div className='max-w-[1920px] '>
                {children}
            </div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: 'Exactpro Task',
    keywords: 'Exactpro',
    description: 'Exactpro'
}
