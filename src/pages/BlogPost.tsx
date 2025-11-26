import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blog-posts';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Tag, Share2, User, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout title="Post Not Found" description="The requested blog post could not be found.">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Get related posts (excluding current one)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <Layout
      title={`${post.title} | UntrainedModel Blog`}
      description={post.metaDescription}
      keywords={post.keywords.join(', ')}
    >
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishDate.toISOString()} />
        <meta property="article:author" content={post.author} />
      </Helmet>

      <div className="min-h-screen bg-background pt-24 pb-20">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
          <div className="h-full bg-primary origin-left scale-x-0 animate-scroll-progress" />
        </div>

        <article className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb & Back */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Link to="/blog" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="truncate max-w-[200px]">{post.title}</span>
          </div>

          {/* Header Section */}
          <header className="mb-12 text-center animate-fade-in-up">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground border-y border-border/40 py-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {post.author[0]}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">{post.author}</div>
                  <div className="text-xs">Author</div>
                </div>
              </div>
              <div className="w-px h-8 bg-border/40 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">
                    {post.publishDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs">Published</div>
                </div>
              </div>
              <div className="w-px h-8 bg-border/40 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">{post.readTime}</div>
                  <div className="text-xs">Read Time</div>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image (Placeholder if none) */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-border/20 aspect-video relative group animate-fade-in-up delay-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src={post.imageUrl || `https://placehold.co/1200x630/1a1a1a/ffffff?text=${encodeURIComponent(post.title)}`}
              alt={post.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 animate-fade-in-up delay-200">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Share Section */}
          <div className="mt-16 py-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-semibold text-lg">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors">
                <Share2 className="w-4 h-4" />
              </Button>
              {/* Add real share links here */}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 rounded-3xl bg-muted/30 border border-border/50 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
              {post.author[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.authorBio}
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="container max-w-6xl mx-auto px-4 mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Read Next</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  {/* Placeholder for related post image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                    {relatedPost.title[0]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{relatedPost.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;
