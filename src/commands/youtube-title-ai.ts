const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const buildTitles = (topic) => [
  `The ${topic} Blueprint Every Creator Needs`,
  `${topic} Exposed: What Nobody Told You`,
  `3 Secrets to Master ${topic} in 7 Days`,
  `Stop Doing This Before You Start ${topic}`,
  `${topic} Simplified: Cut Through the Noise`
];

export default {
  command: "ai-content yt-title",
  description: "Generate high CTR YouTube titles",
  async action(args) {
    console.log("[AI-CONTENT] Running yt-title", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "daily habits";
    const titles = buildTitles(topic);

    console.log("High-CTR titles:");
    titles.forEach((title) => console.log(`  • ${title}`));
  },
};
