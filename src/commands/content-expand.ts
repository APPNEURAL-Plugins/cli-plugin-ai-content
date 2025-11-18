export default {
  command: "ai-content content-expand",
  description: "Expand short input into longer narrative",
  async action(args) {
    console.log("[AI] Running content-expand with args:", args);
    const shortText = args.join(" ").trim();
    if (!shortText) {
      console.log("[AI] Send an idea to expand.");
      return;
    }
    const expanded = `${shortText}. This idea connects with experience, adds examples, and invites reflection. Consider ${shortText.toLowerCase()} as a launching point for deeper exploration.`;
    console.log('[AI] Expanded text:', expanded);
    console.log('[AI] IDE hint: Break this into separate paragraphs when copying to your editor.');
  }
};
