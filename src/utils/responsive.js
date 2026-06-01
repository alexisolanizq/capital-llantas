const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];

export const responsive = (prop, map) => {
  if (!prop) return [];

  const resolveValue = (value) => map?.[value] || value;

  if (typeof prop === "string" || typeof prop === "number") {
    return [resolveValue(prop)];
  }

  if (typeof prop === "object") {
    return Object.entries(prop).flatMap(([breakpoint, value]) => {
      const className = resolveValue(value);

      if (!className) return [];

      if (breakpoint === "base") {
        return [className];
      }

      if (BREAKPOINTS.includes(breakpoint)) {
        return [`${breakpoint}:${className}`];
      }

      return [];
    });
  }

  return [];
};
