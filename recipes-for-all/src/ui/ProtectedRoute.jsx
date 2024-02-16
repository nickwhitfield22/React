import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { fetchStatus, isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (fetchStatus !== 'fetching' && !isAuthenticated && !isLoading)
        navigate('/login');
    },
    [fetchStatus, isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <p>loading...</p>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
