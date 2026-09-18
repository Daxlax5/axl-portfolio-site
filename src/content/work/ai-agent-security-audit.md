---
title: AI agent security audit and migration
subtitle: Client contract, real estate group in the US, ongoing
tools:
  - Ubuntu
  - Linux
  - Tailscale
  - SSH
  - Composio
  - n8n
  - Supabase
  - security review
order: 4
---
Audited a self hosted AI agent and every tool connection it could reach, including an OAuth gateway nobody had reviewed and credential handling that needed tightening. Migrated the agent from a Windows laptop to a headless Ubuntu mini PC with private access over Tailscale, SSH, and remote desktop, rotated exposed credentials under written approval, and designed tiered permissions for every connected app.
