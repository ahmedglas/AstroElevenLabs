import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import api from '../utils/axiosInstance';


const useDeleteAstro = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteAstro, isLoading: deleteAstroLoading } = useMutation({
    mutationFn: async (id) => await api.delete('/' + id),
    onSuccess: () => {
      queryClient.invalidateQueries('astronauts');
      toast.success('Astronaut deleted successfully!', {
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
  return { deleteAstro, deleteAstroLoading };
};

export { useDeleteAstro };
