import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-14px_rgb(150_80_40/0.45),0_2px_6px_rgb(150_80_40/0.08)] ring-1 ring-white/80">
        <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
          <Image
            src={avatar}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            className="object-cover"
            unoptimized={avatar.endsWith(".svg") || avatar.startsWith("http")}
            priority
          />
        </div>
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 whitespace-pre-line text-[0.938rem] leading-relaxed text-foreground/60">{bio}</p>
    </header>
  );
}
