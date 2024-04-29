import { Link } from "react-router-dom";


const AllArt = () => {
    return (
        <div className="overflow-x-auto">
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
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
        <td><Link to='/allArtDetails'>View Details</Link></td>
      </tr>
    </tbody> 
  </table>
</div>
    );
};

export default AllArt;