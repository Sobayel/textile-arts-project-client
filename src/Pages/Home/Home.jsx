import CeoInfo from "../CeoInfo/CeoInfo";
import Contact from "../Contact/Contact";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <CeoInfo></CeoInfo>
        </div>
    );
};

export default Home;