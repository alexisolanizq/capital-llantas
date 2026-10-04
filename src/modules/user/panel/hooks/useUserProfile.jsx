import { useForm } from "react-hook-form";
import { useUserProfileQuery } from "../queries/user.query"

const useUserProfile = () => {

    const { data: orders } = useUserProfileQuery()

    const { control, handleSubmit } = useForm()

    const onSubmit = async () => {

    }

    return {
        orders,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useUserProfile