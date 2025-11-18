export default {
  command: "ai-content content-outline",
  description: "Produce a structured outline for new content",
  async action(args) {
    console.log("[AI] Running content-outline with args:", args);
    const theme = args.join(" ").trim() || "creative strategy";
    const outline = [
      { heading: "Introduction", detail: `Introduce why ${theme} deserves attention.` },
      { heading: "Problem", detail: "Describe the current challenge or friction point." },
      { heading: "Solution", detail: "Walk through actionable steps or principles." },
      { heading: "Examples", detail: "Showcase cases where this approach helped." },
      { heading: "Conclusion", detail: "Wrap up with a call-to-action and next steps." }
    ];
    outline.forEach((section) => console.log(`[AI] Section: ${section.heading} -> ${section.detail}`));
    console.log('[AI] IDE hint: Turn each entry into heading + supporting sentences.');
  }
};
