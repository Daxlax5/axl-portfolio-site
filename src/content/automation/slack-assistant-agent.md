---
title: Slack assistant agent
tools:
  - n8n
  - Slack
  - Claude Sonnet
  - database rows for state
image: ../../assets/workflows/slack-agent.webp
alt: "n8n executions view of a Slack agent: message and reaction triggers route to a message agent or a reply agent backed by Claude Sonnet, with approve, expire and reaction tracking steps"
order: 4
---
A Slack bot that answers messages and follows threads. Reactions act as controls for approving, expiring, or flagging a wrong answer, and every message is tracked in a database so the agent keeps context across replies. Routing runs in around 50 ms and LLM turns take a few seconds.
