import { FetchCard } from '@/components/fetch-card/'

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-purple-950/5">
      <h1 className="text-4xl font-bold mb-8 text-purple-50 tracking-tight">
        Abordagens de Busca de Dados no Next.js
      </h1>
      
      <div className="grid gap-6 max-w-5xl">
        <FetchCard
          number="1"
          title="Busca de Dados Client-side"
          description="Abordagem tradicional do React usando useEffect e useState. Ideal para dados altamente dinâmicos que precisam de atualizações constantes."
          href="/client-side"
        />

        <FetchCard
          number="2"
          title="Server-side Rendering"
          description="Abordagem de componentes server-side do Next.js. Perfeita para dados dinâmicos que precisam de SEO."
          href="/server-side"
        />

        <FetchCard
          number="3"
          title="Geração Estática (Static Generation)"
          description="Busca de dados durante o build com revalidação opcional. Melhor para dados estáticos ou que raramente mudam."
          href="/static"
        />
      </div>
    </div>
  )
}
