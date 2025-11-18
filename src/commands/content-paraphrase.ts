const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const synonyms = {
  quick: "swift",
  helpful: "supportive",
  build: "assemble",
  guide: "navigate",
  big: "substantial",
  idea: "concept",
  clearly: "transparently",
};

const paraphraseSentence = (sentence: any, index: number): string => {
  const trimmed = sentence.trim();
  if (!trimmed) {
    return "";
  }
  const punctuationMatch = trimmed.match(/[.!?]$/);
  const punctuation = punctuationMatch ? punctuationMatch[0] : ".";
  const core = punctuationMatch ? trimmed.slice(0, -1) : trimmed;
  const words = core.split(/\s+/).filter(Boolean);
  const transformed = words
    .map((word: any, i: number) => {
      const lower = word.toLowerCase().replace(/[^a-z]/gi, "");
      return synonyms[lower as keyof typeof synonyms] ? synonyms[lower as keyof typeof synonyms] : word;
    })
    .reverse();
  const connector = index % 2 === 0 ? "In other words" : "Put simply";
  return `${connector}, ${transformed.join(" ")} ${punctuation}`;
};

export default {
  command: "ai-content paraphrase",
  description: "Paraphrase content at the sentence level",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running paraphrase", args);
    const text = getFlagValue(args, ["--text", "-t"]) || "";

    if (!text.trim()) {
      console.log("[AI-CONTENT] Provide text via --text to paraphrase.");
      return;
    }

    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((sentence: string) => sentence.trim())
      .filter(Boolean);

    const paraphrased = sentences
      .map((sentence: string, index: number) => paraphraseSentence(sentence, index))
      .join(" ");

    console.log("Paraphrased text:");
    console.log(paraphrased);
  },
};
