# APPNEURAL AI Content Plugin

## Project Overview

This plugin delivers AI-powered content generation tools for the Appneural platform. It helps users create, rewrite, paraphrase, and optimize content for blogs, articles, social media, and more.

## Benefits

- Rapidly generate high-quality content
- Automate rewriting and paraphrasing
- Optimize for SEO and engagement
- Integrate with other plugins for advanced workflows

## Installation

```bash
npm install @appneural/cli-plugin-ai-content
```

## Available Commands (using anx tools)

| Command | Description |
| --- | --- |
| ai-content blog | Generate a three-section blog post with tone control |
| ai-content article | Produce a short article with headline, summary, and subheadings |
| ai-content rewrite | Rewrite text with refreshed vocabulary and structure |
| ai-content paraphrase | Paraphrase sentences with varied wording and connectors |
| ai-content summarize | Emit short, medium, and long summaries of a passage |
| ai-content expand | Elaborate on input text with detail, examples, and transitions |
| ai-content caption-instagram | Create an Instagram caption with emojis and hashtags |
| ai-content caption-linkedin | Craft a professional LinkedIn caption with CTA |
| ai-content tweet | Draft three tweet variations under 280 characters |
| ai-content yt-title | Offer five high-CTR YouTube title options |
| ai-content yt-description | Build a YouTube description with hook, bullets, timestamps, and CTA |
| ai-content seo-keywords | Suggest keywords, LSI terms, long-tail phrases, and structure hints |
| ai-content faq | Generate 5–10 FAQs with answers for a topic |
| ai-content outline | Draft a content outline with sections, sub-points, and a CTA |

## Example Usage

```sh
# Generate a blog post
appneural tools ai-content blog --topic "User onboarding" --tone friendly

# Produce an article
appneural tools ai-content article --headline "Rethinking remote collaboration"

# Rewrite text
appneural tools ai-content rewrite --text "We need to improve our rituals." --style "polished"

# Paraphrase sentence
appneural tools ai-content paraphrase --text "Lean on data to tell a better story."

# Summarize passage
appneural tools ai-content summarize --text "Extensive product notes go here..."

# Expand text
appneural tools ai-content expand --text "Explain why experimentation matters."

# Instagram caption
appneural tools ai-content caption-instagram --topic "Team wins" --mood upbeat

# LinkedIn caption
appneural tools ai-content caption-linkedin --topic "Quarterly updates"

# Tweet variations
appneural tools ai-content tweet --idea "Celebrate small progress"

# YouTube title options
appneural tools ai-content yt-title --topic "Systemizing creativity"

# YouTube description
appneural tools ai-content yt-description --topic "Designing for empathy"

# SEO keywords
appneural tools ai-content seo-keywords --topic "Remote team rituals"

# FAQs
appneural tools ai-content faq --topic "New collaboration protocol"

# Content outline
appneural tools ai-content outline --topic "Building trust remotely"
```

---
For more details, see the documentation or contact the maintainer.
