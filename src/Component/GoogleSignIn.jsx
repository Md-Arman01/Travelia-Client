import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const GoogleSignIn = () => {
    const navigate = useNavigate()
    const {googleLogin} = useAuth()

    const handleGoogleLogin =()=>{
        const toastId = toast.loading('Sign in...')
        googleLogin()
        .then((result) => {
            toast.success('Sign in Successfully!', { id: toastId })
            const user = result.user;
            navigate('/')
            console.log(user)
          }).catch((error) => {
            const errorCode = error.code;
            toast.error( errorCode , {id: toastId})
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