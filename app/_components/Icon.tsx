import { HTMLAttributes } from "react";
import ServerIcon from "./icon/ServerIcon";
import ClientIcon from "./icon/ClientIcon";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
}

const BASE_URL = "https://creating-music.s3.ap-northeast-2.amazonaws.com/icons";

const iconMatcher = {
  airplay: `${BASE_URL}/airplay.svg`,
  download: `${BASE_URL}/download.svg`,
  edit: `${BASE_URL}/edit-2.svg`,
  equalizer2: `${BASE_URL}/equalizer-2.svg`,
  equalizer: `${BASE_URL}/equalizer.svg`,
  eyeoff: `${BASE_URL}/eye-off.svg`,
  eyeon: `${BASE_URL}/eye.svg`,
  heart: `${BASE_URL}/heart.svg`,
  music: `${BASE_URL}/music.svg`,
  pause: `${BASE_URL}/pause.svg`,
  play: `${BASE_URL}/play.svg`,
  share: `${BASE_URL}/share-2.svg`,
  trash: `${BASE_URL}/trash-2.svg`,
  search: `${BASE_URL}/search.svg`,
  avatar: `${BASE_URL}/avatar.svg`,
};

export type IconName = keyof typeof iconMatcher;

export default async function Icon({ name, ...props }: IconProps) {
  const iconUrl = iconMatcher[name];
  const isServer = typeof window === "undefined";

  return isServer ? (
    <ServerIcon iconUrl={iconUrl} {...props} />
  ) : (
    <ClientIcon iconUrl={iconUrl} {...props} />
  );
}
