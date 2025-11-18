const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const sanitize = (value: any): string => value.toLowerCase().replace(/[^a-z0-9\s]+/g, "").trim();

export default {
  command: "ai-content seo-keywords",
  description: "Suggest SEO keywords, LSI terms, and content structure hints",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running seo-keywords", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "streamlined onboarding";
    const clean = sanitize(topic);
    const tokens = clean.split(/\s+/).filter(Boolean);

    const keywords = tokens.slice(0, 3);
    const lsi = tokens.map((token) => `${token} tips`).slice(0, 3);
    const longTail = [`${clean} strategy`, `${clean} checklist`, `${clean} for teams`];
    const structureHints = [
      "Intro: Why the topic matters now",
      "Proof: Anecdotes or data that validate the need",
      "Steps: Clear tactics broken into subsections",
      "Wrap: CTA + next step"
    ];

    console.log("Keywords:", keywords);
    console.log("LSI keywords:", lsi);
    console.log("Long-tail keywords:", longTail);
    console.log("Structure hints:");
    structureHints.forEach((hint) => console.log(`  • ${hint}`));
  },
};
