import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, categories, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Kennisbank — Tips & inzichten voor ondernemers",
  description:
    "Praktische tips over websites, webshops, SEO en digitale groei voor ondernemers. Geschreven door Daan van WebsUp.",
};

export default function KennisbankPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFA500]/30 bg-[#FFA500]/10 text-[#FFCC66] text-xs font-medium mb-6">
            📚 Kennisbank
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tips & inzichten voor{" "}
            <span className="gradient-text">ondernemers</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Praktische artikelen over websites, webshops, SEO en online groeien.
            Zonder bullshit, geschreven vanuit de praktijk.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-white/5 sticky top-[64px] sm:top-[80px] z-40 bg-[#09101D]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <span
                key={cat}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-400 hover:border-white/30 hover:text-white cursor-pointer transition-all duration-200"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <div className="mb-10">
            <Link
              href={`/kennisbank/${blogPosts[0].slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-[#13213C]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="h-64 md:h-auto bg-gradient-to-br from-[#FFA500]/15 to-[#13213C] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">📝</div>
                  <span className="px-3 py-1 bg-[#FFA500]/20 border border-[#FFA500]/30 rounded-full text-[#FFCC66] text-xs font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#FFA500]/10 border border-[#FFA500]/20 rounded-full text-[#FFCC66] text-xs">
                    Uitgelicht
                  </span>
                  <span className="text-gray-500 text-xs">{blogPosts[0].readTime} min lezen</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-[#FFCC66] transition-colors mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{formatDate(blogPosts[0].date)}</span>
                  <span className="text-[#FFA500] text-sm group-hover:translate-x-1 transition-transform">Lees meer →</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/kennisbank/${post.slug}`}
                className="group bg-[#13213C]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-[#13213C] to-[#0A0D31] flex items-center justify-center border-b border-white/5">
                  <div className="text-4xl">
                    {post.category === "SEO" ? "🔍" : post.category === "Webshop" ? "🛒" : post.category === "Onderhoud" ? "🛡️" : "💡"}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#09101D] border border-white/10 text-gray-400 text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-600 text-xs">{post.readTime} min</span>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#FFCC66] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                    <span className="text-[#FFA500] text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#13213C]/20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Wil je zulke tips maandelijks ontvangen?
          </h2>
          <p className="text-gray-400 mb-6">
            Ik stuur af en toe praktische tips voor ondernemers die beter
            gevonden willen worden online. Geen spam.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200">
            Inschrijven →
          </Link>
        </div>
      </section>
    </div>
  );
}
