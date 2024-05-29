const getStoredDonations = ()=>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const setStoredDonations = (id)=>{
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donations',JSON.stringify(storedDonations));
    }
}

export {getStoredDonations,setStoredDonations}