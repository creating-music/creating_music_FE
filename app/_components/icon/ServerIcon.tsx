import { fetchIcon } from "@/app/_api/fetchIcon";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  iconUrl: string;
}

export default async function ServerIcon({ iconUrl, ...props }: Props) {
  const icon = await fetchIcon(iconUrl);

  return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
