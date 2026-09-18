---
title: Instagram lead scraper
status: In production
tools:
  - n8n
  - Apify
  - Tally
  - JavaScript
  - Google Sheets
  - sub workflows
image: ../../assets/workflows/ig-scraper.webp
alt: "n8n canvas: Tally form intake, three Apify scraping stages for posts, comments and commenter profiles, each writing to Google Sheets, then handing off to a DM scoring engine"
order: 1
---
A form submission kicks off three scraping stages through Apify: the post itself, its comments, and each commenter's profile. A code step joins comments to profiles by username, a filter drops private accounts and spam or emoji only comments, and batching with timed waits keeps the scraper inside Apify's memory limits.
