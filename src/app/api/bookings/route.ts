import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo (replace with DB in production)
const bookings: Array<{
  id: string;
  tailorId: string;
  name: string;
  phone: string;
  occasion: string;
  notes: string;
  createdAt: string;
}> = [];

export async function GET() {
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tailorId, name, phone, occasion, notes } = body;

    if (!tailorId || !name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const booking = {
      id: `bk_${Date.now()}`,
      tailorId,
      name,
      phone,
      occasion: occasion || "",
      notes: notes || "",
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
