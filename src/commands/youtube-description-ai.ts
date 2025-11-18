const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

export default {
  command: "ai-content yt-description",
  description: "Build a YouTube description with hook, bullets, timestamps, and CTA",
  async action(args) {
    console.log("[AI-CONTENT] Running yt-description", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "building calm workflows";

    const hook = `Hook: Dive into ${topic} with one principle that turns chaos into clarity.`;
    const bulletPoints = [
      `- Why ${topic} is the missing piece in quarterly planning.`,
      `- Step-by-step example that teams copy in under 15 minutes.`,
      `- Tools and rituals that keep ${topic} consistent.`
    ];
    const timestamps = [
      "0:00 Intro + intent",
      "1:30 Why the problem persists",
      "3:10 Actionable toolkit",
      "5:00 Quick recap"
    ];
    const cta = "CTA: Comment with your wins and subscribe for a new breakdown every week.";

    console.log(hook);
    console.log("Highlights:");
    bulletPoints.forEach((bullet) => console.log(`  ${bullet}`));
    console.log("Timestamps:");
    timestamps.forEach((stamp) => console.log(`  ${stamp}`));
    console.log(cta);
  },
};
