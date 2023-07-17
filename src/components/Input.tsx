import { clsx } from "clsx";

export const Input = ({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) => (
  <input
    {...props}
    className={clsx("border border-gray-300 ml-2", className)}
  />
);
