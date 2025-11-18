export default {
  command: "ai-content blog-generate",
  description: "Generate a blog outline, intro, and body points",
  async action(args) {
    console.log("[AI] Running blog-generate with args:", args);
    const topic = args.join(" ").trim() || "Your next idea";
    const outline = [
      `1. Hook readers with why ${topic} matters now`,
      `2. Share a personal story or statistic related to ${topic}`,
      `3. Provide a step-by-step mini-guide`,
      `4. Offer ways to get started or resources`,
      `5. Close with a call-to-action`
    ];
    const intro = `In this post, we explore ${topic} by breaking the journey into clear, actionable steps.`;
    const body = `Body: ${outline.slice(1).join(' | ')}`;
    console.log('[AI] Outline:', outline);
    console.log('[AI] Intro:', intro);
    console.log('[AI] Body:', body);
    console.log('[AI] IDE hint: Use the outline as H2/H3 headings in your CMS.');
  }
};
