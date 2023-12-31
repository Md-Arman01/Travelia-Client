import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useUserInfo = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const {data: userData , isPending:userIsLoading,} = useQuery({
        queryKey: ['userData', user?.email],
        enabled: !!user?.email,
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res?.data
        }
    })
    const [userInfo] = userData || []

    return [userInfo, userIsLoading, ]
};

export default useUserInfo;