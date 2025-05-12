'use client';

import { useEffect, useState } from 'react';
import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { Movie } from '../types/movies';

const clientSideIssues = [
  'Potential CORS issues with some APIs',
  'API key exposed in client-side code',
  'Additional client-side network requests',
  'Visible loading states',
];

export default function ClientSidePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=avengers&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error || 'Failed to fetch movies');
        }
      } catch (error) {
        console.log(error);
        setError(
          'Error fetching movies: This demonstrates potential CORS issues when fetching directly from client-side!'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Client-side Data Fetching</h1>

      <TopicsList
        title="Traditional React approach using useEffect and useState. Issues to note:"
        topics={clientSideIssues}
      />

      {isLoading ? (
        <div>Loading movies...</div>
      ) : error ? (
        <div className="text-red-500 p-4 border border-red-200 rounded-lg bg-red-50">{error}</div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}
