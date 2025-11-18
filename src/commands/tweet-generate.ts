const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const ensureChars = (text) => text.length <= 280 ? text : `${text.slice(0, 270)}…`;

export default {
  command: "ai-content tweet",
  description: "Create three tweet variations under 280 characters",
  async action(args) {
    console.log("[AI-CONTENT] Running tweet", args);
    const idea = getFlagValue(args, ["--idea", "-i"]) || "sharpen focus";

    const variations = [
      `1/3 ${idea}: start with a bold promise, then back it with one quick win. #buildinpublic`,
      `2/3 Rapid experiments keep ${idea} fresh; iterate, document, and share the failures so the wins feel earned. #startup`,
      `3/3 Trending now: ${idea} + consistency > hacks. Keep shipping, keep learning. 🔁 #Momentum`
    ].map(ensureChars);

    variations.forEach((tweet) => console.log(tweet));
  },
};
