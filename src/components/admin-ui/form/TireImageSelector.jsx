import { useWatch } from "react-hook-form";

const TireImageSelector = ({
    control,
}) => {

    const images = useWatch({
        control,
        name: "images",
        defaultValue: [],
    });

    const primary = useWatch({
        control,
        name: "primary_image",
    });

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

            {images.map((image, index) => (

                <label
                    key={index}
                    className={`
                        border rounded-lg p-2 cursor-pointer
                        ${primary === index
                            ? "border-primary"
                            : ""
                        }
                    `}
                >

                    <img
                        src={URL.createObjectURL(image)}
                        className="h-40 w-full object-cover"
                    />

                    <input
                        type="radio"
                        value={index}
                        checked={primary === index}
                        onChange={() => {
                            control._formValues.primary_image = index;
                        }}
                    />

                    Principal

                </label>

            ))}
        </div>
    );
};

export default TireImageSelector;