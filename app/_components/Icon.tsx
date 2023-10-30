import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
}

const BASE_URL = "https://creating-music.s3.ap-northeast-2.amazonaws.com/icons";

const iconMatcher = {
  airplay: `${BASE_URL}/airplay`,
};

export type IconName = keyof typeof iconMatcher;

export default async function Icon({ name, ...props }: IconProps) {
  const iconUrl = iconMatcher[name];
  const res = await fetch(iconUrl);
  if (!res.ok) throw new Error("Fetching icon failed.");

  const icon = await res.text();

  return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
