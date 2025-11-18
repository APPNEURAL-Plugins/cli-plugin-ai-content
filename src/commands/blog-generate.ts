const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const toneMap = {
  friendly: "warm and encouraging",
  professional: "polished and confident",
  casual: "relaxed and authentic",
};

const formatIntro = (topic, tone) => [
  `Intro: ${topic} stands out because it helps people solve immediate challenges with clarity.`,
  `Tone: ${toneMap[tone] || toneMap.friendly} keeps the reader engaged from the first sentence.`,
  `We will explore practical steps that make ${topic} actionable rather than abstract.`,
  "Expect tangible examples and a confident wrap-up."
];

const buildBody = (topic) => [
  `1. Define why ${topic} matters today and what is shifting around it.`,
  `2. Share a concise story or data point that proves the opportunity is real.`,
  `3. Detail step-by-step actions people can take once they finish reading.`,
  `4. Highlight common traps or misconceptions to avoid.`
];

const conclude = (topic) => `Keep ${topic} top of mind, iterate quickly, and share your wins with the community.`;

export default {
  command: "ai-content blog",
  description: "Generate a structured three-section blog post",
  async action(args) {
    console.log("[AI-CONTENT] Running blog", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "new ideas";
    const toneRaw = getFlagValue(args, ["--tone", "-o"]) || "friendly";
    const tone = toneRaw.toLowerCase();

    const intro = formatIntro(topic, tone);
    const body = buildBody(topic);
    const conclusion = conclude(topic);

    console.log("Intro:");
    intro.forEach((line) => console.log(`  ${line}`));
    console.log("Body:");
    body.forEach((point) => console.log(`  ${point}`));
    console.log(`Conclusion: ${conclusion}`);
  },
};
