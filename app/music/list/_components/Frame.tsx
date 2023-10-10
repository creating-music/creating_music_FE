import { HTMLAttributes } from "react";

export interface FrameProps extends HTMLAttributes<HTMLElement> {}

export default function Frame({ children, ...props }: FrameProps) {
  return <section {...props}>{children}</section>;
}
