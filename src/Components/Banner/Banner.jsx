

const Banner = () => {
    return (
        <div
            className="w-full bg-no-repeat bg-cover py-24 text-center items-center grid justify-center max-w-6xl opacity-80 z-10"
            style={{ backgroundImage: `url(${'https://i.ibb.co/rwZ7rNx/cover.jpg'})` }}
        >
            <h2 className=" text-5xl font-bold text-purple-800 z-20">I Grow By Helping People In Need</h2>
            <div className="flex justify-center mt-4">
                <label className="input input-bordered flex items-center gap-2 w-64 mb-10 z-20">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <button className="btn btn-primary z-20">search</button>
            </div>
        </div>
    );
};

export default Banner;