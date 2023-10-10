import Wrapper, { WrapperProps } from "@/ui/Wrapper";

interface Props extends WrapperProps {}

export default function ContentsWrapper({ children }: Props) {
  return (
    <Wrapper className="mx-auto flex w-full max-w-[87.5rem]">
      {children}
    </Wrapper>
  );
}
