import {useLocation, Navigate, Outlet} from "react-router-dom";
// import * as ROUTES from '../constants/routes';

const IsUserRedirect =(props)=>{ 
    // const user= {}
    const location = useLocation();

    const {user} = props;
    const {loggedInPath} = props;
    


    return(
        user
        ?<Navigate to={loggedInPath} state={{ from: location}} replace />
        :<Outlet/>
    )
}

export const RedirectBrowse =(props)=>{ 
    // const user= {}
    const location = useLocation();

    const {user} = props;
    const {path} = props;

    return(
        !user
        ?<Navigate to={path} state={{ from: location}} replace />
        :<Outlet/>
    )
}


 export default IsUserRedirect;

////////////////

// export function IsUserRedirect ({ user, loggedInPath, children, ...rest}){
//     return (
//         <Routes>
//         <Route {...rest} render={()=> {
//             if(!user){
//                 return children;
//             }
//             if(user){
//                 return (
//                     <Navigate to={{
//                         pathname: loggedInPath
//                     }}
//                     />
//                 );
//         }
//         return null;
//     }}
//     />
//     </Routes>
//     );
// }

