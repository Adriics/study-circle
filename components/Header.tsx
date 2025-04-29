import ProfileButton from "./ProfileButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full px-6 py-4 border-b flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/logo_StudyCircle.png" alt="logo" width={80} height={80} />
      </div>

      <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
        StudyCircle
      </h1>

      <ProfileButton />
    </header>
  );
}
