import { NextRequest, NextResponse } from "next/server";
import { getGridFSBucket } from "@/lib/gridfs";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const bucket = await getGridFSBucket();

    const bytes = Buffer.from(await file.arrayBuffer());

    const uploadStream = bucket.openUploadStream(file.name, {
      metadata: {
        contentType: file.type,
      },
    });

    await new Promise<void>((resolve, reject) => {
      uploadStream.end(bytes);

      uploadStream.on("finish", () => resolve());

      uploadStream.on("error", reject);
    });

    return NextResponse.json({
      success: true,
      fileId: uploadStream.id.toString(),

      // 👇 Frontend ko image URL bhi bhejo
      url: `/api/upload/${uploadStream.id.toString()}`,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}