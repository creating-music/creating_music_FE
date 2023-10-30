import { HTMLAttributes } from "react";

export interface FrameProps extends HTMLAttributes<HTMLElement> {
  slots?: {
    root?: "div" | "section" | "article";
  };
}

export default function Frame({ slots, children, ...props }: FrameProps) {
  const Root = slots?.root ?? "div";

  return <Root {...props}>{children}</Root>;
}
