import { HTMLAttributes } from "react";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function Wrapper({ children, ...props }: WrapperProps) {
  return <div {...props}>{children}</div>;
}
