import { useEffect, useState } from "react";
import ArtCraftDefault from "./ArtCraftDefault/ArtCraftDefault";


const ArtCraft = () => {
    const [allCraftItem, setAllCraftItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/craftItem")
            .then(res => res.json())
            .then(data => setAllCraftItem(data))
    }, []);
    return (
        <div className='my-8'>
          <h1 className='text-4xl md:text-5xl text-purple-600 font-bold flex justify-center'>Art & Craft Categories Section</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
         {
        allCraftItem.map((artCraft) => <ArtCraftDefault
        key={artCraft._id}
        artCraft={artCraft}
        ></ArtCraftDefault>)
      }
         </div>
        </div>
    );
};

export default ArtCraft;