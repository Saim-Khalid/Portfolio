
import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building RAG Applications That Actually Work",
    excerpt: "Learn how to enhance Large Language Models with effective Retrieval-Augmented Generation approaches.",
    date: "Apr 15, 2025",
    readTime: "8 min read",
    category: "LLMs",
    link: "#"
  },
  {
    title: "Optimizing Transformer Models for Production",
    excerpt: "Practical strategies for reducing inference latency and memory usage in transformer-based models.",
    date: "Mar 22, 2025",
    readTime: "6 min read",
    category: "ML Engineering",
    link: "#"
  },
  {
    title: "Ethics in AI: Beyond Compliance",
    excerpt: "Why responsible AI development needs to go further than just following regulatory guidelines.",
    date: "Feb 9, 2025",
    readTime: "10 min read",
    category: "AI Ethics",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <BookOpen size={24} className="text-primary" />
          Recent Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <a 
              key={index} 
              href={post.link}
              className="block bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium">
                    {post.category}
                  </span>
                  <div className="text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium">
                  Read article <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="font-mono flex gap-2 items-center">
            <BookOpen size={18} />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
