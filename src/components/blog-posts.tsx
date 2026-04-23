import { Link } from '@tanstack/react-router'

import { type Post } from 'content-collections'

export default function BlogPosts({
  title,
  posts,
}: {
  title: string
  posts: Post[]
}) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <div className="mb-6 pb-3 border-b-2 border-orange-400">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Tips & tutorial terbaru untuk pemula — gratis, tanpa modal
          </p>
        </div>

        <div className="space-y-6">
          {sorted.map((post) => (
            <Link
              to={`/posts/${post.slug}`}
              key={post._meta.path}
              className="block"
            >
              <article className="bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all p-5">
                <div className="flex items-start gap-4">
                  {post.image && (
                    <img
                      src={`/${post.image}`}
                      alt={post.title}
                      className="w-24 h-20 object-cover rounded flex-shrink-0 bg-gray-100"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.categories.map((cat) => (
                        <Link
                          key={cat}
                          to={`/category/${cat.toLowerCase()}`}
                          className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full hover:bg-orange-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-orange-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 className="font-bold text-gray-700 border-b border-orange-300 pb-2 mb-3 text-sm uppercase tracking-wide">
            Tentang Blog
          </h3>
          <p className="text-sm text-gray-600">
            Panduan lengkap cara garap crypto airdrop dari nol, tanpa modal,
            untuk pemula Indonesia. Update rutin setiap minggu.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 className="font-bold text-gray-700 border-b border-orange-300 pb-2 mb-3 text-sm uppercase tracking-wide">
            Kategori
          </h3>
          <ul className="space-y-1 text-sm">
            {['Tutorial', 'Strategi', 'Tools', 'Dompet', 'Testnet'].map(
              (cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat.toLowerCase()}`}
                    className="text-orange-600 hover:text-orange-800 hover:underline"
                  >
                    {cat}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg border border-orange-200 p-4">
          <h3 className="font-bold text-orange-700 text-sm mb-2">
            ⚠️ Disclaimer
          </h3>
          <p className="text-xs text-orange-600">
            Konten di blog ini bersifat edukatif. Crypto memiliki risiko tinggi.
            Lakukan riset mandiri sebelum berpartisipasi.
          </p>
        </div>
      </aside>
    </div>
  )
}
