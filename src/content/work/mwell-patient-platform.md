---
title: mWell patient platform
subtitle: Alliance Software, insurance partner integration
tools:
  - NestJS
  - Nx
  - TypeScript
  - MongoDB
  - Keycloak
  - Docker
  - pnpm
  - Insomnia
order: 3
---
Inbound HMO letter of guarantee APIs for an insurance partner, built in a NestJS monorepo with Keycloak client credentials auth. An environment gated mock adapter let the team build and test every response path before the partner's credentials were provisioned, and schema or ownership gaps were flagged to the right team instead of patched quietly.
