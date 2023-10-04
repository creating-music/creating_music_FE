import { HTMLAttributes } from "react";

interface FrameProps extends HTMLAttributes<HTMLElement> {}

export default function Frame({ children, ...props }: FrameProps) {
  return <section {...props}>{children}</section>;
}
