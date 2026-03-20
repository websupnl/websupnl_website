import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artikel niet gevonden" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13213C] to-[#09101D]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/kennisbank" className="hover:text-gray-300 transition-colors">Kennisbank</Link>
            <span>/</span>
            <span className="text-gray-400">{post.category}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#FFA500]/10 border border-[#FFA500]/20 text-[#FFCC66] text-xs font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime} minuten lezen</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFA500]/20 border border-[#FFA500]/30 flex items-center justify-center text-xs font-bold text-[#FFA500]">
                DK
              </div>
              <div>
                <p className="text-white text-sm font-medium">Daan Koolhaas</p>
                <p className="text-gray-500 text-xs">{formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <div className="bg-[#13213C]/40 border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-gray-400 text-sm italic">
                Dit artikel wordt binnenkort volledig gepubliceerd. Wil je alvast
                meer weten over dit onderwerp? Stuur me een berichtje via WhatsApp.
              </p>
            </div>
          </div>

          {/* Author box */}
          <div className="mt-12 p-6 bg-[#13213C]/40 border border-white/10 rounded-2xl flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFA500]/20 border border-[#FFA500]/30 flex items-center justify-center text-sm font-bold text-[#FFA500] shrink-0">
              DK
            </div>
            <div>
              <p className="text-white font-semibold">Daan Koolhaas</p>
              <p className="text-gray-400 text-sm mb-3">Oprichter van WebsUp — ik help ondernemers in Friesland met professionele websites en webshops.</p>
              <Link href="/over-ons" className="text-[#FFA500] text-sm hover:text-[#FFCC66] transition-colors">
                Meer over mij →
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 bg-gradient-to-br from-[#FFA500]/10 to-transparent border border-[#FFA500]/20 rounded-2xl text-center">
            <h3 className="text-white font-bold mb-2">Hulp nodig bij jouw website?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Vraag gratis een concept aan — geen verplichtingen, binnen 48 uur een eerste schets.
            </p>
            <Link href="/gratis-website-concept" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200">
              Gratis concept aanvragen →
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Meer artikelen</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/kennisbank/${p.slug}`}
                className="group bg-[#13213C]/40 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300"
              >
                <span className="px-2 py-0.5 rounded-full bg-[#09101D] border border-white/10 text-gray-400 text-xs mb-3 inline-block">
                  {p.category}
                </span>
                <h3 className="text-white font-semibold text-sm group-hover:text-[#FFCC66] transition-colors line-clamp-2 mb-2">
                  {p.title}
                </h3>
                <span className="text-[#FFA500] text-xs">Lees artikel →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
