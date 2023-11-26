import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserInfo = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: userData } = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res?.data
        }
    })
    const [userInfo] = userData || []

    return [userInfo]
};

export default useUserInfo;