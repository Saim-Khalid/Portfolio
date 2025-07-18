import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar, ExternalLink, Users } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Small Pests Detection in Field Crops Using Deep Learning Object Detection",
      journal: "Sustainability (MDPI)",
      type: "Research Paper",
      date: "2023",
      authors: ["Saim Khalid", "Hadi Mohsen Oqaibi", "Muhammad Aqib", "Yaser Hafeez"],
      abstract: "Deep learning algorithms, such as convolutional neural networks (CNNs), have been widely studied and applied in various fields including agriculture. Agriculture is the most important source of food and income in human life. In most countries, the backbone of the economy is based on agriculture. Pests are one of the major challenges in crop production worldwide. To reduce the overall production and economic loss from pests, advancement in computer vision and artificial intelligence may lead to early and small pest detection with greater accuracy and speed.",
      url: "https://www.mdpi.com/2071-1050/15/8/6815#metrics",
      citations: 54
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <BookOpen size={24} className="text-primary" />
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="project-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="project-card-header p-0 px-4 py-4">
                <CardTitle className="text-lg leading-tight break-words hyphens-auto mb-2 text-left">{pub.title}</CardTitle>
                <CardDescription className="text-primary font-medium mb-1 text-left">
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
              </CardHeader>
              
              <CardContent className="project-card-body p-0 px-4 py-5">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1 text-left">Authors:</h4>
                  <p className="text-sm text-left text-justify">{pub.authors.join(', ')}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1 text-left">Abstract:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left text-justify">{pub.abstract}</p>
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
