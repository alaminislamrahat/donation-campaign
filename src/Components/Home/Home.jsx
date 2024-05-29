import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CampaignCards from "../CampaignCards/CampaignCards";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Donation | Home</title>
            </Helmet>
            <Banner></Banner>
            <CampaignCards></CampaignCards>
        </div>
    );
};

export default Home;