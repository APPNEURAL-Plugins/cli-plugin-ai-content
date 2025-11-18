export default {
  command: "ai-content article-generate",
  description: "Produce a short article with key points and closing",
  async action(args) {
    console.log("[AI] Running article-generate with args:", args);
    const topic = args.join(" ").trim() || "trend analysis";
    const intro = `Article intro: ${topic} is reshaping the landscape of modern products.`;
    const keyPoints = [
      `Trend overview explaining why ${topic} matters`,
      "Challenges organizations face today",
      "Tools or mindsets that help teams adapt",
      "Evidence or data to support each assertion"
    ];
    const closing = `Summary: Keep ${topic} front-of-mind and iterate with measurable experiments.`;
    console.log('[AI] Intro:', intro);
    console.log('[AI] Key points:', keyPoints);
    console.log('[AI] Closing:', closing);
    console.log('[AI] IDE hint: Expand each key point into paragraphs for drafts.');
  }
};
