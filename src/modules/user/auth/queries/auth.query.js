import { useMutationQuery } from "src/shared/hooks/useQueries";
import { handleAuthSuccess } from "src/utils/localStorage";
import { loginRequest, signUpRequest } from "../services/auth.service";
import { useLocation, useNavigate } from "react-router-dom";

export const useLoginQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useMutationQuery({
    mutationFn: loginRequest,
    onSuccess: (data) => handleAuthSuccess(data, navigate, location),
  });
};

export const useSignUpQuery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useMutationQuery({
    mutationFn: signUpRequest,
    onSuccess: (data) => handleAuthSuccess(data, navigate, location),
  });
};
