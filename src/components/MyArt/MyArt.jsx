import { Link } from "react-router-dom";


const MyArt = () => {
    return (
        <div className="card card-side bg-slate-300 shadow-xl">
            <figure><img className=" w-96 h-60" src="https://i.ibb.co/M70ST96/embroid-Beadwork.jpg" alt="Movie" /></figure>
            <div className=" flex justify-between w-full px-4 items-center">
                <div>
                    <h2 className="card-title text-2xl text-red-700">Item Name:Md.Sobayel Hossain</h2>
                    <p className="text-xl font-semibold">Customization:  Yes</p>
                    <p className="text-xl font-semibold">Price: 1300</p>
                    <p className="text-xl font-semibold">Rating: 5.00</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <Link to="/updateArts"><button className="btn">Update</button></Link>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArt;