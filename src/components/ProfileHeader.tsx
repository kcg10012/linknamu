import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-purple-300/50 sm:h-44 sm:w-44">
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          fill
          sizes="176px"
          className="object-cover"
          unoptimized={avatar.endsWith(".svg")}
          priority
        />
      </div>
      <h1 className="mt-6 text-3xl tracking-wide">{name}</h1>
      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground/75">{bio}</p>
    </header>
  );
}
