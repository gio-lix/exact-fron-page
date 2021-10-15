import Head from "next/head";
import Header from "@/components/header/Header";

export default function Layout({ children}) {
    return (
        <>
            <Head>
                <title>ExactPro</title>
                <meta name='description' content='exactPro for testing'/>
            </Head>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}
