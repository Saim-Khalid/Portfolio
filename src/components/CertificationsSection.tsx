import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS, Coursera, DeepLearning.AI",
      date: "2024",
      description: "Gained hands-on experience in generative AI through AWS-led training focused on research and real-world applications.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/P52CZRTBTAV3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Introduction to on-device AI",
      issuer: "DeepLearning.AI",
      date: "2024",
      description: "Deployed AI models on Edge devices and smartphones. Learned model coversion, quantization, and how to modify for deployment on diverse devices.",
      verifyUrl: "https://learn.deeplearning.ai/accomplishments/bcaa8cae-ab1e-445b-92e8-ac7c5666e212?usp=sharing"
    },
    {
      title: "Machine Learning Operations (MLOps): Getting Started",
      issuer: "Google Cloud, Coursera",
      date: "2023",
      description: "Acquired skills in implementing effective MLOps using core technologies, CI/CD practices, and Google Cloud for reliable training and inference workflows.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/JG337LUP7SAB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM, Coursera",
      date: "2021",
      description: "Mastered Python for data science, using core concepts, APIs, and libraries like Pandas, NumPy, and Beautiful Soup.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/SZLXVR8YHB4R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <Award size={24} className="text-primary" />
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="project-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="project-card-header p-0 px-4 py-4">
                <CardTitle className="text-lg leading-tight break-words hyphens-auto text-left">{cert.title}</CardTitle>
                <CardDescription className="text-primary font-medium text-left">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="project-card-body p-0 px-4 py-5">
                <p className="text-muted-foreground mb-4 text-left text-justify">{cert.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>
              </CardContent>
              
              <div className="project-card-footer">
                <a 
                  href={cert.verifyUrl}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Verify Credential
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
