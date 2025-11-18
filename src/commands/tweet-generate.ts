export default {
  command: "ai-content tweet-generate",
  description: "Generate a short tweet with punchy hook",
  async action(args) {
    console.log("[AI] Running tweet-generate with args:", args);
    const topic = args.join(" ").trim() || "productivity";
    const tweet = `🚀 ${topic.charAt(0).toUpperCase() + topic.slice(1)} tip: focus 25 minutes, then celebrate the pause. #buildinpublic`;
    console.log('[AI] Tweet:', tweet);
    console.log('[AI] IDE hint: Keep total characters under 280 and avoid trailing spaces.');
  }
};
