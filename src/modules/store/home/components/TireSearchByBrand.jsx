import Form from "src/shared/components/form/Form"
import SelectController from "src/shared/components/form/SelectController"
import useTireSearch from "../hooks/useTireSearch"
import Button from "src/shared/components/ui/Button"
import Flex from "src/shared/components/ui/Flex"

const TireSearchByBrand = () => {

    const { control, handleSubmit, onSubmit, brands } = useTireSearch()

    return (
        <Form onSubmit={handleSubmit(onSubmit)} hideButtons>
            <Flex>
                <SelectController control={control} name='brand' label="Marcas" options={brands} keyValue="slug" className="flex-1" />
                <Button type="submit" className="self-end" variant='outline'>Consultar</Button>
            </Flex>
        </Form>
    )
}

export default TireSearchByBrand