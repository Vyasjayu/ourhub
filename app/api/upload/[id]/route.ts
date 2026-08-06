import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { getGridFSBucket } from "@/lib/gridfs";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    // Next.js 16
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return new Response("Invalid File ID", {
        status: 400,
      });
    }

    const bucket = await getGridFSBucket();

    const files = await bucket
      .find({
        _id: new ObjectId(id),
      })
      .toArray();

    if (files.length === 0) {
      return new Response("File Not Found", {
        status: 404,
      });
    }

    const file = files[0];

    const downloadStream = bucket.openDownloadStream(
      new ObjectId(id)
    );

    const stream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => {
          controller.enqueue(chunk);
        });

        downloadStream.on("end", () => {
          controller.close();
        });

        downloadStream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type":
          (file.metadata as { contentType?: string })?.contentType ??
          "application/octet-stream",
        "Cache-Control":
          "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("GET FILE ERROR:", error);

    return new Response("Server Error", {
      status: 500,
    });
  }
}