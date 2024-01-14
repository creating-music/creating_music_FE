import Image from "next/image";
import Link from "next/link";

interface Props {
  banners: {
    id: number;
    link: string;
    imgSrc: string;
  }[];
}

export default function Banner({ banners }: Props) {
  return (
    <ol className="flex h-[41.875rem] w-full overflow-hidden">
      {banners.map((banner, i) => (
        // TODO: react uuid로 key 값 교체
        <li
          key={`banner-${i}`}
          className="relative h-[41.875rem] w-full min-w-full"
        >
          <Link href={banner.link}>
            <Image
              alt={`배너 ${banner.imgSrc}`}
              src={banner.imgSrc}
              fill
              sizes="100vw"
              className="overflow-scroll-gradient object-fill"
            />
          </Link>
        </li>
      ))}
    </ol>
  );
}
