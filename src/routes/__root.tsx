import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Airdrop2026 - Cara Garap Airdrop Dari Nol Tanpa Modal',
      },
      {
        name: 'description',
        content: 'Panduan lengkap cara garap airdrop crypto dari nol tanpa modal. Tips, strategi, dan tutorial terbaru 2026.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gray-50">
        <header className="bg-orange-500 text-white shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="text-2xl">🪂</span>
              <div>
                <div className="text-xl font-bold tracking-tight">Airdrop2026</div>
                <div className="text-xs text-orange-100">Garap Airdrop Dari Nol Tanpa Modal</div>
              </div>
            </a>
            <nav className="hidden sm:flex gap-4 text-sm font-medium">
              <a href="/" className="hover:text-orange-200 transition-colors">Home</a>
              <a href="/category/tutorial" className="hover:text-orange-200 transition-colors">Tutorial</a>
              <a href="/category/strategi" className="hover:text-orange-200 transition-colors">Strategi</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        <footer className="mt-12 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © 2026 Airdrop2026 · Panduan Crypto Airdrop Terlengkap
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
