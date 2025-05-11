/* eslint-disable @typescript-eslint/no-explicit-any */
async function getRepositories() {
  const response = await fetch('https://api.github.com/users/rocketseat/repos', {
    next: {
      revalidate: 3600 // 1 hour
    }
  })
  
  return response.json()
}

export default async function StaticPage() {
  const repositories = await getRepositories()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Static Site Generation</h1>
      <div className="mb-4 text-gray-600">
        Next.js static generation approach. Benefits:
        <ul className="list-disc ml-6 mt-2">
          <li>Pages are generated at build time</li>
          <li>Fastest possible page loads</li>
          <li>Perfect for SEO</li>
          <li>Great for content that doesn't change often</li>
          <li>Can be revalidated with ISR (Incremental Static Regeneration)</li>
        </ul>
      </div>

      <div className="grid gap-4">
        {repositories.map((repo: any) => (
          <div key={repo.id} className="border p-4 rounded-lg">
            <h2 className="font-bold">{repo.name}</h2>
            <p className="text-gray-600">{repo.description}</p>
            <a 
              href={repo.html_url}
              className="text-blue-500 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}