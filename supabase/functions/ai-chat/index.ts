
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Portfolio knowledge base for RAG
const portfolioKnowledgeBase = `
SAIM KHALID - AI/ML ENGINEER PORTFOLIO

ABOUT:
- Passionate AI Engineer with 2+ years of experience building machine learning systems
- Expertise in Natural Language Processing, Computer Vision, and Generative AI
- Worked across healthcare, IoT, and technology sectors
- Believes in creating responsible, ethical, and human-centered AI solutions

CORE FOCUS AREAS:
- Natural Language Processing
- Large Language Models
- Computer Vision
- AI Systems Design
- AI Automation
- Chatbots

TECHNICAL SKILLS:
Languages: Python (90%), MLOps (80%), MLflow (75%)
AI & ML: PyTorch (95%), TensorFlow (80%), Hugging Face (90%), LangChain (85%), OpenAI (90%), LLMs (90%)
Data & Cloud: Pandas (95%), AWS (80%), Docker (85%), Kubernetes (75%), GCP (70%), CI/CD (80%), SQL (80%), Dialogflow (75%), RASA (90%)
Web & API: FastAPI (90%), Django (80%), Streamlit (95%), Gradio (85%)
Other Tools: OpenCV (80%), NumPy (95%), Matplotlib (85%), Git (90%), Linux (80%), CUDA (75%)

PROJECTS:
1. IntelliChat - Advanced conversational AI system with multi-modal capabilities, using custom-trained LLM with RAG architecture
   Tech Stack: PyTorch, Hugging Face, LangChain, FastAPI, React, Docker

2. VisualDetect - Real-time object detection and tracking system optimized for edge devices
   Tech Stack: TensorFlow, YOLO, OpenCV, Streamlit, Edge ML, Raspberry Pi

3. MLOps Pipeline - End-to-end MLOps pipeline for automating training, evaluation, deployment, and monitoring
   Tech Stack: Kubernetes, Docker, MLflow, GitHub Actions, Prometheus, Python

4. SentimentX - Fine-tuned NLP model for multi-language sentiment analysis
   Tech Stack: Hugging Face, BERT, Scikit-learn, Flask, React, AWS

CERTIFICATIONS:
- Generative AI with Large Language Models (AWS, Coursera, DeepLearning.AI) - 2024
- Introduction to on-device AI (DeepLearning.AI) - 2024
- Machine Learning Operations (MLOps): Getting Started (Google Cloud, Coursera) - 2023
- Python for Data Science, AI & Development (IBM, Coursera) - 2021

PUBLICATIONS:
- "Small Pests Detection in Field Crops Using Deep Learning Object Detection" (Sustainability MDPI, 2023)
  Authors: Saim Khalid, Hadi Mohsen Oqaibi, Muhammad Aqib, Yaser Hafeez
  54 citations

BLOG TOPICS:
- Building RAG Applications That Actually Work
- Optimizing Transformer Models for Production
- Ethics in AI: Beyond Compliance

CONTACT:
Email: saim.khalid.ai@email.com
`;

function findRelevantContext(query: string, knowledgeBase: string): string {
  const queryLower = query.toLowerCase();
  const sections = knowledgeBase.split('\n\n');
  
  // Keywords mapping to sections
  const keywords = {
    'skills': ['TECHNICAL SKILLS', 'CORE FOCUS AREAS'],
    'projects': ['PROJECTS'],
    'experience': ['ABOUT', 'PROJECTS'],
    'certifications': ['CERTIFICATIONS'],
    'publications': ['PUBLICATIONS'],
    'education': ['CERTIFICATIONS'],
    'contact': ['CONTACT'],
    'blog': ['BLOG TOPICS'],
    'python': ['TECHNICAL SKILLS'],
    'pytorch': ['TECHNICAL SKILLS'],
    'ai': ['ABOUT', 'CORE FOCUS AREAS', 'TECHNICAL SKILLS'],
    'ml': ['ABOUT', 'CORE FOCUS AREAS', 'TECHNICAL SKILLS'],
    'nlp': ['CORE FOCUS AREAS', 'PROJECTS'],
    'computer vision': ['CORE FOCUS AREAS', 'PROJECTS'],
    'chatbot': ['CORE FOCUS AREAS', 'PROJECTS'],
    'aws': ['TECHNICAL SKILLS'],
    'docker': ['TECHNICAL SKILLS'],
    'kubernetes': ['TECHNICAL SKILLS']
  };
  
  let relevantSections = new Set();
  
  // Find relevant sections based on keywords
  for (const [keyword, sectionNames] of Object.entries(keywords)) {
    if (queryLower.includes(keyword)) {
      sectionNames.forEach(section => relevantSections.add(section));
    }
  }
  
  // If no specific keywords found, include general info
  if (relevantSections.size === 0) {
    relevantSections.add('ABOUT');
    relevantSections.add('CORE FOCUS AREAS');
  }
  
  // Extract relevant sections
  let context = '';
  sections.forEach(section => {
    for (const relevantSection of relevantSections) {
      if (section.includes(relevantSection)) {
        context += section + '\n\n';
        break;
      }
    }
  });
  
  return context.trim();
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log('Received message:', message);

    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Get relevant context from knowledge base
    const relevantContext = findRelevantContext(message, portfolioKnowledgeBase);
    console.log('Relevant context found:', relevantContext.substring(0, 200) + '...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are Saim Khalid's AI assistant. Use the following context about Saim to answer questions accurately and professionally. Always base your responses on the provided context.

CONTEXT:
${relevantContext}

Instructions:
- Answer questions based solely on the provided context about Saim Khalid
- If asked about something not in the context, politely explain that you can only discuss Saim's professional background and experience
- Keep responses concise but informative
- Always maintain a professional, friendly tone
- If asked about specific projects, skills, or experience, reference the exact information from the context`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log('AI response generated successfully');
    
    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to process request' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
