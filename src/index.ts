import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

const plugin = {
  name: "ai-content",
  version: "0.1.0",
  install(cli: Command) {
    // Create 'tools' command if not present
    let toolsCmd = cli.commands.find((cmd: Command) => cmd.name() === "tools");
    if (!toolsCmd) {
      toolsCmd = cli.command("tools");
    }
    let aiContentCmd = toolsCmd.commands.find((cmd: Command) => cmd.name() === "ai-content");
    if (!aiContentCmd) {
      aiContentCmd = toolsCmd.command("ai-content");
    }
    registerCommands(aiContentCmd, { prefix: "", plugin: "ai-content" });
  },
};

export default plugin;
