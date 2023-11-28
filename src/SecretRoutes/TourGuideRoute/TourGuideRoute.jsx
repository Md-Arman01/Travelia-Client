import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useUserInfo from "../../Hooks/useUserInfo";
import useAuth from "../../Hooks/useAuth";

const TourGuideRoute = ({children}) => {
    const [userInfo] = useUserInfo()
    const {user, loading} = useAuth()

    if(loading){
        return <h2>loading..........</h2>
    }
    if(user && userInfo?.role === 'Tour Guide'){
        return children
    }

    return <Navigate to='/signIn'></Navigate>
};

TourGuideRoute.propTypes={
    children: PropTypes.node
}

export default TourGuideRoute;