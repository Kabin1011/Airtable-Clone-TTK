import { NextResponse } from "next/server";
import { db } from "~/server/db";

// Simple health check endpoint to keep database active
export async function GET() {
  try {
    // Perform a lightweight query to keep Supabase active
    await db.$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Database connection failed" },
      { status: 500 }
    );
  }
}
