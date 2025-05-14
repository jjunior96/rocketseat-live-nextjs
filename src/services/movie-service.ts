import { Movie } from "@/app/types/movies"

interface FetchOptions {
  revalidate?: number | false
  tags?: string[]
  cache?: 'force-cache' | 'no-store'
}

interface GetAllParams {
  searchTerm?: string
  options?: FetchOptions
}

export const MovieService = {
  async getAll({ 
    searchTerm = "avengers",
    options = { revalidate: 60 }
  }: GetAllParams = {}): Promise<Movie[]> {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`,
      {
        next: {
          revalidate: options.revalidate,
          tags: options.tags
        },
        cache: options.cache
      }
    )
    
    const data = await response.json()
    return data.Search || []
  }
}