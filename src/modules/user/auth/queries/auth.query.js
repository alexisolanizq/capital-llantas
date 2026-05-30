import { useMutationQuery } from "src/shared/hooks/useQueries";
import { handleAuthSuccess } from "src/utils/localStorage";
import { useLocation, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

export const useLoginQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useMutationQuery({
    mutationFn: authService.login,
    onSuccess: (data) => handleAuthSuccess(data, navigate, location),
  });
};

export const useSignUpQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useMutationQuery({
    mutationFn: authService.register,
    onSuccess: (data) => handleAuthSuccess(data, navigate, location),
  });
};
