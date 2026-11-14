export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 */
  avatar: string;
  links: LinkItem[];
};

// 보여주기용 더미 값입니다. 실제 내용과 사진으로 나중에 바꿔 주세요.
export const profile: Profile = {
  name: "창균",
  bio: "AI 초심자\nF1 Oracle Redbull Racing FAN",
  avatar: "/avatar-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/username" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/username" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
