import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useUserInfo from "../../Hooks/useUserInfo";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Component/Loading";

const TourGuideRoute = ({children}) => {
    const [userInfo, userIsLoading] = useUserInfo()
    const {user, loading} = useAuth()

    if(loading || userIsLoading){
        return <Loading></Loading>
    }
    if(user && userInfo?.role === 'Tour Guide'){
        return children
    }

    return <Navigate to='/'></Navigate>
};

TourGuideRoute.propTypes={
    children: PropTypes.node
}

export default TourGuideRoute;