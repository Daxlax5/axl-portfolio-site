---
title: Lead qualification with human approval
status: In production
tools:
  - n8n
  - GoHighLevel
  - Apollo
  - Claude
  - Slack
  - structured output parsing
image: ../../assets/workflows/ghl-leads.webp
alt: "n8n canvas: GoHighLevel tag poll, input validation, Apollo enrichment, four parallel scoring workers with fallbacks, a merge and LLM chain, then a Slack approve-or-decline step that updates GoHighLevel"
order: 3
---
Polls GoHighLevel for tagged contacts, validates and enriches them through Apollo, then fans out to four scoring workers (ICP fit, intent, engagement, stakeholder role) that each have their own fallback path. Scores merge into a structured LLM verdict, and anything above threshold is posted to Slack for a one click approve or decline that writes back to the CRM.
