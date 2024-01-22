"use client";

import Icon from "../../../_components/Icon";
import ClientIcon from "@/app/_components/icon/ClientIcon";

interface ChoiceProps {
  label: string;
  selected: string;
  onChangeSelected: (label: string) => void;
}

export default function Choice({
  label,
  selected,
  onChangeSelected,
}: ChoiceProps) {
  if (selected === label)
    return (
      <div className="flex h-[2.5rem] w-fit items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#27FEFF]  to-[#FF31FF] px-[0.25rem] shadow-[10px_10px_20px_0_rgba(0,0,0,0.6)]">
        <div className="flex h-[2.125rem] w-fit items-center justify-center rounded-[1.25rem] bg-[#18181B] px-[1.5rem] py-[0.1875rem]">
          <button onClick={() => onChangeSelected("")}>
            <p className="text-[2rem] text-white">x</p>
            {/* s3에서 x svg icon 가져오기 */}
          </button>
          <p className="text-[1.5rem] font-semibold leading-none text-white">
            {label}
          </p>
        </div>
      </div>
    );
  else
    return (
      <button
        onClick={() => onChangeSelected(label)}
        className="flex h-[2.5rem] w-fit items-center justify-center rounded-[1.25rem] bg-[#52525B] px-[1.875rem]  py-[0.375rem] shadow-[10px_10px_20px_0_rgba(0,0,0,0.6)]"
      >
        <p className="text-[1.5rem] font-normal text-white">{label}</p>
      </button>
    );
}
