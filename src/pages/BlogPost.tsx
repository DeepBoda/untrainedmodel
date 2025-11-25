import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import blogPosts from "@/lib/blog-posts";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={post.title}
      description={post.metaDescription || post.excerpt}
      keywords={post.keywords?.join(', ')}
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-24">
        <article className="section-container max-w-4xl mx-auto py-12">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishDate.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Engagement Section */}
          <div className="mt-12 py-8 border-t border-b border-border space-y-8">
            {/* Share */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-semibold text-lg">Share this article:</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                >
                  Twitter
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-full bg-blue-700/10 text-blue-700 hover:bg-blue-700/20 transition-colors"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 transition-colors"
                >
                  Facebook
                </button>
              </div>
            </div>

            {/* Feedback */}
            <div className="text-center p-6 bg-muted/30 rounded-xl">
              <h3 className="font-semibold mb-4">Was this article helpful?</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="gap-2">
                  👍 Yes
                </Button>
                <Button variant="outline" className="gap-2">
                  👎 No
                </Button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary/5 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-muted-foreground mb-6">Get the latest AI insights delivered to your inbox weekly.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* Author Bio */}
          {post.authorBio && (
            <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">About the Author</h3>
              <p className="text-muted-foreground">{post.authorBio}</p>
            </div>
          )}

          {/* Related Posts */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts
                .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="apple-card group hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-4 text-sm text-primary">Read more →</div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
