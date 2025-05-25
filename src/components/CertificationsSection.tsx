
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS, Coursera, DeepLearning.AI",
      date: "2024",
      credentialId: "TF-DEV-2022-004",
      description: "Gained hands-on experience in generative AI through AWS-led training focused on research and real-world applications.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/P52CZRTBTAV3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Introduction to on-device AI",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "GCP-PCA-2023-002",
      description: "Deployed AI models on Edge devices and smartphones. Learned model coversion, quantization, and how to modify for deployment on diverse devices.",
      verifyUrl: "https://learn.deeplearning.ai/accomplishments/bcaa8cae-ab1e-445b-92e8-ac7c5666e212?usp=sharing"
    },
    {
      title: "Machine Learning Operations (MLOps): Getting Started",
      issuer: "Google Cloud, Coursera",
      date: "2023",
      credentialId: "CKA-2022-003",
      description: "Acquired skills in implementing effective MLOps using core technologies, CI/CD practices, and Google Cloud for reliable training and inference workflows.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/JG337LUP7SAB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM, Coursera",
      date: "2021",
      credentialId: "TF-DEV-2022-004",
      description: "Mastered Python for data science, using core concepts, APIs, and libraries like Pandas, NumPy, and Beautiful Soup.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/SZLXVR8YHB4R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise in various technologies and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="project-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="project-card-header">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <Award className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              
              <CardContent className="project-card-body">
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">ID:</span>
                    <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                      {cert.credentialId}
                    </code>
                  </div>
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
