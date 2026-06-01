import clsx from "clsx";
import { responsive } from "src/utils/responsive";
import { twMerge } from "tailwind-merge";

const verticalSpacing = {
  none: "py-0",
  xsmall: "py-4",
  compact: "py-8",
  normal: "py-16",
  large: "py-24",
};

const horizontalSpacing = {
  none: "px-0",
  xsmall: "px-4",
  compact: "px-6",
  normal: "px-8",
  large: "px-12",
};

const containerWidths = {
  full: "max-w-full",
  compact: "max-w-5xl",
  normal: "max-w-7xl",
};

const Section = ({
  children,

  densityY = "normal",
  densityX = "xsmall",

  container = "normal",

  className,
}) => {
  return (
    <section
      className={twMerge(
        clsx(
          responsive(densityY, verticalSpacing)
        )
      )}
    >
      <div
        className={twMerge(
          clsx(
            "mx-auto w-full",

            responsive(container, containerWidths),
            responsive(densityX, horizontalSpacing),

            className
          )
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;