"use client";

type Props = {
  id: string;
  title: string;
  url: string;
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

export default function LinkCard({ id, title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(id)}
      className="block w-full rounded-xl border-2 border-purple-200 bg-white/70 px-5 py-4 text-center text-lg shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-200/70 active:translate-y-0"
    >
      {title}
    </a>
  );
}
