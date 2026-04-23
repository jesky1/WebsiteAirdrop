import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'

import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  return (
    <div className="flex gap-8">
      <div className="flex-1 min-w-0">
        <div className="mb-4">
          <Link to="/" className="text-sm text-orange-500 hover:underline">
            ← Kembali ke Home
          </Link>
        </div>

        <article className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-wrap gap-1 mb-3">
            {post.categories.map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat.toLowerCase()}`}
                className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full hover:bg-orange-200"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-4">{post.date}</p>
          <p className="text-gray-600 italic mb-6 text-sm border-l-4 border-orange-300 pl-3">
            {post.summary}
          </p>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: marked(post.content) as string }}
          />
        </article>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 className="font-bold text-gray-700 border-b border-orange-300 pb-2 mb-3 text-sm uppercase tracking-wide">
            Artikel Lainnya
          </h3>
          <ul className="space-y-2">
            {allPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 5)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/posts/${p.slug}`}
                    className="text-sm text-orange-600 hover:text-orange-800 hover:underline leading-snug block"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
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
