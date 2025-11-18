const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

export default {
  command: "ai-content caption-linkedin",
  description: "Generate a professional LinkedIn caption with a CTA",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running caption-linkedin", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "strategic storytelling";

    const caption = `Today I reflected on ${topic}, captured why it matters to teams, and surfaced a practical action that others can repeat.`;
    const cta = "Please share your experiences or questions below so we can grow this idea together.";

    console.log("Caption:", caption);
    console.log("CTA:", cta);
  },
};
