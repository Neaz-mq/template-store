import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBanner = () => {
    const axiosPublic = useAxiosPublic();
   
    const {data: offer = [], isPending: loading, refetch} = useQuery({
        queryKey: ['offer'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/offer');
            return res.data;
        }
    })

    return [offer, loading, refetch]
}

export default useBanner;





