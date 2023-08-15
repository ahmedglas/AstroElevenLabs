import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import api from '../utils/axiosInstance';


const useCreateAstro = () => {
  const queryClient = useQueryClient();
  const { mutate: createAsto, isLoading } = useMutation({
    mutationFn: async (data) => await api.post('/', data), 
    onSuccess: () => {
      queryClient.invalidateQueries('astronauts');
      toast.success('Astronaut add successfully!', {
        position: 'top-center',
        icon: '🚀',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createAsto, isLoading };
};

export { useCreateAstro };
