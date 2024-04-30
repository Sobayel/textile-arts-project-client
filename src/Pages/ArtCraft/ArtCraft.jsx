import { useEffect, useState } from "react";
import ArtCraftDefault from "./ArtCraftDefault/ArtCraftDefault";


const ArtCraft = () => {
    const [allCraftItem, setAllCraftItem] = useState([]);

    useEffect(() => {
        fetch("https://textile-arts-server.vercel.app/craftItem")
            .then(res => res.json())
            .then(data => setAllCraftItem(data))
    }, []);

    
    return (
        <div className='my-8'>
          <h1 className='text-4xl md:text-5xl text-purple-600 font-bold flex justify-center'>Art & Craft Categories Section</h1>
        <div className="flex-col text-center mx-auto mt-4">
        <label className="label">
                            <span className="label-text flex justify-center mx-auto text-xl font-semibold">Subcategory</span>
                        </label>
                        <label className="input-group">
                            <select className="select bg-slate-300" name="customization">
                                <option>Knitting & Crocheting</option>
                                <option>Home Decor</option>
                                <option>Quilting</option>
                                <option>Beadwork</option>
                                <option>Tie-Dyeing</option>
                                <option>Macramé</option>
                            </select>
                        </label>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
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