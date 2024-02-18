import { ButtonProps } from "@mui/base";

interface CustomButtonProps extends ButtonProps {
  label: string;
  filled: boolean;
  size: "sm" | "md";
}

export default function Button({
  label,
  filled,
  size,
  ...props
}: CustomButtonProps) {
  return (
    <button
      type="button"
      className={
        "flex items-center justify-center rounded-[1.25rem] border-[0.125rem] " +
        (size === "sm" ? "h-[2rem] w-[6.625rem] " : "h-[2.75rem] w-[9rem] ") +
        (props.disabled
          ? "border-none bg-u-gray-300"
          : filled
          ? "border-none bg-white"
          : "border-white bg-transparent")
      }
      {...props}
    >
      <p
        className={
          "font-semibold leading-none " +
          (size === "sm" ? "text-[1rem] " : "text-[1.5rem] ") +
          (props.disabled
            ? "text-u-gray-400"
            : filled
            ? "text-u-gray-400"
            : "text-white")
        }
      >
        {label}
      </p>
    </button>
  );
}
