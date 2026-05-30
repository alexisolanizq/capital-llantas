import { useFetchQuery } from "src/shared/hooks/useQueries";
import orderService from "../services/order.service";

export const useOrdersQuery = () => {
  return useFetchQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await orderService.orders();
      return data;
    },
  });
};
