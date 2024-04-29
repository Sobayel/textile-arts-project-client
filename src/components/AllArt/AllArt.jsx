import { Link } from "react-router-dom";


const AllArt = ({allCraft}) => {
        const { index, name, subcategory, stock, customization, price,rating } = allCraft;
    return (
        <div className="">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Subcategory</th> 
        <th>Stock Status</th> 
        <th>Customization</th> 
        <th>Rating</th> 
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>{index}</th> 
        <td>{name}</td> 
        <td>{subcategory}</td> 
        <td>{stock}</td> 
        <td>{customization}</td> 
        <td>{rating}</td> 
        <td>{price}</td>
        <td><Link to='/allArtDetails'>View Details</Link></td>
      </tr>
    </tbody> 
  </table>
</div>
    );
};

export default AllArt;