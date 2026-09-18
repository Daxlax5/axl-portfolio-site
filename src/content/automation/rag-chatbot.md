---
title: RAG chatbot
tools:
  - n8n
  - vector database
  - embeddings
  - OpenAI
image: ../../assets/workflows/rag-chatbot.webp
alt: "n8n canvas for a retrieval-augmented chatbot: document ingestion into a vector store and a chat trigger that retrieves context before answering"
order: 5
---
Ingests documents into a vector store, then answers questions from that knowledge base. It retrieves the relevant chunks per query so the model answers from the source material rather than from memory.
