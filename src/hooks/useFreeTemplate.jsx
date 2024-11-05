import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFreeTemplate = () => {
    const axiosPublic = useAxiosPublic();
 
    const {data: free = [], isPending: loading, refetch} = useQuery({
        queryKey: ['free'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/free');
            return res.data;
        }
    })

    return [free, loading, refetch]
}

export default useFreeTemplate;





