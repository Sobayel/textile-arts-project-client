import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const SocialSide = () => {
    return (
        <div>
            <div className="divider mx-6 text-lg">or signin with</div>
            <div className="flex pb-4 justify-around">
                <button
                    className="btn bg-blue-500 text-xl mt-3"
                ><BsGoogle></BsGoogle> Google
                </button>
                <button
                    className="btn bg-blue-500 text-xl ml-5 mt-3"
                ><FaGithub></FaGithub> Github
                </button>
            </div>
        </div>
    );
};

export default SocialSide;