import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const useAuth = () => {
    
    const all = useContext(authContext);
    return all;
};

export default useAuth;