import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Basic auth endpoint for now
  return NextResponse.json({ message: 'Auth endpoint ready' })
}
