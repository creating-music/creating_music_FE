"use client";

import Choice from "./choice";
import { ChoiceType } from "../types";

interface MenuProps {
  title: string;
  list: ChoiceType[];
  selected: string;
  setSelected: (label: string) => void;
}
export default function Menu(props: MenuProps) {
  return (
    <section className="mx-auto mt-[5rem] w-full max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 pl-[6.25rem] pr-0">
      <p className="h-[6.25rem] py-[1.625rem] text-[2.5rem] font-bold  text-white">
        {props.title}
      </p>
      <hr className="mb-[0.25rem] h-0 w-full border-[2px] border-[#5A5A5A] " />
      <div className="flex h-[6.25rem] flex-row gap-[0.625rem] py-[1.875rem] pt-[1.625rem]">
        {props.list.map((item) => (
          <Choice
            key={item.label}
            label={item.label}
            selected={props.selected}
            setSelected={props.setSelected}
          />
        ))}
      </div>
    </section>
  );
}
