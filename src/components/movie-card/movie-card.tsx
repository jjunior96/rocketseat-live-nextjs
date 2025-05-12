import Image from 'next/image';

type MovieCardProps = {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
};

export function MovieCard({ title, year, poster, imdbID }: MovieCardProps) {
  return (
    <div 
      key={imdbID} 
      className="group relative p-4 rounded-xl bg-purple-950/30 backdrop-blur-sm 
        transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20
        hover:bg-purple-900/40 hover:cursor-pointer"
    >
      <div className="space-y-2 mb-3">
        <h2 className="font-bold text-lg text-purple-50 group-hover:text-purple-300 
          transition-colors duration-300"
        >
          {title}
        </h2>
        <p className="text-purple-300/70 text-sm font-medium">
          Ano: {year}
        </p>
      </div>

      {poster !== 'N/A' && (
        <div className="relative overflow-hidden rounded-lg">
          <Image
            width={800}
            height={800}
            src={poster}
            alt={title}
            className="w-full h-auto rounded-lg transition-transform duration-500 
              group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      )}
    </div>
  );
}
