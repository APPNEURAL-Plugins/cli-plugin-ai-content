export default {
  command: "ai-content seo-keywords",
  description: "Extract SEO keywords from a brief description",
  async action(args) {
    console.log("[AI] Running seo-keywords-ai with args:", args);
    const text = args.join(" ").trim();
    if (!text) {
      console.log("[AI] Provide a sentence or paragraph to analyze.");
      return;
    }
    const words = text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word, index) => text.length > 2 && word && index < 8);
    const keywords = Array.from(new Set(words)).slice(0, 5);
    console.log('[AI] Keywords:', keywords);
    console.log('[AI] IDE hint: Use these keywords in titles, meta descriptions, and headers.');
  }
};
