import Layout from "@/components/Layout";
import HomePageNav from "@/components/pages/homePage/HomePageNav";
import HomePageInfo from "@/components/pages/homePage/HomePageInfo";
import HomePageMission from "@/components/pages/homePage/HomePageMission";
import HomePageOurExperience from "@/components/pages/homePage/HomePageOurExperience";


export default function Home() {
    return (
        <Layout>
            <div>
                <HomePageNav/>
                <HomePageInfo/>
                <HomePageMission />
                <HomePageOurExperience />
            </div>
        </Layout>
    )
}
