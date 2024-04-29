import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading } = useAuth();
    const location = useLocation();


    if(loading){
        return <span className="loading flex mx-auto justify-center items-center loading-bars loading-lg"></span>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'} ></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;