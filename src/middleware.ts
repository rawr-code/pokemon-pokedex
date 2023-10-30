import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPages = ['/login']

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('userToken')?.value.length
  const words = request.url.split('/')
  const isAuthPage = !!words.find(w => {
    if (authPages.includes('/' + w.toLowerCase())) {
      return true
    }
  })

  if (!isLoggedIn) {
    if (isAuthPage) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoggedIn) {
    if (isAuthPage) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/', '/login'],
}
