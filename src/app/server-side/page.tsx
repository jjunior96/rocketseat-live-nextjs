async function getRepositories() {
  const response = await fetch('https://api.github.com/users/rocketseat/repos', {
    next: {
      revalidate: 60 // 60 seconds
    }
  })
  
  return response.json()
}

export default async function ServerSidePage() {
  const repositories = await getRepositories()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server-side Rendering</h1>
      <div className="mb-4 text-gray-600">
        Next.js App Router server components approach. Benefits:
        <ul className="list-disc ml-6 mt-2">
          <li>Data is fetched on the server</li>
          <li>No loading state needed (server wait)</li>
          <li>Better SEO (data is included in initial HTML)</li>
          <li>Automatic data caching</li>
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