import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const SocialSide = () => {
    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (socialProvider) => {
        socialProvider()
        .then((result) => {
            if (result.user) {
                toast.success('Successfully');
                navigate(location?.state || "/");
            }
        });
    };
    return (
        <div>
            <div className="divider mx-6 text-lg">or signin with</div>
            <div className="flex pb-4 justify-around">
                <button
                onClick={() => handleLogin(googleLogin)}
                    className="btn bg-blue-500 text-xl mt-3"
                ><BsGoogle></BsGoogle> Google
                </button>
                <button
                onClick={() => handleLogin(githubLogin)}
                    className="btn bg-blue-500 text-xl ml-5 mt-3"
                ><FaGithub></FaGithub> Github
                </button>
            </div>
        </div>
    );
};

export default SocialSide;