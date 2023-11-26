import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const GoogleSignIn = () => {
    const navigate = useNavigate()
    const {googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin =()=>{
        const toastId = toast.loading('Sign in...')
        googleLogin()
        .then((result) => {
          const user = result.user;
          if(user?.email){
            toast.success("Sign Up Successfully!", { id: toastId });
            navigate("/");
          }
            const userInfo = {
              user_name: user?.displayName,
              user_email: user?.email,
              user_image: user?.photoURL,
              role: 'Tourist'
            };
    
            axiosPublic.post("/users", userInfo)
            .then((res) => {
              console.log(res)
              
            });

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