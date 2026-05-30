const Avatar = ({
    user,
    size = "md"
}) => {

    const getInitials = (name = "") => {
        return name
            .trim()
            .split(" ")
            .slice(0, 2)
            .map(word => word[0])
            .join("")
            .toUpperCase()
    }

    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-14 h-14 text-lg",
        xl: "w-20 h-20 text-2xl"
    }

    if (user?.avatar) {
        return (
            <img
                src={user.avatar}
                alt={user.name}
                className={`
                    ${sizes[size]}
                    rounded-full
                    object-cover
                    mx-auto
                    mb-3
                `}
            />
        )
    }

    return (
        <div
            className={`
                ${sizes[size]}
                rounded-full
                bg-primary-contrast
                text-primary
                flex
                items-center
                justify-center
                font-semibold
                select-none
                mx-auto
                mb-3
            `}
        >
            {getInitials(user?.name)}
        </div>
    )
}

export default Avatar