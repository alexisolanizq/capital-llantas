import { useFetchQuery } from "src/shared/hooks/useQueries";
import { homeService } from "../services/home.service";
import { useCatalogStore } from "src/store/catalog";


export const useHomeQuery = () => {
  return useFetchQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const { data } = await homeService.index();
      return data;
    },
    options: {
      staleTime: 1000 * 60 * 30,
    },
  });
};
