import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { MovieService } from '@/services/movie-service';

const serverBenefits = [
  'Data is fetched on the server',
  'No loading state needed (server wait)',
  'Better SEO (data is included in initial HTML)',
  'Automatic data caching',
];

export default async function ServerSidePage() {
  const movies = await MovieService.getAll({
    options: {
      cache: 'force-cache',
    }
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server-side Rendering</h1>

      <TopicsList
        title="Next.js App Router server components approach. Benefits:"
        topics={serverBenefits}
      />

      <MovieGrid movies={movies} />
    </div>
  );
}
