export default {
  command: "ai-content summarize",
  description: "Summarize longer content into a concise blurb",
  async action(args) {
    console.log("[AI] Running content-summarize with args:", args);
    const passage = args.join(" ").trim();
    if (!passage) {
      console.log("[AI] Provide content to summarize.");
      return;
    }
    const sentences = passage.split(/[.!?]+/).map((sentence) => sentence.trim()).filter(Boolean);
    const summary = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '.');
    console.log('[AI] Summary:', summary);
    console.log('[AI] IDE hint: Use this summary as a lead paragraph in drafts.');
  }
};
