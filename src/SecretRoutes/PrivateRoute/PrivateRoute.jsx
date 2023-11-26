import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <h2>loading..........</h2>
    }
    if(user){
        return children
    }

    return <Navigate to='/signIn'></Navigate>
};

export default PrivateRoute;