# Saim Khalid — AI Engineer Portfolio

Personal portfolio of **Saim Khalid**, an AI Engineer building LLM agents, RAG systems and computer vision in production.

**Live site:** [aidevsaim.com](https://aidevsaim.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-saim--khalid--ai-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saim-khalid-ai)
[![GitHub](https://img.shields.io/badge/GitHub-Saim--Khalid-181717?logo=github&logoColor=white)](https://github.com/Saim-Khalid)
[![Email](https://img.shields.io/badge/Email-aidevsaim%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:aidevsaim@gmail.com)

## About

AI Engineer with 4+ years of experience shipping Generative AI and Computer Vision systems:

- **Edge (Rinova AI)** — LangGraph-based agents that automate healthcare revenue-cycle management across multiple EHR platforms (HIPAA compliant, AWS ECS).
- **CarBee** — LLM lead assistant, Text-to-MongoDB agent, two-tower video recommender and serverless AWS pipelines.
- **iOPTIME** — fine-tuned LLMs, RAG, OCR/NER and edge computer vision (YOLO, TFLite, CoreML).

**Core stack:** Python, PyTorch, LLMs, RAG, AI Agents (LangGraph, LangChain, MCP), OpenAI, Gemini, LangSmith, AWS, Azure, FastAPI, Docker, MongoDB, Vector Databases, YOLO.

## Site sections

About · Experience · Skills · Projects · Certifications · Publications · Blog · Contact, plus a downloadable CV (`public/cv.pdf`).

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com/)

## Run locally

Requires Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
git clone https://github.com/Saim-Khalid/Portfolio.git
cd Portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Updating content

| What | Where |
| --- | --- |
| Experience | `src/components/ExperienceSection.tsx` |
| Skills | `src/components/SkillsSection.tsx` |
| Projects | `src/components/ProjectsSection.tsx` |
| Certifications | `src/components/CertificationsSection.tsx` |
| Profile photo | `public/profile.jpg` |
| CV | `public/cv.pdf` |

Pushing to `main` triggers a new Vercel deployment.
