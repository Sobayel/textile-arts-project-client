import { Link } from "react-router-dom";


const AllArt = ({allCraft,serial}) => {
        const {_id, name, subcategory, stock, customization, price,rating } = allCraft;
    return (
        <tr>
        <td>{serial}</td> 
        <td>{name}</td> 
        <td>{subcategory}</td> 
        <td>{stock}</td> 
        <td>{customization}</td> 
        <td>{rating}</td> 
        <td>{price}</td>
        <td><Link to={`/allArtDetails/${_id}`}>View Details</Link></td>
      </tr>
        
    );
};

export default AllArt;