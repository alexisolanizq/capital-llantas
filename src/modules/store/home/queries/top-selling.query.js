import { useFetchQuery } from "src/shared/hooks/useQueries";
import { topSellingService } from "src/modules/store/home/services/topSelling.service";

export const useTopSellingFetchQuery = () => {
  return useFetchQuery({
    queryKey: ["topSelling"],
    queryFn: async () => {
      const data = await topSellingService.getAll();
      return data?.data;
    },
    options: {
      staleTime: 0,
      refetchOnMount: true,
    },
  });
};
