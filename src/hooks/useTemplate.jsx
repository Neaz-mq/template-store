import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTemplate = () => {
    const axiosPublic = useAxiosPublic();

    const { data: template = [], isPending: loading, refetch } = useQuery({
        queryKey: ['template'],
        queryFn: async () => {
            const res = await axiosPublic.get('/template');
            return res.data;
        }
    })

    return [template, loading, refetch]
}

export default useTemplate;





