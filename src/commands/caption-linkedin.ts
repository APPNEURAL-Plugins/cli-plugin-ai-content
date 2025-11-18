export default {
  command: "ai-content caption-linkedin",
  description: "Produce a LinkedIn-ready caption with professional tone",
  async action(args) {
    console.log("[AI] Running caption-linkedin with args:", args);
    const topic = args.join(" ").trim() || "current milestone";
    const caption = `Sharing insights from ${topic}: celebrate progress, call out collaborators, and ask the community for ideas.`;
    const cta = "Let me know what you're learning too.";
    console.log('[AI] Caption:', caption);
    console.log('[AI] CTA:', cta);
    console.log('[AI] IDE hint: Use LinkedIn formatting such as line breaks to improve readability.');
  }
};
