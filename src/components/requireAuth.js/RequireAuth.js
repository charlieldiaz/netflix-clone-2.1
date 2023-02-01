import {useLocation, Navigate, Outlet} from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

const RequireAuth =(user)=>{
    // const user= {}
    const location = useLocation();




    return(
        user
        ?<Navigate to="/" state={{ from: location}} replace />
        :<Outlet/>
    )
}

export default RequireAuth;