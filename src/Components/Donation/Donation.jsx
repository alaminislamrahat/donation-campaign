import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredDonations } from "../../utilities/localstorage";
import SingleDonation from "../SingleDonation/SingleDonation";


const Donation = () => {
    const data = useLoaderData();

    const navigate = useNavigate();
    const handleBack = ()=>{
        navigate(-1);
    }

    const [donation, setDonation] = useState([]);
    const [display, setDisplay] = useState(4);

    useEffect(() => {
        const storedDonationId = getStoredDonations();
        if (data.length > 0) {
            const donationData = [];
            for (const id of storedDonationId) {
                const donate = data.find(donate => donate.id === id);
                if (donate) {
                    donationData.push(donate);
                }
            }
            setDonation(donationData);

        }

    }, [data])
    

    return (
        <div className="grid grid-cols-1 justify-center">
            <div className="md:grid grid-cols-2 gap-5 my-6 items-center">

                <div className={donation.length > 0 && 'hidden'}>
                    <p className="text-6xl font-bold text-red-700 text-center">No data available</p>
                    <button onClick={handleBack} className="btn btn-warning ml-10 mt-5">Go Back</button>
                </div>

                {
                    donation.slice(0, display).map(singleDonation => <SingleDonation key={singleDonation.id} singleDonation={singleDonation}></SingleDonation>)
                }
            </div>
            <div className={donation.length > 4 ? '' : 'hidden'}>
                <button
                    onClick={() => setDisplay(donation.length)}
                    className="btn btn-primary md:ml-[540px]">see all</button>
            </div>
        </div>
    );
};

export default Donation;