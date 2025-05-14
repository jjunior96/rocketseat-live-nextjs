import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { MovieService } from '@/services/movie-service';

const staticBenefits = [
  'Pages are generated at build time',
  'Fastest possible page loads',
  'Perfect for SEO',
  "Great for content that doesn't change often",
  'Can be revalidated with ISR (Incremental Static Regeneration)',
];

export default async function StaticPage() {
  const movies = await MovieService.getAll({
    options: {
      revalidate: 60,
    }
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Static Site Generation</h1>

      <TopicsList title="Next.js static generation approach. Benefits:" topics={staticBenefits} />

      <MovieGrid movies={movies} />
    </div>
  );
}
