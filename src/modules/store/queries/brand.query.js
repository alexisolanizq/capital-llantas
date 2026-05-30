import { getBrandList } from "src/modules/store/services/brand.service";
import { useFetchQuery } from "src/shared/hooks/useQueries";

export const useBrandQuery = () => {
  return useFetchQuery({
    queryKey: ["brands"],
    queryFn: getBrandList,
  });
};
