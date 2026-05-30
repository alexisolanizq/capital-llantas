import Skeleton from "./Skeleton"

const ProductCardSkeleton = () => {

    return (
        <div
            className="
                rounded-xl
                border
                border-line
                bg-inverse
                overflow-hidden
                p-4
            "
        >
            {/* IMAGE */}
            <Skeleton
                className="
                    aspect-square
                    w-full
                    mb-4
                "
            />

            {/* CONTENT */}
            <div className="">


                <div className="space-y-2 mb-5">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/5" />
                </div>

                {/* PRICE */}
                <Skeleton className="h-7 w-28 mb-5" />

                {/* BUTTONS */}
                <div className="flex gap-2">
                    <Skeleton className="size-11 rounded-lg" />
                    <Skeleton className="h-11 flex-1 rounded-lg" />
                </div>

            </div>
        </div>
    )
}

export default ProductCardSkeleton