import React from "react";
import { cn } from "src/utils";

const columnsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-4",
};

const FormRow = ({
    children,
    columns,
    className = "",
}) => {
    const totalColumns =
        columns || React.Children.count(children);

    return (
        <div
            className={cn(
                "grid gap-4",
                columnsMap[totalColumns],
                className
            )}
        >
            {children}
        </div>
    );
};

export default FormRow;