import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/** MONGODB_URI가 없으면 null을 반환합니다(로컬 개발 시 DB 없이도 동작). */
export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  // 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 캐시
  if (!globalThis._mongoClientPromise) {
    globalThis._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalThis._mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ linkId: string; count: number }>("clicks");
}
