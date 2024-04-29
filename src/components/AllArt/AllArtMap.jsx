import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllArt from "./AllArt";


const AllArtMap = () => {
    const loadedCraft = useLoaderData();
  const [allArtsCraft, setAllArtsCraft] = useState(loadedCraft);
    return (
        <div className='my-8'>
      <h1 className='text-5xl text-purple-600 font-bold flex justify-center'>All Arts Craft</h1>
      <div className=' mt-10'>
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
    {
        allArtsCraft.map((allCraft, index) => <AllArt
            key={allCraft._id} 
            serial={index+1}
            allCraft={allCraft}>
        </AllArt>)
      }
    </tbody> 
  </table>
</div>
     
      </div>
    </div>
    );
};

export default AllArtMap;