import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllStory = () => {
    const axiosPublic = useAxiosPublic()
    const {data: allStory} = useQuery({
        queryKey: ['allStory'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/storys')
            return res?.data
        }
    })
    return [allStory]
};

export default useAllStory;