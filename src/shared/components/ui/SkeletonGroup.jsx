const SkeletonGroup = ({
    count = 1,
    children
}) => {

    return Array.from({ length: count }).map((_, i) => (
        <div key={i}>
            {children}
        </div>
    ))
}

export default SkeletonGroup