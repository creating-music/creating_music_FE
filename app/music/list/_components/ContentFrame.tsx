import Frame, { FrameProps } from "@/ui/Frame";
import { ReactNode } from "react";

interface Props extends FrameProps {
  title: string;
  addon?: ReactNode;
}

export default function ContentFrame({ title, addon, children }: Props) {
  return (
    <Frame className="w-full">
      <header className="flex items-center justify-between">
        <h2 className="text-6xl font-semibold leading-[1.25] text-white">
          {title}
        </h2>
        {addon ? <div></div> : null}
      </header>
      <div>{children}</div>
    </Frame>
  );
}
