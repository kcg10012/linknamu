"use client";

type Props = {
  id: string;
  emoji: string;
  title: string;
  url: string;
  /** 현재 클릭 수 */
  count: number;
  /** 클릭 직후 화면 숫자를 올리기 위한 콜백 */
  onClicked?: () => void;
};

function recordClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  // 페이지를 떠나도 요청이 전송되도록 sendBeacon 우선 사용
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ id, emoji, title, url, count, onClicked }: Props) {
  // mailto: 링크는 새 탭 대신 메일 앱으로 바로 연결
  const isWeb = url.startsWith("http");

  return (
    <a
      href={url}
      {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={() => {
        recordClick(id);
        onClicked?.();
      }}
      className="group grid w-full grid-cols-[3.5rem_1fr_3.5rem] items-center rounded-2xl border border-white/70 bg-white/45 px-4 py-4 shadow-[0_6px_24px_-12px_rgb(150_80_40/0.25)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgb(150_80_40/0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
    >
      <span aria-hidden className="text-xl leading-none">
        {emoji}
      </span>
      <span className="text-center text-[0.97rem] font-semibold">{title}</span>
      <span className="justify-self-end text-xs tabular-nums text-foreground/45 transition-colors duration-200 group-hover:text-foreground/60">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
