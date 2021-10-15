import Layout from "@/components/Layout";
import HomePageNav from "@/components/pages/homePage/HomePageNav";


export default function Home() {
    return (
        <Layout>
            <div>
                <div>
                    <HomePageNav/>
                </div>
                <div className='w-72 h-screen'>

                </div>
            </div>
        </Layout>
    )
}
