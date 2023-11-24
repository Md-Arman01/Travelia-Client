import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";


const GoogleSignIn = () => {
    const navigate = useNavigate()
    const {googleLogin} = useAuth()
    const handleGoogleLogin =()=>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            navigate('/')
            console.log(user)
          }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
          });
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-info normal-case w-full">
                <FcGoogle className="text-xl"></FcGoogle>Login With Google
              </button>
        </div>
    );
};

export default GoogleSignIn;