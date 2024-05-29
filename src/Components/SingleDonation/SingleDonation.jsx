import { Link } from "react-router-dom";


const SingleDonation = ({ singleDonation }) => {
    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = singleDonation;

    return (
        <div>
            <div
                style={{ backgroundColor: Card_bg }}
                className="card grid grid-cols-2 items-center">
                <figure><img className="w-full ml-6" src={Picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button
                        style={{
                            backgroundColor: Text_button_bg,
                            color: Category_bg
                        }}
                        className="btn btn-sm w-28">{Category}</button>
                    <h2 className=" font-bold">{Title}</h2>
                    <p style={{ color: Category_bg }}>${Price}</p>
                    <div className="card-actions">
                        <Link to={`/donationDetail/${id}`}>
                            <button
                                style={{ backgroundColor: Category_bg }}
                                className="btn text-white ">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDonation;