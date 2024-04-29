import { Link } from "react-router-dom";

const CraftItems = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Craft Items Section</h2>
            <div className="overflow-x-auto mt-7">
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
        </div>
    );
};

export default CraftItems;