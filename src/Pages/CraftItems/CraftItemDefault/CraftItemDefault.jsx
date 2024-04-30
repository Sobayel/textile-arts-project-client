import { Link } from "react-router-dom";


const CraftItemDefault = ({allCraft}) => {
    const {_id, name, subcategory, image, price,rating } = allCraft || {};
    return (
        <div className="card card-compact shadow-xl">
  <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-2xl">Name: {name}</h2>
    <p className="text-lg">Subcategory: {subcategory}</p>
    <div className="flex">
        <p className="text-lg">Rating: {rating}</p>
        <p className="text-lg">Price: {price}</p>
    </div>
    <div className="card-actions  mt-3">
      <Link to={`/cardDetails/${_id}`} className="btn btn-primary w-full">View Details Page</Link>
    </div>
  </div>
</div>
    );
};

export default CraftItemDefault;