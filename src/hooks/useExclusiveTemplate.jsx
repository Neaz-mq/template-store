import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useExclusiveTemplate = () => {
    const axiosPublic = useAxiosPublic();
    const { data: exclusive = [], isPending: loading, refetch } = useQuery({
        queryKey: ['exclusive'],
        queryFn: async () => {
            const res = await axiosPublic.get('/exclusive');
            return res.data;
        }
    })
    return [exclusive, loading, refetch]
}

export default useExclusiveTemplate;





