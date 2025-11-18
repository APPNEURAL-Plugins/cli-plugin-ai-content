export default {
  command: "ai-content caption-instagram",
  description: "Generate an Instagram-ready caption with emojis and hashtags",
  async action(args) {
    console.log("[AI] Running caption-instagram with args:", args);
    const topic = args.join(" ").trim() || "New post";
    const emojiLine = "✨🔥🌿";
    const caption = `${emojiLine} ${topic} is where passion meets momentum. Tap to explore more!`;
    const hashtags = ["#dailyinspo", `#${topic.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`, "#contentcreator", "#motivation"].join(' ');
    console.log('[AI] Caption:', caption);
    console.log('[AI] Hashtags:', hashtags);
    console.log('[AI] IDE hint: Paste the caption in Instagram drafts to preview formatting.');
  }
};
