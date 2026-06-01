
const GradientBlock = ({ legend, description }) => {
    return (
        <div className="mask-hero-gradient py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="capitalize text-inverse font-heading text-xl md:text-4xl font-bold">{legend}</h2>
                {
                    description && (
                        <p className="text-inverse/40 mt-2 max-w-2xl">
                            {description}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default GradientBlock