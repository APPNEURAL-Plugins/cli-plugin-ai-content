import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

export default {
  name: "ai-content",
  version: "0.1.0",
  install(cli: Command) {
    registerCommands(cli, { prefix: "ai-content", plugin: "ai-content" });
  },
};
