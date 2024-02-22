import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { fetchStatus, isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (fetchStatus !== "fetching" && !isAuthenticated && !isLoading)
        navigate("/login");
    },
    [fetchStatus, isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
