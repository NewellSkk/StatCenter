import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = (props) => {
    const AuthCtx=useContext(AuthContext);
    if(AuthCtx.loading){
        return <p style={{color:"cyan"}}> LOADING...</p>
    }
    if(AuthCtx.isLoggedIn===true){
        return props.children
    }else{
        return <Navigate to="/admin/signin" />
    }
};
export default ProtectedRoute;
