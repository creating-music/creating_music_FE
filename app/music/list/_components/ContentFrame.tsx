import Frame, { FrameProps } from "@/app/_components/Frame";
import { ReactNode } from "react";

interface Props extends FrameProps {
  title: string;
  addon?: ReactNode;
}

export default function ContentFrame({ title, addon, children }: Props) {
  return (
    <Frame className="w-[75rem] pt-[1rem]">
      <header className="flex h-[5rem] items-center justify-between px-[3rem]">
        <h2 className="text-[2rem] font-semibold leading-[1.25] text-white">
          {title}
        </h2>
        {addon}
      </header>
      <div>{children}</div>
    </Frame>
  );
}
