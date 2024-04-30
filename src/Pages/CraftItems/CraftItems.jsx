
import CraftItemDefault from "./CraftItemDefault/CraftItemDefault";
import { useEffect, useState } from "react";


const CraftItems = () => {
    const [allCraftItem, setAllCraftItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/craftItem")
            .then(res => res.json())
            .then(data => setAllCraftItem(data))
    }, []);
    return (
        <div className='my-8'>
          <h1 className='text-5xl text-purple-600 font-bold flex justify-center'>Craft Items Section</h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
         {
        allCraftItem.map((allCraft) => <CraftItemDefault
        key={allCraft._id}
        allCraft={allCraft}
        ></CraftItemDefault>)
      }
         </div>
        </div>
    );
};

export default CraftItems;