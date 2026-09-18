---
title: Instagram outreach
status: In production
tools:
  - n8n
  - GPT-4.1 mini
  - Gemini
  - Perplexity
  - structured output
  - Google Sheets
image: ../../assets/workflows/ig-outreach.webp
alt: "n8n canvas for the Instagram outreach workflow that scores leads and sends personalized DMs"
order: 2
---
The second half of the pipeline. An AI qualifier scores each commenter as a likely beginner, weighting the comment itself because bios are often empty. A copywriting agent then writes a soft, curious opener that references the specific comment, with banned words enforced, and outreach goes out on a schedule so the account stays within safe limits.
