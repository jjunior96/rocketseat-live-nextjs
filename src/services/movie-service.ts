import { Movie } from "@/app/types/movies"

export const MovieService = {
  async getAll(searchTerm = "avengers"): Promise<Movie[]> {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`, {
      next: {
        revalidate: 60 // Cache for 1 minute
      }
    })
    
    const data = await response.json()
    return data.Search || []
  }
}