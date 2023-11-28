import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
  });

const useAxiosSecure = () => {
  const {logoutUser} = useAuth()
  const navigate = useNavigate()
    

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    console.log('request stop by interceptor', token)
    config.headers.authorization = `Baerer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) =>{
    if(error.response.status === 401 || error.response.status === 403){
      await logoutUser()
      navigate('/signIn')
    }

    return Promise.reject(error);
  });
    
    return axiosSecure
};

export default useAxiosSecure;