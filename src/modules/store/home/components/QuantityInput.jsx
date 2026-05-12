import useQuantity from "../hooks/useQuantity";

const QuantityInput = ({
    quantity,
    onChange = () => { },
    min = 1,
    max = 8,
    className = "",
}) => {
    const {
        quantity: qty,
        increment,
        decrement,
        isMin,
        isMax,
    } = useQuantity({
        value: quantity,
        onChange,
        min,
        max,
    });

    return (
        <div
            className={`
        inline-flex
        items-center
        h-12
        rounded-xl
        border
        border-line
        overflow-hidden
        bg-surface
        shrink-0
        ${className}
      `}
        >
            <button
                onClick={decrement}
                disabled={isMin}
                className="
          w-10
          h-full
          flex
          items-center
          justify-center
          text-main
          hover:bg-sunken
          transition-colors
          disabled:opacity-40
        "
            >
                -
            </button>

            <span
                className="
          w-10
          h-full
          flex
          items-center
          justify-center
          text-main
          font-medium
        "
            >
                {qty}
            </span>

            <button
                onClick={increment}
                disabled={isMax}
                className="
          w-10
          h-full
          flex
          items-center
          justify-center
          text-main
          hover:bg-sunken
          transition-colors
          disabled:opacity-40
        "
            >
                +
            </button>
        </div>
    );
};

export default QuantityInput;