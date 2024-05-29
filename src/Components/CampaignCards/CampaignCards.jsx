
import { useEffect, useState } from "react";
import SingleCampaignCard from "../SingleCampaignCard/SingleCampaignCard";

const CampaignCards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/campaign.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
           
            <div className="md:grid grid-cols-4 gap-6 mt-9">
                {
                    cards.map(singleCampaignCard => <SingleCampaignCard key={singleCampaignCard.id} singleCampaingCard={singleCampaignCard}></SingleCampaignCard>)
                }
            </div>
        </div>
    );
};

export default CampaignCards;