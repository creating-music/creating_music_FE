import Icon from "../../../_components/Icon";

interface ButtonProps {
  label: string;
  enabled: boolean;
  onClick: (e?: any) => void;
}

export default function SubmitButton(props: ButtonProps) {
  if (props.enabled) {
    return (
      <button
        onClick={props.onClick}
        className=" h-[2.5rem] w-fit items-center justify-center rounded-[1.25rem] border-[2px] border-[#FFF] bg-transparent px-[1.5rem] pb-[0.25rem] pt-[0.375rem]"
      >
        <p className="text-[1.5rem] font-semibold leading-none text-white">
          {props.label}
        </p>
      </button>
    );
  } else
    return (
      <button
        disabled
        className="h-[2.5rem] w-fit items-center justify-center rounded-[1.25rem] border-[2px] border-none bg-[#52525B] px-[1.5rem] pb-[0.25rem] pt-[0.375rem]"
      >
        <p className="text-[1.5rem] font-semibold leading-none text-[#27272A]">
          {props.label}
        </p>
      </button>
    );
}
