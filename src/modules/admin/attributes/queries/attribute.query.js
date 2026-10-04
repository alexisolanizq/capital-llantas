import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries";
import adminAttributeService from "../services/attribute.service";

export const useAttributeListQuery = () => useFetchQuery({
    queryKey: ["attributes"],
    queryFn: adminAttributeService.attributeList
})

export const useAttributeTypeListQuery = () => useFetchQuery({
    queryKey: ["attribute-types"],
    queryFn: adminAttributeService.attributeTypeList
})

export const useCreateAttributeMutation = () => useMutationQuery({
    mutationFn: adminAttributeService.createAttribute,
    invalidateKeys: ['attributes'],
    successMessage: "Atributo agregado correctamente"
})

export const useUpdateAttributeMutation = () => useMutationQuery({
    mutationFn: adminAttributeService.updateAttribute,
    invalidateKeys: ['attributes'],
    successMessage: "Atributo modificado correctamente"
})