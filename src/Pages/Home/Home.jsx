import ArtCraft from "../ArtCraft/ArtCraft";
import CeoInfo from "../CeoInfo/CeoInfo";
import Contact from "../Contact/Contact";
import CraftItems from "../CraftItems/CraftItems";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <ArtCraft></ArtCraft>
            <Contact></Contact>
            <CeoInfo></CeoInfo>
        </div>
    );
};

export default Home;