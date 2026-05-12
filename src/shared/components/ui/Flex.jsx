

import { cn } from "src/utils";

const DIRECTIONS = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const JUSTIFY = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const ITEMS = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const GAPS = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
  "2xl": "gap-8",
};

const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];


const responsive = (prop, map) => {
  if (!prop) return [];

  // String normal
  if (typeof prop === "string") {
    return map[prop] ? [map[prop]] : [];
  }

  // Responsive object
  if (typeof prop === "object") {
    return Object.entries(prop).flatMap(([breakpoint, value]) => {
      if (!map[value]) return [];

      // base
      if (breakpoint === "base") {
        return [map[value]];
      }

      // responsive
      if (BREAKPOINTS.includes(breakpoint)) {
        return [`${breakpoint}:${map[value]}`];
      }

      return [];
    });
  }

  return [];
};


const Flex = ({
  children,
  className,

  /* Layout */
  direction = "row",
  justify = "start",
  items = "center",

  /* Spacing */
  gap = "md",

  /* Behavior */
  wrap = false,
  inline = false,

  /* Sizing */
  fullWidth = false,
  fullHeight = false,
  grow = false,

  ...props
}) => {
  return (
    <div
      className={cn(
        inline ? "inline-flex" : "flex",

        responsive(direction, DIRECTIONS),
        responsive(justify, JUSTIFY),
        responsive(items, ITEMS),
        responsive(gap, GAPS),

        wrap && "flex-wrap",
        grow && "flex-1",
        fullWidth && "w-full",
        fullHeight && "h-full",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;