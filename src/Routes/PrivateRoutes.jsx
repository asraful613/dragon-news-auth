import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>

    }
    return (
        <div>
           if(user){
            return children
           }
           return <Navigate to={"/login"}></Navigate>
        </div>
    );
};

export default PrivateRoutes;