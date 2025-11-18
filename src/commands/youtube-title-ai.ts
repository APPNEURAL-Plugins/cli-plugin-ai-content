export default {
  command: "ai-content youtube-title",
  description: "Create a click-worthy YouTube title",
  async action(args) {
    console.log("[AI] Running youtube-title-ai with args:", args);
    const topic = args.join(" ").trim() || "motivation";
    const titles = [
      `${topic} Secrets Every Creator Needs`,
      `How I Use ${topic} to Stay Ahead`,
      `Stop Doing This Before ${topic}`
    ];
    console.log('[AI] Title options:', titles);
    console.log('[AI] IDE hint: Pick the boldest title for thumbnails.');
  }
};
