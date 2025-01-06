import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDeal = () => {
    const axiosPublic = useAxiosPublic();
   
    const {data: deal = [], isPending: loading, refetch} = useQuery({
        queryKey: ['deal'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/deal');
            return res.data;
        }
    })

    return [deal, loading, refetch]
}

export default useDeal;





