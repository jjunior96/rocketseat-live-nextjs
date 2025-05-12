import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-purple-950/5">
      <h1 className="text-4xl font-bold mb-8 text-purple-50 tracking-tight">
        Abordagens de Busca de Dados no Next.js
      </h1>
      
      <div className="grid gap-6 max-w-5xl">
        <div className="group relative p-6 rounded-xl bg-purple-950/30 backdrop-blur-sm 
          transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20
          hover:bg-purple-900/40"
        >
          <h2 className="text-xl font-bold mb-2 text-purple-50 group-hover:text-purple-300 
            transition-colors duration-300"
          >
            1. Busca de Dados Client-side
          </h2>
          <p className="mb-4 text-purple-300/70">
            Abordagem tradicional do React usando useEffect e useState. Ideal para dados altamente dinâmicos que precisam de atualizações constantes.
          </p>
          <Link 
            href="/client-side" 
            className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300
              hover:bg-purple-500/30 transition-colors duration-300 font-medium"
          >
            Ver Exemplo
          </Link>
        </div>

        <div className="group relative p-6 rounded-xl bg-purple-950/30 backdrop-blur-sm 
          transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20
          hover:bg-purple-900/40"
        >
          <h2 className="text-xl font-bold mb-2 text-purple-50 group-hover:text-purple-300 
            transition-colors duration-300"
          >
            2. Server-side Rendering
          </h2>
          <p className="mb-4 text-purple-300/70">
            Abordagem de componentes server-side do Next.js. Perfeita para dados dinâmicos que precisam de SEO.
          </p>
          <Link 
            href="/server-side" 
            className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300
              hover:bg-purple-500/30 transition-colors duration-300 font-medium"
          >
            Ver Exemplo
          </Link>
        </div>

        <div className="group relative p-6 rounded-xl bg-purple-950/30 backdrop-blur-sm 
          transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20
          hover:bg-purple-900/40"
        >
          <h2 className="text-xl font-bold mb-2 text-purple-50 group-hover:text-purple-300 
            transition-colors duration-300"
          >
            3. Geração Estática (Static Generation)
          </h2>
          <p className="mb-4 text-purple-300/70">
            Busca de dados durante o build com revalidação opcional. Melhor para dados estáticos ou que raramente mudam.
          </p>
          <Link 
            href="/static" 
            className="inline-block px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300
              hover:bg-purple-500/30 transition-colors duration-300 font-medium"
          >
            Ver Exemplo
          </Link>
        </div>
      </div>
    </div>
  )
}
