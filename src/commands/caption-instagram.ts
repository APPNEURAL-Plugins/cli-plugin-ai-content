const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const moodMap = {
  upbeat: "✨😄",
  calm: "🌿🕯️",
  bold: "🔥🚀",
  cozy: "🧶☕",
  default: "💫📸",
};

const slugify = (value: any): string => value.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase().substring(0, 20);

export default {
  command: "ai-content caption-instagram",
  description: "Build an Instagram caption with emojis and hashtags",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running caption-instagram", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "creative momentum";
    const mood = getFlagValue(args, ["--mood", "-m"]) || "default";

    const emojis = moodMap[mood.toLowerCase() as keyof typeof moodMap] || moodMap.default;
    const caption = `${emojis} ${topic} keeps us curious, playful, and proud of every small push forward.`;
    const topicSlug = slugify(topic);
    const hashtags = [
      `#${topicSlug || "daily"}`,
      "#contentmoment",
      "#buildinpublic",
      "#storytelling",
      "#staycurious",
    ].join(" ");

    console.log("Caption:", caption);
    console.log("Emojis:", emojis);
    console.log("Hashtags:", hashtags);
  },
};
