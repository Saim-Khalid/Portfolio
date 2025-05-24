
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar, ExternalLink, Users } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Scalable AI Systems: A Microservices Approach",
      journal: "Journal of Software Architecture",
      type: "Research Paper",
      date: "2023",
      authors: ["John Doe", "Jane Smith", "Alex Johnson"],
      abstract: "This paper presents a novel approach to building scalable AI systems using microservices architecture, demonstrating improved performance and maintainability.",
      url: "#",
      citations: 24
    },
    {
      title: "Modern Frontend Development with React and TypeScript",
      journal: "Tech Today Magazine",
      type: "Article",
      date: "2023",
      authors: ["John Doe"],
      abstract: "A comprehensive guide to building modern web applications with React and TypeScript, covering best practices and performance optimization techniques.",
      url: "#",
      citations: 12
    },
    {
      title: "Machine Learning in Production: Lessons Learned",
      journal: "AI Engineering Quarterly",
      type: "Case Study",
      date: "2022",
      authors: ["John Doe", "Sarah Wilson"],
      abstract: "An in-depth analysis of challenges and solutions encountered while deploying machine learning models in production environments.",
      url: "#",
      citations: 18
    },
    {
      title: "Cloud-Native Development Patterns",
      journal: "DevOps International",
      type: "Research Paper",
      date: "2022",
      authors: ["John Doe", "Mike Chen", "Lisa Brown"],
      abstract: "Exploring design patterns and best practices for developing cloud-native applications with a focus on scalability and resilience.",
      url: "#",
      citations: 31
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            <BookOpen className="w-6 h-6 text-primary" />
            Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research papers, articles, and case studies contributing to the software engineering and AI communities.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="project-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="project-card-header">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                    <CardDescription className="text-primary font-medium mb-1">
                      {pub.journal}
                    </CardDescription>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded-full text-xs">
                        {pub.type}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {pub.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {pub.citations} citations
                      </div>
                    </div>
                  </div>
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                </div>
              </CardHeader>
              
              <CardContent className="project-card-body">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Authors:</h4>
                  <p className="text-sm">{pub.authors.join(', ')}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Abstract:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                </div>
              </CardContent>
              
              <div className="project-card-footer">
                <a 
                  href={pub.url}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Read Publication
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
