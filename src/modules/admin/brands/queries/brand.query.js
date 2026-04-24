import { useFetchQuery } from "src/shared/hooks/useQueries";
import adminBrandService from "../services/brand.service";

export const useBrandListQuery = () => {
  return useFetchQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await adminBrandService.brandList();
      return data;
    },
  });
};
