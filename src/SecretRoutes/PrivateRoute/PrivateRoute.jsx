import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from 'prop-types'
import Loading from "../../Component/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }

    return <Navigate state={location?.pathname} to='/signIn'></Navigate>
};
PrivateRoute.propTypes={
    children: PropTypes.node
}

export default PrivateRoute;