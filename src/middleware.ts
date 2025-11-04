import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Common redirects from old site structure
  const redirects: Record<string, string> = {
    // Old URLs that might exist in search results
    '/home': '/',
    '/index.html': '/',
    '/index.php': '/',
    '/about.html': '/about',
    '/about.php': '/about',
    '/board.html': '/board',
    '/board.php': '/board',
    '/faq.html': '/faq',
    '/faq.php': '/faq',
    '/faqs': '/faq',
    '/contact.html': '/contact',
    '/contact.php': '/contact',
    '/downloads.html': '/downloads',
    '/downloads.php': '/downloads',
    '/documents': '/downloads',
    '/calendar.html': '/calendar',
    '/calendar.php': '/calendar',
    '/events': '/calendar',
    '/map.html': '/map',
    '/map.php': '/map',
    '/maps': '/map',
    '/location': '/map',
    // Common typos or variations
    '/woodland-manor': '/',
    '/woodland_manor': '/',
    '/woodlandmanor': '/',
    '/hoa': '/',
    '/association': '/',
  }

  // Check if current path needs redirect
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301)
  }

  // Redirect trailing slashes (except root)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
