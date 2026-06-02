import { NextResponse } from "next/server";
import { getEvents } from "./scraper";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to load events" },
      { status: 500 }
    );
  }
}
