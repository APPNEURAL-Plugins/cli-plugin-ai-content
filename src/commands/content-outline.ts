const getFlagValue = (args, flags) => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

export default {
  command: "ai-content outline",
  description: "Draft a structured outline with sections, subpoints, and CTA",
  async action(args) {
    console.log("[AI-CONTENT] Running outline", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "creative frameworks";
    const title = `Exploring ${topic} for teams that move quickly`;
    const sections = [
      { title: "Introduction", points: ["Define the core tension", "Describe why it matters now"] },
      { title: "Problem", points: ["Symptoms teams see", "How it slows outcomes"] },
      { title: "Approach", points: ["Key steps", "Tools or rituals"] },
      { title: "Examples", points: ["Quick case study", "Lessons learned"] },
      { title: "Conclusion", points: ["Reinforce the value", "Suggested next experiment"] }
    ];
    const cta = "CTA: Invite the reader to share their own experiments or download the template.";

    console.log("Title:", title);
    sections.forEach((section) => {
      console.log(`Section: ${section.title}`);
      section.points.forEach((point) => console.log(`  - ${point}`));
    });
    console.log(cta);
  },
};
