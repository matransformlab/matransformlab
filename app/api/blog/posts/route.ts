import { NextResponse } from 'next/server'

export async function GET() {
  const posts = [
    {
      slug: 'sovereign-identity',
      title: 'The Sovereign Identity Framework',
      excerpt: 'Learn how to build an unshakeable personal identity in the digital age',
      publishedAt: '2024-01-15',
      author: 'Mahmoud Ahmed',
      readingTime: '12 min',
      tags: ['sovereignty', 'identity', 'framework']
    }
  ]
  
  return NextResponse.json(posts)
}
