import { useQuery } from 'react-query';
import api from '../utils/axiosInstance';


const useFetchAstro = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['astronauts'],
    queryFn: async () => {
      const { data } = await api.get('/');
      return data;
    },
  });
  return { isLoading, isError, data };
};

export { useFetchAstro };
