import { Command } from "commander";

export function registerCommands(cli: Command, options: { prefix: string; plugin: string }) {

  cli
    .command(`anx tools ${options.prefix} rewrite <file>`)
    .description("Rewrite content to a new tone.")
    .action((...args: unknown[]) => {
      console.log("Would run AI content rewrite with args:", args);
    });

  cli
    .command(`anx tools ${options.prefix} summarize <file>`)
    .description("Summarize long-form content.")
    .action((...args: unknown[]) => {
      console.log("Would run AI content summarize with args:", args);
    });

  cli
    .command(`anx tools ${options.prefix} idea <topic>`)
    .description("Brainstorm content ideas.")
    .action((...args: unknown[]) => {
      console.log("Would run AI content ideation with args:", args);
    });

}
