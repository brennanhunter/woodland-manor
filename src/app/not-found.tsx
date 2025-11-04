import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Woodland Manor Mobile Home Association',
  description: 'The page you are looking for does not exist. Return to Woodland Manor Mobile Home Association homepage.',
  robots: 'noindex,nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-woodland-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="woodland-glass-card p-8">
          <h1 className="text-6xl font-bold text-woodland-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
          </p>
          <div className="space-y-4">
            <Link 
              href="/"
              className="block bg-woodland-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-woodland-secondary transition-colors"
            >
              Return Home
            </Link>
            <div className="text-sm text-gray-500">
              <p>Looking for something specific? Try these popular pages:</p>
              <div className="mt-2 space-x-4">
                <Link href="/board" className="text-woodland-primary hover:underline">Board</Link>
                <Link href="/contact" className="text-woodland-primary hover:underline">Contact</Link>
                <Link href="/faq" className="text-woodland-primary hover:underline">FAQ&apos;s</Link>
                <Link href="/downloads" className="text-woodland-primary hover:underline">Downloads</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
