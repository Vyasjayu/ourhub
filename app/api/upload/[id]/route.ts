import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { getGridFSBucket } from "@/lib/gridfs";

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return new Response("Invalid File ID", { status: 400 });
    }

    const bucket = await getGridFSBucket();

    const files = await bucket.find({
      _id: new ObjectId(id),
    }).toArray();

    if (!files.length) {
      return new Response("File Not Found", { status: 404 });
    }

    const file = files[0];

    const stream = bucket.openDownloadStream(new ObjectId(id));

    return new Response(stream as any, {
      headers: {
        "Content-Type":
          (file.metadata as { contentType?: string })?.contentType ??
          "application/octet-stream",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Server Error", { status: 500 });
  }
}