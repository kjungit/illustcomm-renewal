import Image from "next/image";

export default function BlockLogo() {
  return (
    <Image
      src="/assets/illust-logo-black.png"
      alt="logo"
      width={200}
      height={50}
      priority={true}
    />
  );
}
