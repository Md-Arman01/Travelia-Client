import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserInfo from "../../Hooks/useUserInfo";
import PropTypes from 'prop-types'

const AdminRoute = ({children}) => {
    const [userInfo] = useUserInfo()
    const {user, loading} = useAuth()

    if(loading){
        return <h2>loading..........</h2>
    }
    if(user && userInfo?.role === 'Admin'){
        return children
    }

    return <Navigate to='/signIn'></Navigate>
};

AdminRoute.propTypes={
    children: PropTypes.node
}
export default AdminRoute;