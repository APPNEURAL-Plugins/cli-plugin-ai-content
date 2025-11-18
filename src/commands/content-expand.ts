const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const expandSentence = (segment, index) => {
  const transitions = ["Furthermore", "For example", "That means", "Ultimately"];
  const transition = transitions[index % transitions.length];
  return `${transition}, ${segment} evolves with more detail, showing how it plays out in everyday work.`;
};

const addExamples = (segment) => `One concrete illustration: ${segment.toLowerCase()} could involve teammates writing a quick prototype and sharing it for feedback.`;

export default {
  command: "ai-content expand",
  description: "Elaborate on a topic with added detail, examples, and transitions",
  async action(args) {
    console.log("[AI-CONTENT] Running expand", args);
    const text = getFlagValue(args, ["--text", "-t"]) || "";

    if (!text.trim()) {
      console.log("[AI-CONTENT] Provide text via --text to expand.");
      return;
    }

    const segments = text.split(/[.!?]+/).map((segment) => segment.trim()).filter(Boolean);
    const normalized = segments.length ? segments : ["Key idea emerges from simple experiments"];
    const elaborated = normalized
      .map((segment, index) => `${expandSentence(segment, index)} ${addExamples(segment)}`)
      .join("\n\n");

    console.log("Expanded text:");
    console.log(elaborated);
  },
};
