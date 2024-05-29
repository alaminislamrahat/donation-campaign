import { Link } from "react-router-dom";


const SingleCampaignCard = ({ singleCampaingCard }) => {
    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = singleCampaingCard;
    return (
        <Link to={`/donationDetail/${id}`}>
            <div
                style={{ background: Card_bg }}
                class="card   ">
                <figure><img src={Picture} alt="Shoes" /></figure>
                <div class="card-body">
                    <button
                        style={{ background: Text_button_bg, color: Category_bg }}
                        class="card-title text-sm btn  w-20 btn-sm">{Category}</button>
                    <h1
                        style={{ color: Category_bg }}
                        className="text-lg font-bold">{Title}</h1>

                </div>
            </div>
        </Link>
    );
};

export default SingleCampaignCard;