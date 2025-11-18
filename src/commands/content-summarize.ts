const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const buildSummaryLines = (sentences: any[], count: number): string[] => {
  const lines = [];
  const fallback = "Key idea: highlight the main point with clarity.";
  for (let i = 0; i < count; i += 1) {
    const source = sentences[i] || sentences[i % sentences.length] || fallback;
    const trimmed = source.replace(/\s+/g, " ").trim();
    lines.push(`${i + 1}. ${trimmed}`);
  }
  return lines;
};

export default {
  command: "ai-content summarize",
  description: "Produce short, medium, and long summaries",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running summarize", args);
    const text = getFlagValue(args, ["--text", "-t"]) || "";

    if (!text.trim()) {
      console.log("[AI-CONTENT] Provide text via --text to summarize.");
      return;
    }

    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((sentence: string) => sentence.trim().replace(/^\d+\./, ""))
      .filter(Boolean);

    console.log("Short summary (2 lines):");
    buildSummaryLines(sentences, 2).forEach((line) => console.log(`  ${line}`));
    console.log("Medium summary (5 lines):");
    buildSummaryLines(sentences, 5).forEach((line) => console.log(`  ${line}`));
    console.log("Long summary (8 lines):");
    buildSummaryLines(sentences, 8).forEach((line) => console.log(`  ${line}`));
  },
};
