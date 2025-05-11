import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Next.js Data Fetching Approaches</h1>
      
      <div className="grid gap-6">
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">1. Client-side Data Fetching</h2>
          <p className="mb-4 text-gray-600">Traditional React approach using useEffect and useState. Good for highly dynamic data that needs constant updates.</p>
          <Link 
            href="/client-side" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Example
          </Link>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">2. Server-side Rendering</h2>
          <p className="mb-4 text-gray-600">Next.js server components approach. Perfect for dynamic data that needs SEO.</p>
          <Link 
            href="/server-side" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Example
          </Link>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">3. Static Site Generation</h2>
          <p className="mb-4 text-gray-600">Build-time data fetching with optional revalidation. Best for static or rarely changing data.</p>
          <Link 
            href="/static" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Example
          </Link>
        </div>
      </div>
    </div>
  )
}
