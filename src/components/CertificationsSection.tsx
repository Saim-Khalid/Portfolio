
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
      verifyUrl: "#"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PCA-2023-002",
      description: "Advanced certification in designing and managing cloud architecture solutions.",
      verifyUrl: "#"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-003",
      description: "Hands-on certification for Kubernetes cluster administration and management.",
      verifyUrl: "#"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2022",
      credentialId: "TF-DEV-2022-004",
      description: "Certification demonstrating proficiency in machine learning with TensorFlow.",
      verifyUrl: "#"
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
