"use client";

import Link from "next/link";
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowLeft, Calendar, Clock, Share2, User, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from "@/lib/blog-posts";
import AdUnit from "@/components/AdUnit";

interface BlogPostClientProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
}

const BlogPostClient = ({ post, relatedPosts }: BlogPostClientProps) => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
            </div>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 w-full h-1 bg-primary z-50 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ scaleX: 0 }} // This would normally be connected to scroll position
            />

            <article className="container max-w-4xl mx-auto px-4 pt-24 pb-20 relative z-10">

                {/* Breadcrumb & Back */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
                >
                    <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                    <span className="truncate max-w-[200px] text-foreground font-medium">{post.title}</span>
                </motion.div>

                {/* Header Section */}
                <header className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/10 px-3 py-1"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-foreground text-balance">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground border-y border-border/40 py-6 backdrop-blur-sm bg-white/5 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                                    {post.author[0]}
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-foreground">{post.author}</div>
                                    <div className="text-xs">Author</div>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/40 hidden sm:block" />
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-white/5">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-foreground">
                                        {post.publishDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <div className="text-xs">Published</div>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-border/40 hidden sm:block" />
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-white/5">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-foreground">{post.readTime}</div>
                                    <div className="text-xs">Read Time</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-video relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                    <img
                        src={post.imageUrl || `https://placehold.co/1200x630/1a1a1a/ffffff?text=${encodeURIComponent(post.title)}`}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <GlassCard className="p-8 md:p-12 bg-background/40 backdrop-blur-xl border-white/5">
                        <div className="prose prose-xl dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-white/10
              prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:backdrop-blur-md prose-pre:p-6 prose-pre:rounded-xl
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-medium
              prose-strong:text-white prose-strong:font-bold
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-sm
              prose-li:text-gray-300 prose-li:text-lg"
                        >
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* AdSense Unit - After Content */}
                <div className="mt-12 flex justify-center">
                    <AdUnit className="w-full max-w-[728px] min-h-[90px] bg-white/5 rounded-xl flex items-center justify-center" />
                </div>

                {/* Share Section */}
                <div className="mt-16 py-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg">Share this article</h3>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors">
                            <User className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Author Bio */}
                <GlassCard className="mt-12 p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
                        {post.author[0]}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {post.authorBio}
                        </p>
                    </div>
                </GlassCard>
            </article>

            {/* Related Articles */}
            <section className="container max-w-6xl mx-auto px-4 mt-24 mb-24 relative z-10">
                <h2 className="text-3xl font-bold mb-12 text-center">Read Next</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {relatedPosts.map((relatedPost, index) => (
                        <motion.div
                            key={relatedPost.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${relatedPost.slug}`} className="h-full block">
                                <GlassCard className="group h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 p-0 overflow-hidden">
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors z-10" />
                                        <img
                                            src={relatedPost.imageUrl || `https://placehold.co/800x450/1a1a1a/ffffff?text=${encodeURIComponent(relatedPost.title)}`}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="text-sm text-primary font-medium mb-3 flex items-center gap-2">
                                            <Badge variant="outline" className="border-primary/20 bg-primary/5">{relatedPost.category}</Badge>
                                            <span className="text-muted-foreground">•</span>
                                            <span className="text-muted-foreground">{relatedPost.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPostClient;
