import { useHomeQuery } from "../home/queries/home.query"

const useHomeSelector = (selector) => {

    const query = useHomeQuery()

    return {
        ...query,
        data: query.data ? selector(query.data) : undefined
    }
}

export default useHomeSelector