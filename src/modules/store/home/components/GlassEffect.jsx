
const GlassEffect = () => (
    <div className="absolute w-full inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 -z-10 mask-hero-gradient dark:mask-hero-dark" />
        <div className="absolute inset-0 -z-10">
            <div
                className="absolute top-10 -left-10 w-72 h-72 bg-accent-dark/30 dark:bg-accent-soft rounded-full blur-3xl"
            />
            <div
                className="absolute top-0 right-10 w-72 h-72 bg-accent/40 dark:bg-accent-soft rounded-full blur-3xl"
            />
            <div
                className="absolute top-30 left-1/2 -translate-1/2 w-72 h-72 bg-accent/30 dark:bg-accent-soft rounded-full blur-3xl"
            />
            <div
                className="absolute -bottom-10 right-10 w-96 h-96 bg-accent-dark/20 dark:bg-accent-soft rounded-full blur-3xl"
            />
            <div
                className="absolute bottom-20 left-20 w-96 h-96 bg-accent/40 dark:bg-accent-soft rounded-full blur-3xl"
            />
        </div>
    </div>
)

export default GlassEffect