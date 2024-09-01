import Frame, { FrameProps } from "@/app/_components/Frame";
import { ReactNode } from "react";

interface Props extends FrameProps {
  title: string;
  addon?: ReactNode;
}

export default function ContentFrame({ title, addon, children }: Props) {
  return (
    <Frame className="w-full py-[16px]">
      <header className="flex h-[80px] items-center justify-between">
        <h2 className="ml-[104px] text-[2rem] font-semibold leading-[1.25] text-white">
          {title}
        </h2>
        {addon}
      </header>
      <div>{children}</div>
    </Frame>
  );
}
