
import React from 'react';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <Mail size={24} className="text-primary" />
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, opportunities in AI development,
              or potential collaborations. Feel free to reach out using your preferred method below.
            </p>

            <div className="space-y-6">
              <a 
                href="aidevsaim@gmail.com" 
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-2 rounded-md text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">aidevsaim@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://github.com/Saim-Khalid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-2 rounded-md text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-muted-foreground">github.com/Saim-Khalid</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/saim-khalid-aa762a136" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-2 rounded-md text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/saimkhalid</p>
                </div>
              </a>

              <a 
                href="https://calendly.com/aidevsaim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-2 rounded-md text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="font-medium">Schedule a Call</p>
                  <p className="text-muted-foreground">calendly.com/aidevsaim</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
