import { NextRequest, NextResponse } from "next/server";
import { getEvents } from "../scraper";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const events = await getEvents();
    
    // Sort events by start date descending (newest first)
    const sortedEvents = [...events].sort(
      (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
    );

    const host = request.headers.get("host") || "leadthewaywithai.com";
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    const selfUrl = `${protocol}://${host}/api/events/rss`;

    const channelLink = "https://home.mlops.community/public/events";
    const channelTitle = "Coding Agents Lunch & Learn — Event Feed";
    const channelDescription =
      "MLOps Community sessions hosted or co-hosted by Leo Walker focusing on the practical engineering of coding agents and model context protocol integrations.";

    const itemsXml = sortedEvents
      .map((e) => {
        const eventLink = `https://home.mlops.community/public/events/${e.slug}`;
        const pubDate = new Date(e.startedAt).toUTCString();
        const localTimeStr = new Date(e.startedAt).toLocaleString("en-US", {
          timeZone: e.timezone,
          dateStyle: "medium",
          timeStyle: "short",
        });
        const description = `Co-hosted by Leo Walker. Topic: ${e.name}. Start Time: ${localTimeStr} (${e.timezone}). Location: ${
          e.isOnline ? "Online (Virtual)" : "In Person"
        }.`;
        
        const escapedTitle = escapeXml(e.name);
        const escapedDesc = escapeXml(description);

        return `
    <item>
      <title>${escapedTitle}</title>
      <link>${eventLink}</link>
      <description>${escapedDesc}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${eventLink}</guid>
    </item>`;
      })
      .join("");

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${channelTitle}</title>
    <link>${channelLink}</link>
    <description>${channelDescription}</description>
    <language>en-us</language>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

    return new NextResponse(rssXml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
      },
    });
  } catch (error: any) {
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8" ?>
<error>
  <message>${escapeXml(error.message || "Failed to generate RSS feed")}</message>
</error>`,
      {
        status: 500,
        headers: { "Content-Type": "application/xml; charset=utf-8" },
      }
    );
  }
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
