import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'healthy',
    service: 'MA Transform Lab API',
    timestamp: new Date().toISOString()
  })
}
