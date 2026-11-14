import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const validIds = new Set(profile.links.map((l) => l.id));

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  let linkId: unknown;
  try {
    ({ linkId } = await request.json());
  } catch {
    return Response.json({ error: "invalid body" }, { status: 400 });
  }
  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return Response.json({ error: "unknown linkId" }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ ok: false, reason: "MONGODB_URI not set" });
  }

  await clicks.updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });
  return Response.json({ ok: true });
}

// 링크별 클릭 수 조회
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) return Response.json({});
  const docs = await clicks.find({}).toArray();
  return Response.json(
    Object.fromEntries(docs.map((d) => [d.linkId, d.count])),
  );
}
