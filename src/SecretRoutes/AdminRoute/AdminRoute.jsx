import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserInfo from "../../Hooks/useUserInfo";
import PropTypes from 'prop-types'
import Loading from "../../Component/Loading";

const AdminRoute = ({children}) => {
    const [userInfo, userIsLoading] = useUserInfo()
    const {user, loading} = useAuth()

    if(loading || userIsLoading){
        return <Loading></Loading>
    }
    if(user && userInfo?.role === 'Admin'){
        return children
    }

    return <Navigate to='/'></Navigate>
};

AdminRoute.propTypes={
    children: PropTypes.node
}
export default AdminRoute;