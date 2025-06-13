// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
  try {
    const authanticationParameters = getUploadAuthParams({
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
    });

    return Response.json({
      authanticationParameters,
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    });
  } catch (error) {
    console.error("Error generating upload auth parameters:", error);
    return Response.json(
      { error: "Authentication for imagekit failed" },
      { status: 500 }
    );
  }
}
