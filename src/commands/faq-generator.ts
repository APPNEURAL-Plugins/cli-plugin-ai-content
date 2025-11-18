const getFlagValue = (args: any[], flags: any[]): any => {
  for (let i = 0; i < args.length; i += 1) {
    if (flags.includes(args[i]) && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};

export default {
  command: "ai-content faq",
  description: "Generate 5-10 FAQs with answers based on a topic",
  async action(args: any): Promise<void> {
    console.log("[AI-CONTENT] Running faq", args);
    const topic = getFlagValue(args, ["--topic", "-t"]) || "the product";
    const faqs = [
      {
        q: `What is ${topic}?`,
        a: `${topic} is a focused approach that helps people understand the why and how behind the idea.`
      },
      {
        q: `Who benefits from ${topic}?`,
        a: "Teams, leaders, and anyone who wants clarity before they act."
      },
      {
        q: `How do I start with ${topic}?`,
        a: "Begin with a quick experiment, gather feedback, and iterate once you learn something unexpected."
      },
      {
        q: `What problem does ${topic} solve?`,
        a: "It reduces hesitation and keeps collaborators aligned on shared outcomes."
      },
      {
        q: `How often should I revisit ${topic}?`,
        a: "Review it whenever new data arrives or each sprint so it stays relevant."
      },
      {
        q: `Where can I learn more about ${topic}?`,
        a: "Look for case studies, short videos, and internal notes that document your wins."
      }
    ];

    faqs.forEach((entry) => {
      console.log(`Q: ${entry.q}`);
      console.log(`A: ${entry.a}`);
    });
  },
};
