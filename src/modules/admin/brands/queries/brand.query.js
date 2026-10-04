import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries";
import adminBrandService from "../services/brand.service";

export const useBrandListQuery = () => {
  return useFetchQuery({
    queryKey: ["brands"],
    queryFn: adminBrandService.brandList
  });
};

export const useCreateBrandMutation = () => {
  return useMutationQuery({
    mutationFn: adminBrandService.createBrand,
    invalidateKeys: ["brands"],
    successMessage: "Marca agregada correctamente"
  })
}

export const useUpdateBrandMutation = () => {
  return useMutationQuery({
    mutationFn: adminBrandService.updateBrand,
    invalidateKeys: ["brands"],
    successMessage: "Marca actualizada correctamente"
  })
}
