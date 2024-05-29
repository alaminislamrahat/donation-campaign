import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setStoredDonations } from "../../utilities/localstorage";
import { Helmet } from "react-helmet-async";


const DonationDetail = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);
    const singledata = data.find(singledata => singledata.id === idInt);
    console.log(data, idInt, singledata)
    const { Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = singledata;

    const handleClickDonate = ()=>{
        setStoredDonations(idInt);
        toast.success(' You applied successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    }
    return (
        <div className="max-w-6xl mx-auto mb-5">
            <Helmet>
                <title>Donation|Donation Detail</title>
            </Helmet>
            <img className=" w-full relative -z-0" src={Picture} alt="" />
            <div 
            className="md:w-[1152px]"
             style={{
                backgroundColor : "rgba(0,0,0,0.5)", 
                position : "absolute",
                transform : "translate(0,-88px)",
                zIndex : "2",
                
               
                
                }}>
                <button
                onClick={handleClickDonate}
                    style={{ background: Category_bg, color: "white" }}
                    className="btn my-5 ml-8"
                >Donate ${Price}</button>
            </div>
            <div>
                <h1 className="text-4xl font-bold my-5">{Title}</h1>
                <p>{Description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetail;