export type LinkItem = {
  id: string;
  /** 카드 제목 앞에 붙는 이모지 */
  emoji: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 또는 외부 이미지 URL */
  avatar: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "창균",
  bio: "AI 초심자\nF1 Oracle Redbull Racing FAN",
  avatar: "/RB22.png",
  links: [
    { id: "github", emoji: "🐙", title: "깃허브", url: "https://github.com/kcg10012" },
    { id: "blog", emoji: "✍️", title: "블로그", url: "https://blog.naver.com/benotnormal" },
    { id: "email", emoji: "✉️", title: "이메일", url: "mailto:kcg10012@gmail.com" },
    { id: "instagram", emoji: "📸", title: "인스타그램", url: "https://www.instagram.com/ggyun_kim/" },
  ],
};
