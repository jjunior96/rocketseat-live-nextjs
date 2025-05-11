'use client'

import { useEffect, useState } from 'react'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export default function ClientSidePage() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('https://api.github.com/users/rocketseat/repos')
        const data = await response.json()
        setRepositories(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Client-side Data Fetching</h1>
      <div className="mb-4 text-gray-600">
        Traditional React approach using useEffect and useState. This method:
        <ul className="list-disc ml-6 mt-2">
          <li>Loads data after component mount</li>
          <li>Shows loading state to user</li>
          <li>Requires client-side JavaScript</li>
          <li>Not SEO friendly</li>
        </ul>
      </div>

      {isLoading ? (
        <div>Loading repositories...</div>
      ) : (
        <div className="grid gap-4">
          {repositories.map(repo => (
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
      )}
    </div>
  )
}