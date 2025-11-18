const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const synonyms = {
  important: "essential",
  change: "shift",
  results: "outcomes",
  strategy: "approach",
  improve: "elevate",
  success: "win",
  create: "craft",
  build: "assemble",
};

const connectors = ["In practice", "To make this concrete", "At its core", "The signal here is"];

const replaceWords = (sentence) =>
  sentence
    .split(/(\s+)/)
    .map((token) => {
      const lower = token.toLowerCase();
      if (synonyms[lower]) {
        return synonyms[lower];
      }
      return token;
    })
    .join("");

const reorderSentence = (sentence, index) => {
  const trimmed = sentence.trim();
  if (!trimmed) {
    return connectors[index % connectors.length];
  }
  const punctuationMatch = trimmed.match(/[.!?]$/);
  const punctuation = punctuationMatch ? punctuationMatch[0] : ".";
  const core = punctuationMatch ? trimmed.slice(0, -1) : trimmed;
  const words = core.split(/\s+/).filter(Boolean);
  const prefix = connectors[index % connectors.length];
  if (words.length <= 3) {
    return `${prefix} ${core}${punctuation}`;
  }
  const shifted = `${words.slice(1).join(" ")} ${words[0]}`;
  return `${prefix} ${shifted}${punctuation}`;
};

export default {
  command: "ai-content rewrite",
  description: "Rewrite text with refreshed vocabulary and structure",
  async action(args) {
    console.log("[AI-CONTENT] Running rewrite", args);
    const text = getFlagValue(args, ["--text", "-t"]) || "";
    const style = getFlagValue(args, ["--style", "-s"]);

    if (!text.trim()) {
      console.log("[AI-CONTENT] Please supply the passage you want rewritten.");
      return;
    }

    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);

    const rewritten = sentences
      .map((sentence, index) => {
        const reordered = reorderSentence(replaceWords(sentence), index);
        return reordered;
      })
      .join(" ");

    const styleNote = style ? ` (style hint: ${style})` : "";
    console.log("Rewritten text" + styleNote + ":");
    console.log(rewritten);
  },
};
