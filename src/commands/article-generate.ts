const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

const buildSubheadings = (headline: any): string[] => [
  `Why ${headline} matters today`,
  `Steps leaders take to own ${headline}`,
  `Metrics proving ${headline} moves the needle`
];

const wrapConclusion = (headline: any): string => `Keeping ${headline} in focus sparks experiments and sharper decisions.`;

export default {
  command: "ai-content article",
  description: "Produce a short article with headline, summary, subheadings, and closing",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running article", args);
    const headline = getFlagValue(args, ["--headline", "-h"]) || "Emerging trends in productivity";

    const summaryParagraph = `${headline} guides readers through new thinking, highlights the stakes, and surfaces practical next steps.`;
    const subheadings = buildSubheadings(headline);
    const conclusion = wrapConclusion(headline);

    console.log("Title:", headline);
    console.log("Summary:", summaryParagraph);
    console.log("Subheadings:");
    subheadings.forEach((heading) => console.log(`  • ${heading}`));
    console.log("Conclusion:", conclusion);
  },
};
