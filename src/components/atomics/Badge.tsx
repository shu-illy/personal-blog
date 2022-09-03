import { Badge as MantineBadge, BadgeProps } from "@mantine/core";
import React, { forwardRef } from "react";
import { cloneElement } from "react";

export const Badge = forwardRef<
  HTMLDivElement,
  BadgeProps<"div"> & { transformUpper?: boolean }
>(({ sx, transformUpper, ...props }, ref) => {
  return cloneElement(<MantineBadge />, {
    sx: {
      ...sx,
      textTransform: transformUpper ? "uppercase" : "none",
    },
    ref,
    ...props,
  });
});

Badge.displayName = "Badge";
