import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// 와이어프레임(linknamu.png) 구성:
// 상단 — 원형 프로필 사진, 이름, 한 줄 소개
// 하단 — 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-12 sm:py-16">
      <ProfileHeader name={profile.name} bio={profile.bio} avatar={profile.avatar} />

      <ul className="mt-10 flex flex-col gap-6">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
