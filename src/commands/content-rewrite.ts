export default {
  command: "ai-content content-rewrite",
  description: "Rewrite content with refreshed tone",
  async action(args) {
    console.log("[AI] Running content-rewrite with args:", args);
    const text = args.join(" ").trim();
    if (!text) {
      console.log("[AI] Please supply the passage you want rewritten.");
      return;
    }
    const rewritten = text
      .replace(/\bimportant\b/gi, "critical")
      .replace(/\bchanges\b/gi, "updates")
      .replace(/\bthank you\b/gi, "much appreciated");
    console.log('[AI] Rewritten text:', rewritten);
    console.log('[AI] IDE hint: Compare original vs rewritten in a split view.');
  }
};
