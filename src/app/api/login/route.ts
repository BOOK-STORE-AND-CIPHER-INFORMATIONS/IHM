// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // Remplace ça par une vraie logique de vérification (BD, etc.)
  if (email === 'admin@example.com' && password === 'admin123') {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  );
}
