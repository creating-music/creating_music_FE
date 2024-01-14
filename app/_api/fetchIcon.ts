export const fetchIcon = async (iconUrl: string) => {
  const res = await fetch(iconUrl);
  if (!res.ok) throw new Error("Error occured while fetching icon");
  const icon = await res.text();

  return icon;
};
