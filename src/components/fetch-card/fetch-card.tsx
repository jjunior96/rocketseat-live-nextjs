import Link from 'next/link'

interface FetchCardProps {
  number: string
  title: string
  description: string
  href: string
}

export function FetchCard({ number, title, description, href }: FetchCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-purple-950/30 backdrop-blur-sm 
      transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20
      hover:bg-purple-900/40"
    >
      <h2 className="text-xl font-bold mb-2 text-purple-50 group-hover:text-purple-300 
        transition-colors duration-300"
      >
        {number}. {title}
      </h2>
      <p className="mb-4 text-purple-300/70">
        {description}
      </p>
      <Link 
        href={href}
        className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300
          hover:bg-purple-500/30 transition-colors duration-300 font-medium"
      >
        Ver Exemplo
      </Link>
    </div>
  )
}