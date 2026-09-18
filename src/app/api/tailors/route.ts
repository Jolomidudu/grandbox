import { NextResponse } from "next/server";
import { tailors } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ tailors });
}
