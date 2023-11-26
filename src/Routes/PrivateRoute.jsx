import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from '../assets/loading/loading.gif'
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =  useLocation()
    if(loading){
        return <img src={loadingImg} alt="" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default PrivateRoute;