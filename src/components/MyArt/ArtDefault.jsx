import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArt from "./MyArt";



const ArtDefault = () => {
    const loadedCraft = useLoaderData();
    const [filter,setFilter]= useState('all')
    const [allArtsCraft, setAllArtsCraft] = useState(loadedCraft);

useEffect(()=>{
    if(filter==="all"){
        setAllArtsCraft(loadedCraft)
    }else{
        const filterCraft = loadedCraft.filter(craft=> craft.customization===filter)
        setAllArtsCraft(filterCraft)
    }
},[filter])
    return (
        <div>
            <div className="dropdown dropdown-bottom flex justify-center mx-auto mb-20">
                <div tabIndex={0} role="button" className="btn m-1">Customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>setFilter("all")}><a>All</a></li>
                    <li onClick={()=>setFilter("Yes")}><a>Yes</a></li>
                    <li onClick={()=>setFilter(
"No")}><a>No</a></li>
                </ul>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {
        allArtsCraft.map(allCraft => <MyArt
            key={allCraft._id} 
            allCraft={allCraft}
            allArtsCraft={allArtsCraft}
            setAllArtsCraft={setAllArtsCraft}
            ></MyArt>)
      }
           </div>
        </div>
    );
};

export default ArtDefault;