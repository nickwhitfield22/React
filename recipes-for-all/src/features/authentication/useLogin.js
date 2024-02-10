import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueriesData(['user-login'], user.user);
      toast.success('Successfully logged in!');
      navigate('/home', { replace: true });
    },
    onError: () => toast.error('Username or password incorrect.'),
  });
  return { login, isLoading };
}
