---
title: mWell Hospital Information System
subtitle: Alliance Software, billing and cashiering, now in UAT
tools:
  - Laravel
  - PHP
  - Angular
  - TypeScript
  - PostgreSQL
  - Jasper Reports
  - Docker
  - Playwright
order: 1
---
Finance module work for a hospital platform. Built HMO and PhilHealth statement of account generation from scratch, added seller identity details (TIN, branch code, address, VAT status) across invoices, receipts, statements, and charge slips, implemented immutable transaction logging with a PostgreSQL trigger so posted payments can't be altered, and wrote a Playwright end to end suite for the cashiering flows using the Page Object Model.
