import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import BlogPostClient from "./BlogPostClient";
import { Metadata } from "next";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: `${post.title} | UntrainedModel Blog`,
        description: post.metaDescription,
        keywords: post.keywords,
        openGraph: {
            type: "article",
            publishedTime: post.publishDate.toISOString(),
            authors: [post.author],
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id)
        .slice(0, 2);

    return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
