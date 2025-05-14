import { MovieCard } from "../movie-card/movie-card"

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Poster: string
}

interface MovieGridProps {
  movies: Movie[]
}

export function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          imdbID={movie.imdbID}
        />
      ))}
    </div>
  )
}