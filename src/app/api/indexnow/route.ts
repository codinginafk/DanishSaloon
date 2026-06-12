import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

/**
 * IndexNow API endpoint for search engines (Bing, Yandex, Seznam).
 * POST a URL to notify these engines of content changes.
 *
 * Usage:
 *   POST /api/indexnow
 *   Body: { url: "https://danishhanifhairlounge.com/page" }
 *
 * Or submit directly to https://api.indexnow.org/
 *   POST https://api.indexnow.org/indexnow
 *   Body: {
 *     host: "danishhanifhairlounge.com",
 *     key: "7d6e40cb593a8f12",
 *     keyLocation: "https://danishhanifhairlounge.com/7d6e40cb593a8f12.txt",
 *     urlList: ["https://danishhanifhairlounge.com/"]
 *   }
 */

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Missing or invalid 'url'" }, { status: 400 });
    }

    const hostname = new URL(siteConfig.url).hostname;
    const key = siteConfig.indexnowKey;
    const keyLocation = `${siteConfig.url}/${key}.txt`;

    const payload = {
      host: hostname,
      key,
      keyLocation,
      urlList: [url]
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json({ error: text }, { status: response.status });
    }

    return NextResponse.json({ success: true, submitted: url });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

/**
 * GET handler – returns the IndexNow key for verification.
 * Some search engines check this endpoint directly.
 */
export async function GET() {
  return NextResponse.json({ key: siteConfig.indexnowKey });
}
