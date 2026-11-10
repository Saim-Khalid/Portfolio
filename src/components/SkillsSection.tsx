import React from 'react';
import SectionHeading from './fx/SectionHeading';

const skillGroups = [
  {
    path: 'genai',
    title: 'GenAI & Agents',
    skills: ['LLMs', 'Agentic AI', 'LangGraph', 'LangChain', 'RAG', 'OpenAI', 'Gemini', 'Claude API', 'MCP', 'Prompt Engineering', 'LLMOps'],
  },
  {
    path: 'ml',
    title: 'Machine Learning',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Computer Vision', 'Natural Language Processing', 'Deep Learning', 'Explainable AI', 'CUDA', 'TFLite'],
  },
  {
    path: 'cloud',
    title: 'Cloud & MLOps',
    skills: ['AWS', 'SageMaker', 'Lambda', 'Elastic Beanstalk', 'AWS ECS/ECR', 'Azure', 'Docker', 'MLflow', 'CI/CD', 'FastAPI'],
  },
  {
    path: 'automation',
    title: 'Automation & Data',
    skills: ['SeleniumBase', 'Playwright', 'RabbitMQ', 'Automation', 'MongoDB', 'Vector Databases', 'Vector Search', 'SQL', 'NoSQL'],
  },
  {
    path: 'domain',
    title: 'Healthcare & Tooling',
    skills: ['EHR Integration', 'Healthcare RCM', 'HIPAA Compliance', 'Pytest', 'Cursor', 'Claude Code', 'AI-Assisted Development'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="aurora left-1/3 top-10 h-72 w-72 bg-lilac" />
      <div className="container relative mx-auto px-4">
        <SectionHeading index="03" title="Skills & Stack" kicker="skills" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, g) => (
            <div
              key={group.path}
              className={`reveal tech-card overflow-hidden ${g === 0 ? 'lg:col-span-2' : ''}`}
              style={{ '--d': `${g * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between border-b bg-secondary/40 px-4 py-2.5 font-mono text-xs">
                <span className="text-muted-foreground">
                  <span className="text-primary">~/skills/</span>
                  {group.path}
                </span>
                <span className="font-pixel text-[10px] text-muted-foreground">{String(group.skills.length).padStart(2, '0')}</span>
              </div>
              <div className="p-5">
                <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
