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
      {
        allArtsCraft.map(allCraft => <AllArt
            key={allCraft._id} 
            allCraft={allCraft}>
        </AllArt>)
      }
      </div>
    </div>
    );
};

export default AllArtMap;