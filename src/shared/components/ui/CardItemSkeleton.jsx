import Skeleton from "./Skeleton"

const CartItemSkeleton = () => {

    return (
        <div
            className="
                flex
                gap-4

                p-4

                rounded-xl
                border
                border-line
                bg-inverse
            "
        >
            {/* IMAGE */}
            <Skeleton
                className="
                    w-24
                    h-24

                    shrink-0

                    rounded-lg
                "
            />

            {/* CONTENT */}
            <div className="flex-1 min-w-0">

                {/* TITLE */}
                <Skeleton className="h-5 w-2/3 mb-3" />

                {/* DATA */}
                <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                    <Skeleton className="h-9 w-24 rounded-lg" />
                    <Skeleton className="h-9 w-20 rounded-lg" />
                </div>

            </div>
        </div>
    )
}

export default CartItemSkeleton