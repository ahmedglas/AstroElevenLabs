import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import api from '../utils/axiosInstance';

const useUpdateAstro = () => {
  const queryClient = useQueryClient();
  const { mutate: editAstro } = useMutation({
    mutationFn: async ({ id, data }) => await api.put('/' + id, data),
    onSuccess: () => {
      queryClient.invalidateQueries('astronauts');
      toast.success('Astronaut updated successfully!', {
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
  return { editAstro };
};

export { useUpdateAstro };
