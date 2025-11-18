export default {
  command: "ai-content content-paraphrase",
  description: "Paraphrase content using alternative wording",
  async action(args) {
    console.log("[AI] Running content-paraphrase with args:", args);
    const input = args.join(" ").trim();
    if (!input) {
      console.log("[AI] Need a sentence or paragraph to paraphrase.");
      return;
    }
    const synonyms = {
      "help": "assist",
      "build": "construct",
      "important": "vital",
      "need": "require",
      "guide": "manual"
    };
    const paraphrased = input.split(" ").map((word) => synonyms[word.toLowerCase()] || word).join(" ");
    console.log('[AI] Paraphrased text:', paraphrased);
    console.log('[AI] IDE hint: Use native thesaurus after reviewing output.');
  }
};
