import { useMutationQuery } from "src/shared/hooks/useQueries";
import { checkoutService } from "../services/payment.service";

export const useCheckoutQuery = () => {
  return useMutationQuery({
    mutationFn: checkoutService.createCheckout,
  });
};

export const usePaymentMutation = () => {
  return useMutationQuery({
     mutationFn: checkoutService.payment
  })
}