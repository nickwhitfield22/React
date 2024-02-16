import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      queryClient.setQueriesData(['user-signup'], user.user);
      toast.success('Welcome to Recipes-For-All!');
      navigate('/home', { replace: true });
    },
    // onError: toast.error('Error signing in.'),
  });

  return { signUp, isLoading };
}
