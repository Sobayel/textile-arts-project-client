import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArt = ({allCraft,setAllArtsCraft,allArtsCraft}) => {
    console.log(allCraft);
    const {_id, name, customization, image, price,rating } = allCraft || {};


    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://textile-arts-server.vercel.app/addCraft/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                         "Deleted!",
                         "Your Art has been deleted.",
                         "success"
                      );
                      const remaining = allArtsCraft.filter(art => art._id !== _id)
                      setAllArtsCraft(remaining);
                }
            })
            }
          });
    }
    return (
            <div className="card card-side bg-slate-300 shadow-xl">
                <figure><img className=" w-96 h-60" src={image} alt="Movie" /></figure>
                <div className=" flex justify-between w-full px-4 items-center">
                    <div>
                        <h2 className="card-title text-xl">Name:{name}</h2>
                        <p className="font-semibold">Customization: {customization}</p>
                        <p className="font-semibold">Price: {price}</p>
                        <p className="font-semibold">Rating: {rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-3">
                            <Link to={`/updateArts/${_id}`}><button className="btn">Update</button></Link>
                            <button  onClick={()=>handleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MyArt;