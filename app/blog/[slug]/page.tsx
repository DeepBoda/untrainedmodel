import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { AnimatedText, AnimatedContainer } from '@/components/ui/AnimatedText';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - UntrainedModel.xyz',
    };
  }

  return {
    title: `${post.title} - UntrainedModel.xyz`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-cyan-400 hover:text-pink-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </AnimatedText>

        <AnimatedContainer delay={0.1}>
          <div className="mb-8">
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime} min read
            </span>
            <button className="flex items-center hover:text-cyan-400 transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={0.2}>
          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={0.3}>
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={0.4}>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-pink-500/30 p-6">
              <h3 className="text-xl font-bold mb-4 text-pink-400">
                About the Author
              </h3>
              <p className="text-gray-300">
                {post.author} is a contributor to UntrainedModel.xyz and specializes in creating beautiful chaos through words. 
                When not writing satirical tech content, they can be found questioning the nature of reality and training AI models to be confidently wrong.
              </p>
            </div>
          </div>
        </AnimatedContainer>

        {/* Related Posts */}
        <AnimatedContainer delay={0.5}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              More Hallucinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllBlogPosts()
                .filter(p => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </AnimatedContainer>
      </article>
    </div>
  );
}