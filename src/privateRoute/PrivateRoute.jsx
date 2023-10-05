import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    //! we have to to wait if user refresh the page 

    console.log(loading);

    if(loading) return <span className="loading loading-spinner loading-xs"></span>

    if(!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;