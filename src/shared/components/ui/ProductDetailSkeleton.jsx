import Skeleton from "./Skeleton"

const ProductDetailsSkeleton = () => {

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <Skeleton className="aspect-video w-full rounded-2xl" />

            <div className="space-y-16">

                <Skeleton className="h-10 w-4/5 mb-4" />
                <Skeleton className="h-5 w-1/3 mb-6" />

                <div className="space-y-3 mb-8">
                    {
                        Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-5 w-full"
                            />
                        ))
                    }
                </div>

                <Skeleton className="h-10 w-40 mb-8" />

                <div className="flex flex-col gap-3 sm:flex-row">

                    <Skeleton className="h-12 w-full sm:w-32 rounded-xl" />
                    <Skeleton className="h-12 flex-1 rounded-xl" />
                </div>

            </div>
        </div>
    )
}

export default ProductDetailsSkeleton