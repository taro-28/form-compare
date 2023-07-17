import clsx from "clsx";
import NextLink from "next/link";
import { ComponentPropsWithoutRef } from "react";

export const Link = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof NextLink>) => (
  <NextLink
    {...props}
    className={clsx("text-blue-500 hover:text-blue-400", className)}
  />
);
